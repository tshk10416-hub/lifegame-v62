// ★★★ 追加: game.js とキーを共有 ★★★
const BALANCE_HISTORY_KEY = 'lifeGameBalanceHistory'; // game.js で定義したものと一致させる

document.addEventListener('DOMContentLoaded', () => {
    // ★★★ 修正: 正しいキーでデータを読み込む ★★★
    const historyDataString = localStorage.getItem(BALANCE_HISTORY_KEY);
    const history = historyDataString ? JSON.parse(historyDataString) : [];

    const ctx = document.getElementById('historyChart');

    if (!ctx) {
        console.error("Chart canvas not found!");
        return;
    }

    if (history.length === 0) {
        const container = document.querySelector('.chart-container');
        if(container) {
            container.innerHTML = '<p style="text-align: center;">まだグラフを表示できるデータがありません。</p>';
        }
        return;
    }

    const labels = history.map(e => `${e.age}代`);
    // const incomes = history.map(e => e.income); // 不要
    // const expenses = history.map(e => e.expense); // 不要
    const diffs = history.map(e => e.diff); // 年間差額
    let cumulative = 100; // 初期資産
    const cumulatives = history.map(e => {
        cumulative += (e.diff * 10); // 10年分の差額を加算
        return cumulative;
    });

    if (window.historyChartInstance) {
        window.historyChartInstance.destroy();
    }

    // ★★★ 修正: datasets を変更 ★★★
    window.historyChartInstance = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: '収支差額 (年間)',
                    data: diffs,
                    borderColor: 'rgb(54, 162, 235)',
                    fill: false,
                    tension: 0.1,
                    yAxisID: 'y' // 主軸
                },
                {
                    label: '総資産 (累計)',
                    data: cumulatives,
                    borderColor: 'rgb(153, 102, 255)',
                    fill: false,
                    tension: 0.1,
                    yAxisID: 'yAsset' // 第2軸
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: '年間の収支差額 (万円)'
                    },
                    // 差額はマイナスになる可能性があるので beginAtZero: true は削除
                },
                yAsset: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                     title: {
                        display: true,
                        text: '総資産 (万円)'
                    },
                    grid: {
                        drawOnChartArea: false,
                    },
                     beginAtZero: false // 資産もマイナスになる可能性
                }
            }
        }
    });
});