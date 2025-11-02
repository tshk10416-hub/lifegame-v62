// ==========================================================
// 1. カードデータ定義 (全43種)
// ==========================================================
const CARD_DATA = {
    // --- 職業カード (J001 - J009) ---
    "J001": { title: "職業: 会社員", type: "job", salary: { 30: 400, 40: 500, 50: 600, 60: 600 } },
    "J002": { title: "職業: 公務員", type: "job", salary: { 30: 500, 40: 600, 50: 700, 60: 700 } },
    "J003": { title: "職業: 料理人", type: "job", salary: { 30: 250, 40: 300, 50: 400, 60: 400 } },
    "J004": { title: "職業: 保育士", type: "job", salary: { 30: 300, 40: 350, 50: 450, 60: 450 } },
    "J005": { title: "職業: 医師", type: "job", salary: { 30: 1000, 40: 1500, 50: 1700, 60: 1700 } },
    "J006": { title: "職業: 看護師", type: "job", salary: { 30: 450, 40: 600, 50: 700, 60: 700 } },
    "J007": { title: "職業: 美容師", type: "job", salary: { 30: 350, 40: 400, 50: 450, 60: 450 } },
    "J008": { title: "職業: フリーター", type: "job", salary: { 30: 200, 40: 200, 50: 200, 60: 200 } },
    "J009": { title: "職業: パート従業員", type: "job", salary: { 30: 100, 40: 100, 50: 100, 60: 100 } },

    // --- 結婚カード (M001 - M003) ---
    "M001": { title: "結婚💍 - 親族のみの挙式", type: "marriage", effect: "結婚費用: 100万円", explanation: "親族のみのシンプル挙式。費用を抑えたい人に。" },
    "M002": { title: "結婚💍 - 標準的な挙式", type: "marriage", effect: "結婚費用: 300万円", explanation: "一般的な挙式。友人や親族を招待して思い出に。" },
    "M003": { title: "結婚💍 - 豪華な挙式", type: "marriage", effect: "結婚費用: 600万円", explanation: "豪華な挙式。高額だが一生の思い出になる。" },

    // --- 子どもカード (C001 - C003) ---
    "C001": { title: "子供👶 - 1人授かる", type: "children", effect: "年間教育費: 80万円", explanation: "1人目の子ども。教育費がかかるが喜び大。" },
    "C002": { title: "子供👶 - 2人授かる", type: "children", effect: "年間教育費: 160万円", explanation: "2人目の子ども。家族が増えて賑やかに。" },
    "C003": { title: "子供👶 - 3人授かる", type: "children", effect: "年間教育費: 240万円", explanation: "3人目の子ども。教育費が増大する。" },

    // --- 住宅カード (H001 - H009) ---
    "H001": { title: "一戸建て🏡 - お手ごろ", type: "house", costsByIncome: { low: 50, mid: 100, high: 160 }, explanation: "お手ごろ一戸建て。" },
    "H002": { title: "一戸建て🏡 - 標準",   type: "house", costsByIncome: { low: 65, mid: 130, high: 170 }, explanation: "標準一戸建て。" },
    "H003": { title: "一戸建て🏡 - 豪華",   type: "house", costsByIncome: { low: 130, mid: 200, high: 270 }, explanation: "豪華一戸建て。" },
    "H004": { title: "マンション🏢 - お手ごろ", type: "house", costsByIncome: { low: 50, mid: 90, high: 150 }, explanation: "お手ごろマンション。" },
    "H005": { title: "マンション🏢 - 標準",   type: "house", costsByIncome: { low: 60, mid: 120, high: 160 }, explanation: "標準マンション。" },
    "H006": { title: "マンション🏢 - 豪華",   type: "house", costsByIncome: { low: 120, mid: 180, high: 250 }, explanation: "豪華マンション。" },
    "H007": { title: "賃貸🏠 - お手ごろ",   type: "house", costsByIncome: { low: 50, mid: 90, high: 150 }, explanation: "お手ごろ賃貸。" },
    "H008": { title: "賃貸🏠 - 標準",     type: "house", costsByIncome: { low: 60, mid: 120, high: 160 }, explanation: "標準賃貸。" },
    "H009": { title: "賃貸🏠 - 豪華",     type: "house", costsByIncome: { low: 120, mid: 180, high: 250 }, explanation: "豪華賃貸。" },

    // --- 自動車カード (A001 - A003) ---
    "A001": { title: "自動車🚗 - お手ごろクラス", type: "car", effect: "購入費用: 200万円", explanation: "お手ごろ車。燃費が良い。" },
    "A002": { title: "自動車🚗 - 標準クラス", type: "car", effect: "購入費用: 350万円", explanation: "標準車。家族用に適する。" },
    "A003": { title: "自動車🚗 - ハイクラス", type: "car", effect: "購入費用: 600万円", explanation: "ハイクラス車。快適ドライブ。" },

    // --- 保険カード (I001 - I003) ---
    "I001": { title: "生命保険カード", type: "insurance", effect: "年間保険料: 30万円", explanation: "生命保険。万一の備え。" },
    "I002": { title: "火災保険カード", type: "insurance", effect: "年間保険料: 10万円", explanation: "火災保険。家財保護。" },
    "I003": { title: "自動車保険カード", type: "insurance", effect: "年間保険料: 6万円", explanation: "自動車保険。事故時安心。" },

    // --- ライフイベントカード (L001 - L011) ---
    "L001": { title: "子どもの英才教育", type: "life_event_asset_change", effect: "教育資金: 150万円 (一括支出)", explanation: "子どもの才能を伸ばす教育投資。" },
    "L002": { title: "家族旅行", type: "life_event_asset_change", effect: "旅行費用: 50万円 (一括支出)", explanation: "家族の絆を深める旅行。" },
    "L003": { title: "冠婚葬祭", type: "life_event_asset_change", effect: "臨時出費: 30万円 (一括支出)", explanation: "冠婚葬祭の出費。人生の節目。" },
    "L004": { title: "交通事故", type: "life_event", effect: "修理・治療費: 200万円 (自動車保険で0円)", explanation: "交通事故。保険でカバー可能。" },
    "L005": { title: "家族もしくは本人の怪我", type: "life_event", effect: "治療費: 100万円 (生命保険で0円)", explanation: "怪我の治療。保険重要。" },
    "L006": { title: "病気で入院", type: "life_event", effect: "治療費: 150万円 (生命保険で0円)", explanation: "病気入院。医療費負担軽減。" },
    "L007": { title: "盗難被害", type: "life_event", effect: "被害額: 100万円 (火災保険で0円)", explanation: "盗難被害。保険で補償。" },
    "L008": { title: "装飾品の購入", type: "life_event_asset_change", effect: "購入費用: 50万円 (一括支出)", explanation: "装飾品購入。生活の彩り。" },
    "L009": { title: "自分磨き", type: "life_event_asset_change", effect: "投資費用: 20万円 (一括支出)", explanation: "自分磨き投資。スキルアップ。" },
    "L010": { title: "趣味に夢中", type: "life_event_asset_change", effect: "出費: 40万円 (一括支出)", explanation: "趣味の出費。リフレッシュ。" },
    "L011": { title: "子どもの結婚", type: "life_event", effect: "援助資金: 100万円 (一括支出)", explanation: "子どもの結婚援助。" },

    // --- ソーシャルイベントカード (S001 - S005 + L012) ---
    "S001": { title: "好景気発生", type: "social_event", effect: "世帯年収が2割プラス", explanation: "好景気。収入増加のチャンス。" },
    "S002": { title: "不景気発生", type: "social_event", effect: "世帯年収が2割マイナス", explanation: "不景気。収入減少のリスク。" },
    "S003": { title: "インフレ発生", type: "social_event", effect: "年間支出が1割増加", explanation: "インフレ。物価上昇。" },
    "S004": { title: "新型感染症大流行", type: "social_event", effect: "臨時支出: 50万円 (一括支出)", explanation: "感染症流行。医療出費。" },
    "S005": { title: "社会保障費増大", type: "social_event", effect: "年間支出が5%増加", explanation: "社会保障費増。負担増加。" },
    "L012": { title: "子育て世帯特別給付金", type: "social_event", effect: "子どもの人数×10万円を支給", explanation: "子育て支援給付金。" },

    // --- 投資カード (T001 - T012) ---
    "T001": { title: "積立投資カード (月5千円)", type: "investment", effect: "年間積立: 6万円", explanation: "少額積立投資。長期で資産形成。" },
    "T002": { title: "積立投資カード (月1万円)", type: "investment", effect: "年間積立: 12万円", explanation: "標準積立投資。" },
    "T003": { title: "積立投資カード (月2万円)", type: "investment", effect: "年間積立: 24万円", explanation: "積極積立投資。" },
    "T004": { title: "積立投資カード (月3万円)", type: "investment", effect: "年間積立: 36万円", explanation: "中規模積立投資。" },
    "T005": { title: "積立投資カード (月4万円)", type: "investment", effect: "年間積立: 48万円", explanation: "大規模積立投資。" },
    "T006": { title: "積立投資カード (月5万円)", type: "investment", effect: "年間積立: 60万円", explanation: "高額積立投資。" },
    "T007": { title: "一括投資カード (20万円)", type: "investment", effect: "投資金額: 20万円 (一括支出)", explanation: "少額一括投資。" },
    "T008": { title: "一括投資カード (50万円)", type: "investment", effect: "投資金額: 50万円 (一括支出)", explanation: "標準一括投資。" },
    "T009": { title: "一括投資カード (70万円)", type: "investment", effect: "投資金額: 70万円 (一括支出)", explanation: "中規模一括投資。" },
    "T010": { title: "一括投資カード (100万円)", type: "investment", effect: "投資金額: 100万円 (一括支出)", explanation: "大規模一括投資。" },
    "T011": { title: "一括投資カード (150万円)", type: "investment", effect: "投資金額: 150万円 (一括支出)", explanation: "高額一括投資。" },
    "T012": { title: "一括投資カード (200万円)", type: "investment", effect: "投資金額: 200万円 (一括支出)", explanation: "最大一括投資。" }
};

// ==========================================================
// 2. ゲームの状態管理
// ==========================================================
let gameState = {
    currentAge: 30,
    players: {
        player1: { name: '', job: '', income: 0, grossIncome: 0, jobId: null, needsNewJob: false, promotionSuccess: false },
        player2: { name: '', job: '', income: 0, grossIncome: 0, jobId: null, needsNewJob: false, promotionSuccess: false }
    },
    totalAssets: 100, // 初期資産
    annualExpense: 0,
    marriage: { type: '-', cost: 0, cardScanned: false },
    children: { count: 0, annualCost: 0, cardScanned: false },
    house: { type: '-', annualCost: 0, cardId: null, cardScanned: false },
    car: { type: '-', count: 0, cost: 0, totalPurchaseCost: 0, cardScanned: false }, // ターン中の購入コスト
    insurance: { life: false, fire: false, auto: false, annualCost: 0, cardScanned: false },
    investment: {
        tsumitateTotal: 0, // 現在の「年間」積立額 (UI表示用)
        ikkatsuTotal: 0,   // 一括投資の「元本」合計 (UI表示用)
        tsumitateLog: [],  // 積立計算用ログ (例: { amount: 12, startAge: 30, endAge: 40 })
        ikkatsuLog: []     // 一括計算用ログ (例: { amount: 100, startAge: 30 })
    },
    events: [],
    livingCost: 0,
    // ★ 収支履歴を詳細化
    balanceHistory: [], // 例: { age: 30, income: 400, expense: 200, diff: 200, details: { marriage: 100, car: 200, ... } }
    isCareerChallengeActive: false,
    currentPlayerChallenge: null,
    currentGuidance: null,
    guidanceContextForApply: null,
    turnEventCompleted: false,
    tempDeductions: null,
    finalInvestmentResult: null, // 最終投資結果を一時保存
    // ★ ターン中のイベント支出を記録
    turnExpenses: {
        marriage: 0,
        car: 0,
        life_event: 0,
        social_event: 0,
        investment_ikkatsu: 0
    }
};

const GAME_STATE_KEY = 'lifeGameGameState';
const BALANCE_HISTORY_KEY = 'lifeGameBalanceHistory';
// ★★★ 新規追加: 殿堂入り（セーブデータ）用のキー ★★★
const HALL_OF_FAME_KEY = 'lifeGameHallOfFame';


let cameraStream = null;
let scanning = false;
let animationFrameId = null;
let lastScannedCardId = null;

// ★ 最終グラフのインスタンスを保持
let finalBalanceChartInstance = null;


// ==========================================================
// 3. ユーティリティ関数
// ==========================================================
function parseNumber(effect) {
    if (!effect) return 0;
    const match = effect.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
}

function addEvent(message) {
    gameState.events.push(message);
    const list = document.getElementById('event-list');
    if (list) {
        const p = document.createElement('p');
        p.textContent = message;
        list.appendChild(p);
        list.scrollTop = list.scrollHeight;
    }
}

// ★ ターン中のイベント支出をリセット
function resetTurnExpenses() {
    gameState.turnExpenses = {
        marriage: 0,
        car: 0,
        life_event: 0,
        social_event: 0,
        investment_ikkatsu: 0
    };
}


function updateDisplay() {
    document.querySelector('#player1 .player-name').textContent = gameState.players.player1.name || 'プレイヤー1';
    document.getElementById('p1-job').textContent = gameState.players.player1.job || '-';
    document.getElementById('p1-income').textContent = gameState.players.player1.income || 0;
    document.querySelector('#player2 .player-name').textContent = gameState.players.player2.name || 'プレイヤー2';
    document.getElementById('p2-job').textContent = gameState.players.player2.job || '-';
    document.getElementById('p2-income').textContent = gameState.players.player2.income || 0;
    
    document.getElementById('current-age').textContent = (gameState.currentAge < 70) ? (gameState.currentAge === 60 ? "60-64歳" : `${gameState.currentAge}代`) : "65歳～";

    const householdNetIncome = (gameState.players.player1.income || 0) + (gameState.players.player2.income || 0);
    document.getElementById('household-income').textContent = householdNetIncome;
    document.getElementById('total-assets').textContent = gameState.totalAssets || 0;
    document.getElementById('annual-expense').textContent = gameState.annualExpense || 0;
    document.getElementById('marriage-type').textContent = gameState.marriage.type;
    document.getElementById('marriage-cost').textContent = gameState.marriage.cost;
    document.getElementById('children-count').textContent = gameState.children.count;
    document.getElementById('children-cost').textContent = gameState.children.annualCost;
    document.getElementById('house-type').textContent = gameState.house.type;
    document.getElementById('house-cost').textContent = gameState.house.annualCost;
    document.getElementById('car-type').textContent = gameState.car.type;
    document.getElementById('car-count').textContent = gameState.car.count;
    document.getElementById('car-cost').textContent = gameState.car.totalPurchaseCost;
    document.getElementById('life-insurance').textContent = gameState.insurance.life ? '加入' : '未加入';
    document.getElementById('fire-insurance').textContent = gameState.insurance.fire ? '加入' : '未加入';
    document.getElementById('auto-insurance').textContent = gameState.insurance.auto ? '加入' : '未加入';
    document.getElementById('insurance-cost').textContent = gameState.insurance.annualCost;
    document.getElementById('living-cost').textContent = gameState.livingCost;
    
    document.getElementById('tsumitate-amount').textContent = gameState.investment.tsumitateTotal || 0;
    document.getElementById('ikkatsu-amount').textContent = gameState.investment.ikkatsuTotal || 0;
}

function updateHouseCost() {
    if (!gameState.house.cardId) {
        gameState.house.annualCost = 0;
        return;
    }
    const houseCard = CARD_DATA[gameState.house.cardId];
    if (!houseCard || !houseCard.costsByIncome) {
        console.error("Invalid house card data for ID:", gameState.house.cardId);
        gameState.house.annualCost = 0;
        return;
    }
    const householdGrossIncome = (gameState.players.player1.grossIncome || 0) + (gameState.players.player2.grossIncome || 0);
    let newHouseCost = 0;
    if (householdGrossIncome < 600) { newHouseCost = houseCard.costsByIncome.low; }
    else if (householdGrossIncome < 1000) { newHouseCost = houseCard.costsByIncome.mid; }
    else { newHouseCost = houseCard.costsByIncome.high; }
    gameState.house.annualCost = newHouseCost;
}

function recalculateAnnualExpense() {
    updateHouseCost();
    calculateLivingCost();
    
    let childCost = gameState.children.annualCost || 0;
    let houseCost = gameState.house.annualCost || 0;
    
    if (gameState.currentAge === 50) {
        childCost = 0;
    }
    else if (gameState.currentAge === 60) {
        childCost = 0;
        houseCost = 0;
    }

    gameState.annualExpense = (childCost) +
                              (houseCost) +
                              (gameState.insurance.annualCost || 0) +
                              (gameState.livingCost || 0) +
                              (gameState.investment.tsumitateTotal || 0);
}


function saveGameState() {
    try {
        localStorage.setItem(GAME_STATE_KEY, JSON.stringify(gameState));
        localStorage.setItem(BALANCE_HISTORY_KEY, JSON.stringify(gameState.balanceHistory));
    } catch (e) {
        console.error("Failed to save game state:", e);
        addEvent("エラー: ゲームの状態を保存できませんでした。");
    }
}

function loadGameState() {
    try {
        const savedState = localStorage.getItem(GAME_STATE_KEY);
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            Object.assign(gameState, parsedState);
            
            // 旧バージョンからの互換性対応
            if (typeof gameState.investment.tsumitate === 'number') {
                gameState.investment = {
                    tsumitateTotal: gameState.investment.tsumitate || 0,
                    ikkatsuTotal: gameState.investment.ikkatsu || 0,
                    tsumitateLog: [],
                    ikkatsuLog: []
                };
            }
             // ★ 互換性対応: balanceHistory が詳細形式でない場合
            if (gameState.balanceHistory.length > 0 && typeof gameState.balanceHistory[0].details === 'undefined') {
                gameState.balanceHistory = gameState.balanceHistory.map(entry => ({
                    ...entry,
                    details: {
                        childCost: (entry.age < 50) ? (gameState.children.annualCost || 0) : 0,
                        houseCost: (entry.age < 60) ? (gameState.house.annualCost || 0) : 0,
                        insuranceCost: gameState.insurance.annualCost || 0,
                        livingCost: entry.expense - ((entry.age < 50) ? (gameState.children.annualCost || 0) : 0) - ((entry.age < 60) ? (gameState.house.annualCost || 0) : 0) - (gameState.insurance.annualCost || 0),
                        tsumitate: 0, // 旧データからは復元不可
                        marriage: (entry.age === 30) ? (gameState.marriage.cost || 0) : 0,
                        car: 0, // 旧データからは復元不可
                        life_event: 0, // 旧データからは復元不可
                        social_event: 0, // 旧データからは復元不可
                        investment_ikkatsu: 0 // 旧データからは復元不可
                    }
                }));
            }
            
            // 投資結果変数の初期化
            gameState.finalInvestmentResult = null;
            // ターン中支出の初期化
            resetTurnExpenses();
            return true;
        }
    } catch (e) {
        console.error("Failed to load game state:", e);
        localStorage.removeItem(GAME_STATE_KEY);
        localStorage.removeItem(BALANCE_HISTORY_KEY);
        localStorage.removeItem('gameStarted');
    }
    return false;
}

// ==========================================================
// 4. ゲーム開始関数
// ==========================================================
function startTitleGame() {
    const titleScreen = document.getElementById('titleScreen');
    if (titleScreen) titleScreen.style.display = 'none';
    const setupModal = document.getElementById('setupModal');
    if (setupModal) setupModal.style.display = 'flex';
}

function startGame() {
    gameState.players.player1.name = document.getElementById('player1Name').value || 'プレイヤー1';
    gameState.players.player2.name = document.getElementById('player2Name').value || 'プレイヤー2';
    document.getElementById('setupModal').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
    
    localStorage.setItem('gameStarted', 'true');
    saveGameState();
    
    showGuidanceModal('job1');
    updateDisplay();
}

// ==========================================================
// 5. カメラ関数
// ==========================================================

function openMainScanButton() {
    const context = gameState.guidanceContextForApply || gameState.currentGuidance;
    
    if (context) {
        gameState.guidanceContextForApply = null; 
        showGuidanceModal(context); 
    } else if (gameState.isCareerChallengeActive) {
        alert("キャリアチャレンジを完了してください。");
    } else {
        alert("現在はカードをスキャンするタイミングではありません。「次のターンへ」ボタンを押してください。");
    }
}

function openCamera(type) {
     const modal = document.getElementById('cameraModal');
    if (modal) modal.style.display = 'flex';
    const statusEl = document.getElementById('scanStatus');
    if (statusEl) statusEl.textContent = 'カメラを起動中...';
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
        .then(stream => {
            cameraStream = stream;
            const video = document.getElementById('cameraVideo');
            video.srcObject = stream;
            video.oncanplay = () => {
                scanning = true;
                if (statusEl) statusEl.textContent = 'QRコードをスキャンしてください';
                scanQR();
            };
        })
        .catch(err => {
            console.error('カメラアクセスエラー:', err);
            let errorMessage = 'カメラアクセスに失敗しました。';
            if (err.name === 'NotAllowedError') {errorMessage = 'カメラアクセスが許可されていません...';}
            else if (err.name === 'NotFoundError') {errorMessage = 'カメラが見つかりません...';}
            else if (err.name === 'OverconstrainedError') {
                errorMessage = 'バックカメラが利用できません...';
                navigator.mediaDevices.getUserMedia({ video: true })
                    .then(stream => {
                        cameraStream = stream;
                        const video = document.getElementById('cameraVideo');
                        video.srcObject = stream;
                        video.oncanplay = () => {
                            scanning = true;
                            if (statusEl) statusEl.textContent = 'インカメラでQRコードをスキャンしてください';
                            scanQR();
                        };
                    })
                    .catch(retryErr => {
                        console.error('リトライ失敗:', retryErr);
                        errorMessage = 'カメラアクセスに失敗しました...';
                        if (statusEl) statusEl.textContent = errorMessage;
                    });
                return;
            } else if (err.name === 'SecurityError') { errorMessage = 'HTTPSが必要です...'; }
            if (statusEl) statusEl.textContent = errorMessage;
            stopScan();
        });
}

function scanQR() {
    if (!scanning) { if (animationFrameId) { cancelAnimationFrame(animationFrameId); animationFrameId = null; } return; }
    const video = document.getElementById('cameraVideo');
    if (video.readyState === video.HAVE_ENOUGH_DATA && video.videoWidth > 0) {
        const canvas = document.getElementById('cameraCanvas');
        const ctx = canvas.getContext('2d');
        if (canvas.width !== video.videoWidth) { canvas.width = video.videoWidth; canvas.height = video.videoHeight; }
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        try { const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height); const code = jsQR(imageData.data, canvas.width, canvas.height); if (code && code.data) { handleQRCode(code.data); } } catch (e) { console.error("Canvas error:", e); }
    }
    if (scanning) { animationFrameId = requestAnimationFrame(scanQR); }
}

function handleQRCode(data) {
    stopScan();
    try {
        if (!data) { throw new Error("QR data is empty."); }
        const url = new URL(data, window.location.href);
        const cardId = url.searchParams.get('card_id');
        if (cardId && CARD_DATA[cardId]) {
            lastScannedCardId = cardId;
            const currentContext = gameState.guidanceContextForApply || gameState.currentGuidance;
            const expectedType = getExpectedCardType(currentContext);
            if (currentContext === 'turnEvent') {
                const allowedEventTypes = ['life_event', 'life_event_asset_change', 'social_event', 'investment'];
                if (!allowedEventTypes.includes(CARD_DATA[cardId].type)) {
                    alert(`ターンイベントでは「ライフイベント」「社会情勢」「投資」カードのみスキャンできます。\n(スキャンしたタイプ: ${CARD_DATA[cardId].type})`);
                    lastScannedCardId = null;
                    showGuidanceModal(currentContext); 
                    return;
                }
            } else if (expectedType && CARD_DATA[cardId].type !== expectedType) {
                 alert(`現在スキャンすべきカードは「${getGuidanceTitle(currentContext)}」(${expectedType}タイプ)です。\n(スキャンしたタイプ: ${CARD_DATA[cardId].type})`);
                 lastScannedCardId = null;
                 showGuidanceModal(currentContext);
                 return;
            }
            showCardInfo(cardId);
        } else { console.warn(`Invalid card_id: ${cardId}`); alert('無効なカードIDです。'); }
    } catch (e) { console.error('Failed QR parse:', e.message, 'Data:', data); alert('無効なQRコードです。'); }
}

function stopScan() {
    scanning = false; if (animationFrameId) { cancelAnimationFrame(animationFrameId); animationFrameId = null; } if (cameraStream) { cameraStream.getTracks().forEach(track => track.stop()); cameraStream = null; } const modal = document.getElementById('cameraModal'); if (modal) modal.style.display = 'none';
}

// ==========================================================
// 6. 生活費計算
// ==========================================================
function calculateLivingCost() {
    const householdGrossIncome = (gameState.players.player1.grossIncome || 0) + (gameState.players.player2.grossIncome || 0);
    if (householdGrossIncome < 500) { gameState.livingCost = 206; } else if (householdGrossIncome < 600) { gameState.livingCost = 238; } else if (householdGrossIncome < 700) { gameState.livingCost = 249; } else if (householdGrossIncome < 800) { gameState.livingCost = 274; } else if (householdGrossIncome < 900) { gameState.livingCost = 328; } else if (householdGrossIncome < 1000) { gameState.livingCost = 340; } else if (householdGrossIncome < 1250) { gameState.livingCost = 365; } else if (householdGrossIncome < 1500) { gameState.livingCost = 447; } else { gameState.livingCost = 538; }
}

// ==========================================================
// 7. カード情報表示
// ==========================================================
function showCardInfo(cardId) {
    const card = CARD_DATA[cardId];
    const titleEl = document.getElementById('card-info-title');
    const idEl = document.getElementById('card-info-id');
    const effectEl = document.getElementById('card-info-effect');
    if (titleEl) titleEl.textContent = card.title;
    if (idEl) idEl.textContent = `ID: ${cardId}`;
    if (card.type === 'job' && card.salary) { let salaryText = `30代: ${card.salary[30]}万円 | 40代: ${card.salary[40]}万円 | 50代: ${card.salary[50]}万円 | 60代: ${card.salary[60]}万円`; if (effectEl) effectEl.textContent = salaryText; }
    else if (card.type === 'house' && card.costsByIncome) { let costText = `世帯年収 ～599万円: ${card.costsByIncome.low}万円/年\n600～999万円: ${card.costsByIncome.mid}万円/年\n1000万円～: ${card.costsByIncome.high}万円/年`; if (effectEl) effectEl.innerHTML = costText.replace(/\n/g, '<br>'); }
    else { if (effectEl) effectEl.textContent = card.effect || ''; }
    const modal = document.getElementById('cardInfoModal'); if (modal) modal.style.display = 'flex';
    addEvent(`カード ${cardId} をスキャンしました: ${card.title}`);
}

function closeCardInfoModal() {
    const modal = document.getElementById('cardInfoModal'); if (modal) modal.style.display = 'none'; lastScannedCardId = null;
}

function showExplanation() {
    const card = CARD_DATA[lastScannedCardId]; const el = document.getElementById('card-explanation'); if (el) el.textContent = card ? (card.explanation || '解説なし') : '解説なし'; const modal = document.getElementById('explanationModal'); if (modal) modal.style.display = 'flex';
}

function closeExplanationModal() {
    const modal = document.getElementById('explanationModal'); if (modal) modal.style.display = 'none';
}

// ==========================================================
// 9. カード効果の適用 (applyCardEffect)
// ==========================================================
function applyCardEffect() {
    if (!lastScannedCardId) return;
    const card = CARD_DATA[lastScannedCardId];
    if (!card) return;

    const applyGuidance = gameState.guidanceContextForApply || gameState.currentGuidance;
    const expectedType = getExpectedCardType(applyGuidance);

    if (applyGuidance === 'turnEvent') {
        const allowedEventTypes = ['life_event', 'life_event_asset_change', 'social_event', 'investment'];
        if (!allowedEventTypes.includes(card.type)) {
            alert(`ターンイベントでは「ライフイベント」「社会情勢」「投資」カードのみ適用できます。`); 
            closeCardInfoModal(); 
            showGuidanceModal(applyGuidance); 
            return;
        }
    } else if (expectedType && card.type !== expectedType) {
        alert(`現在適用できるカードは「${getGuidanceTitle(applyGuidance)}」(${expectedType}タイプ)です。`); 
        closeCardInfoModal(); 
        if (applyGuidance) { 
            showGuidanceModal(applyGuidance); 
        } 
        return;
    }

    const val = parseNumber(card.effect);
    let stateUpdated = false;
    let incomeOrHouseUpdated = false;

    switch (card.type) {
        case 'job':
            const p1Name=gameState.players.player1.name; const p2Name=gameState.players.player2.name; let targetPlayerKey='player1'; let targetName=p1Name;
            if (applyGuidance === 'job2') { targetPlayerKey = 'player2'; targetName = p2Name; }
            else if (applyGuidance === 'newJob') { 
                if (gameState.players.player1.needsNewJob) { 
                    targetPlayerKey = 'player1'; targetName = p1Name; 
                } else if (gameState.players.player2.needsNewJob) { 
                    targetPlayerKey = 'player2'; targetName = p2Name; 
                } else { 
                    let choice = prompt(`どちらのプレイヤーに適用しますか？\n1: ${p1Name}\n2: ${p2Name}`,"1");
                    if(choice==='2'){
                        targetPlayerKey='player2';
                        targetName=p2Name;
                    }
                }
            }
            
            const targetPlayer = gameState.players[targetPlayerKey];
            const grossIncome = card.salary[gameState.currentAge];
            const netIncomeDetails = getNetIncomeDetails(grossIncome);
            
            targetPlayer.jobId = lastScannedCardId;
            targetPlayer.job = card.title;
            targetPlayer.grossIncome = grossIncome;
            targetPlayer.income = netIncomeDetails.net;
            targetPlayer.needsNewJob = false;
            targetPlayer.promotionSuccess = false;
            
            stateUpdated = true;
            incomeOrHouseUpdated = true;
            addEvent(`${targetName} が ${card.title} を適用。 (手取り ${netIncomeDetails.net}万円)`);
            
            closeCardInfoModal();
            showNetIncomeModal(targetPlayer, grossIncome, netIncomeDetails);
            return; 

        case 'marriage': 
            if (gameState.currentAge !== 30) { alert("結婚カードは30代のターンでのみ選択できます。"); closeCardInfoModal(); return; }
            gameState.marriage.type = card.title; gameState.marriage.cost = val; gameState.totalAssets -= val; gameState.marriage.cardScanned = true; 
            gameState.turnExpenses.marriage += val; // ★ 支出記録
            stateUpdated = true; addEvent(`${card.title} を適用。 費用 ${val}万円`); break;
        case 'children': 
            if (gameState.currentAge !== 30) { alert("子どもカードは30代のターンでのみ選択できます。"); closeCardInfoModal(); return; }
            let count = 0; if (lastScannedCardId === 'C001') count = 1; else if (lastScannedCardId === 'C002') count = 2; else if (lastScannedCardId === 'C003') count = 3; gameState.children.count = count; gameState.children.annualCost = val; gameState.children.cardScanned = true; stateUpdated = true; addEvent(`${card.title} を適用。 年間費用 ${val}万円`); break;
        case 'house': 
            if (gameState.currentAge !== 30) { alert("住宅カードは30代のターンでのみ選択できます。"); closeCardInfoModal(); return; }
            gameState.house.type = card.title; gameState.house.cardId = lastScannedCardId; gameState.house.cardScanned = true; stateUpdated = true; incomeOrHouseUpdated = true; addEvent(`${card.title} を選択。`); break;
        case 'car': 
            gameState.car.type = card.title; gameState.car.count += 1; gameState.car.cost = val; gameState.car.totalPurchaseCost += val; gameState.totalAssets -= val; 
            gameState.turnExpenses.car += val; // ★ 支出記録
            stateUpdated = true; addEvent(`${card.title} 購入。 費用 ${val}万円`); break;
        
        case 'insurance': 
            let insuranceApplied = false; 
            if (lastScannedCardId === 'I001' && !gameState.insurance.life) { 
                gameState.insurance.life = true; 
                gameState.insurance.annualCost += val; 
                insuranceApplied = true; 
            } 
            else if (lastScannedCardId === 'I002' && !gameState.insurance.fire) { 
                gameState.insurance.fire = true; 
                gameState.insurance.annualCost += val; 
                insuranceApplied = true; 
            } 
            else if (lastScannedCardId === 'I003' && !gameState.insurance.auto) { 
                gameState.insurance.auto = true; 
                gameState.insurance.annualCost += val; 
                insuranceApplied = true; 
            } 
            
            if (insuranceApplied) { 
                addEvent(`${card.title} 加入。 年間保険料 ${val}万円`); 
                stateUpdated = true; 
            } 
            else { 
                alert("既に加入済みか、無効な保険カードです。"); 
            } 
            break;
            
        case 'life_event': 
            let cost = val; 
            if (lastScannedCardId === 'L004' && gameState.insurance.auto) cost = 0; 
            else if ((lastScannedCardId === 'L005' || lastScannedCardId === 'L006') && gameState.insurance.life) cost = 0; 
            else if (lastScannedCardId === 'L007' && gameState.insurance.fire) cost = 0; 
            
            if (lastScannedCardId === 'L011' && gameState.currentAge < 50) {
                 alert("「子どもの結婚」イベントは50代または60代で発生します。");
                 closeCardInfoModal();
                 return;
            }

            if (cost > 0) { 
                gameState.totalAssets -= cost; 
                gameState.turnExpenses.life_event += cost; // ★ 支出記録
                stateUpdated = true; 
            } 
            if (cost === 0) { addEvent(`${card.title} 発生！保険適用で出費 0円`); } 
            else { addEvent(`${card.title} 発生！ 出費 ${cost}万円`); } break;
        case 'life_event_asset_change': 
            if (val > 0) { 
                gameState.totalAssets -= val; 
                gameState.turnExpenses.life_event += val; // ★ 支出記録 (life_eventとして集計)
                stateUpdated = true; 
            } 
            addEvent(`${card.title} 発生！ 資産変動 -${val}万円`); break;
        case 'social_event': 
            let incomeChanged = false; let expenseChanged = false; 
            if (lastScannedCardId === 'S001') { ['player1', 'player2'].forEach(pKey => { const player = gameState.players[pKey]; if (player.jobId) { const newGross = Math.round(player.grossIncome * 1.2); const newNetDetails = getNetIncomeDetails(newGross); player.grossIncome = newGross; player.income = newNetDetails.net; } }); incomeChanged = true; addEvent(`${card.title} 発生！ 世帯年収2割増`); } 
            else if (lastScannedCardId === 'S002') { ['player1', 'player2'].forEach(pKey => { const player = gameState.players[pKey]; if (player.jobId) { const newGross = Math.round(player.grossIncome * 0.8); const newNetDetails = getNetIncomeDetails(newGross); player.grossIncome = newGross; player.income = newNetDetails.net; } }); incomeChanged = true; addEvent(`${card.title} 発生！ 世帯年収2割減`); } 
            else if (lastScannedCardId === 'S003') { expenseChanged = true; addEvent(`${card.title} 発生！ 年間支出1割増 (次ターンから反映)`); } 
            else if (lastScannedCardId === 'S004') { 
                const amount = 50; 
                gameState.totalAssets -= amount; 
                gameState.turnExpenses.social_event += amount; // ★ 支出記録
                stateUpdated = true; 
                addEvent(`${card.title} 発生！ 臨時支出 ${amount}万円`); 
            } 
            else if (lastScannedCardId === 'S005') { expenseChanged = true; addEvent(`${card.title} 発生！ 年間支出5%増 (次ターンから反映)`); } 
            else if (lastScannedCardId === 'L012') { 
                if (gameState.currentAge >= 50) {
                    addEvent(`${card.title} 発生！ (子ども独立のため対象外)`);
                } else {
                    const grant = (gameState.children.count || 0) * 10; 
                    if (grant > 0) { 
                        gameState.totalAssets += grant; 
                        gameState.turnExpenses.social_event -= grant; // ★ 収入として記録 (マイナス支出)
                        stateUpdated = true; 
                        addEvent(`${card.title} 発生！ 給付金 ${grant}万円`); 
                    } 
                    else { addEvent(`${card.title} 発生！ (対象外)`); } 
                }
            }
            else { addEvent(`${card.title} を適用`); } 
            if (incomeChanged || expenseChanged) { stateUpdated = true; if(incomeChanged) { incomeOrHouseUpdated = true; } } break;
        
        case 'investment': 
            if (card.effect.includes('積立')) {
                gameState.investment.tsumitateTotal += val;
                stateUpdated = true; 
                addEvent(`${card.title} を適用。 年間積立 +${val}万円 (このターン中)`);
            } else {
                gameState.investment.ikkatsuTotal += val;
                gameState.investment.ikkatsuLog.push({ amount: val, startAge: gameState.currentAge });
                gameState.totalAssets -= val; // 元本はすぐに支払う
                gameState.turnExpenses.investment_ikkatsu += val; // ★ 支出記録
                stateUpdated = true; 
                addEvent(`${card.title} を適用。 一括投資 ${val}万円 (65歳まで運用)`);
            } 
            break;
            
        default: 
            addEvent(`${card.title} を適用（既定処理）`);
    }

    closeCardInfoModal();

    if (incomeOrHouseUpdated) {
        updateHouseCost(); 
        stateUpdated = true;
    }

    if (stateUpdated) {
        recalculateAnnualExpense(); // 年間支出を再計算
        updateDisplay();
    }

    const contextUsed = gameState.guidanceContextForApply || gameState.currentGuidance;
    gameState.guidanceContextForApply = null; 

    saveGameState();

    if (card.type === 'car' || card.type === 'insurance' || contextUsed === 'turnEvent') {
        showGuidanceModal(contextUsed);
    } else {
        determineNextGuidance();
    }
}

// ==========================================================
// 10. ターン処理
// ==========================================================
function nextTurn() {
    if (gameState.isCareerChallengeActive) { alert("キャリアチャレンジを完了してください。"); return; }
    if (gameState.currentGuidance) { alert("指示に従って、カードスキャンまたは「完了」「スキップ」を押してください。"); return; }

    // --- ターン終了時のリセット処理 ---
    gameState.turnEventCompleted = false;
    gameState.car.cardScanned = false; 

    // --- 収支計算 (このターン (例: 30代) の支出を計算) ---
    recalculateAnnualExpense(); 
    
    const annualIncome = (gameState.players.player1.income || 0) + (gameState.players.player2.income || 0);
    const annualExpense = gameState.annualExpense || 0;
    const annualDiff = annualIncome - annualExpense;

    const yearsInTurn = (gameState.currentAge === 60) ? 5 : 10;
    const turnDiff = annualDiff * yearsInTurn;
    
    // ★ ターン中の一時支出を計算
    const oneTimeExpenses = Object.values(gameState.turnExpenses).reduce((a, b) => a + b, 0);
    const finalTurnDiff = turnDiff - oneTimeExpenses;

    gameState.totalAssets += finalTurnDiff; // (turnDiff - oneTimeExpenses)
    
    // ★ 詳細な収支履歴を保存
    const childCost = (gameState.currentAge < 50) ? (gameState.children.annualCost || 0) : 0;
    const houseCost = (gameState.currentAge < 60) ? (gameState.house.annualCost || 0) : 0;
    const insuranceCost = gameState.insurance.annualCost || 0;
    const livingCost = gameState.livingCost || 0;
    const tsumitateCost = gameState.investment.tsumitateTotal || 0;

    gameState.balanceHistory.push({ 
        age: gameState.currentAge, 
        income: annualIncome, 
        expense: annualExpense, // 年間定期支出 (積立含む)
        diff: annualDiff,       // 年間定期収支
        oneTimeExpenses: oneTimeExpenses, // 期間中の一時支出 (結婚、車、イベント等)
        finalDiff: finalTurnDiff,     // 期間中の最終収支 ( (diff * 年数) - oneTimeExpenses )
        details: {
            childCost: childCost,
            houseCost: houseCost,
            insuranceCost: insuranceCost,
            livingCost: livingCost,
            tsumitate: tsumitateCost,
            // --- 一時支出の内訳 ---
            marriage: gameState.turnExpenses.marriage,
            car: gameState.turnExpenses.car,
            life_event: gameState.turnExpenses.life_event,
            social_event: gameState.turnExpenses.social_event,
            investment_ikkatsu: gameState.turnExpenses.investment_ikkatsu
        }
    });

    // --- 積立投資のログ化とリセット (次のターン準備) ---
    const currentTsumitate = gameState.investment.tsumitateTotal || 0;
    if (currentTsumitate > 0) {
        const endAge = (gameState.currentAge === 60) ? 65 : gameState.currentAge + 10;
        gameState.investment.tsumitateLog.push({ 
            amount: currentTsumitate, 
            startAge: gameState.currentAge, 
            endAge: endAge 
        });
        addEvent(`📈 積立投資 (年${currentTsumitate}万円) を ${gameState.currentAge}代の ${yearsInTurn}年間 実行しました。`);
    }
    
    // --- 次のターンの準備 (リセット) ---
    gameState.investment.tsumitateTotal = 0;
    gameState.insurance.cardScanned = false;
    gameState.insurance.life = false;
    gameState.insurance.fire = false;
    gameState.insurance.auto = false;
    gameState.insurance.annualCost = 0;
    resetTurnExpenses(); // ★ 一時支出をリセット
    if (gameState.currentAge < 60) {
        addEvent("📝 年代が変わり、保険と積立投資の年間設定がリセットされました。");
    }


    // --- ログ表示 & 年齢更新 ---
    if (gameState.currentAge === 60) {
        addEvent(`60代の収支 (${yearsInTurn}年間) を計算... ${finalTurnDiff >= 0 ? '+' : ''}${finalTurnDiff}万円`);
    } else {
        addEvent(`${gameState.currentAge}代の収支 (${yearsInTurn}年間) を計算... ${finalTurnDiff >= 0 ? '+' : ''}${finalTurnDiff}万円`);
    }
    
    gameState.currentAge += 10; // 60 -> 70
    
    saveGameState(); 

    // --- 次のアクション分岐 ---
    if (gameState.currentAge >= 70) {
        updateDisplay(); 
        showTurnStartModal(60, true); // (age 60, isFinalTurn=true)
        return;
    }

    if (gameState.currentAge === 40 || gameState.currentAge === 50) {
        gameState.isCareerChallengeActive = true;
        showCareerChallenge('player1');
    } 
    else if (gameState.currentAge === 60) {
        updateStateForNewTurn(); 
        updateDisplay(); 
        saveGameState();
        showTurnStartModal(60, false); // (age 60, isFinalTurn=false)
    }
}

function showTurnStartModal(age, isFinalTurn = false) {
    const modal = document.getElementById('turnStartModal');
    const titleEl = document.getElementById('turn-start-title');
    const textEl = document.getElementById('turn-start-text'); 
    const buttonEl = document.getElementById('turn-start-button'); 

    if (modal && titleEl && textEl && buttonEl) {
        if (isFinalTurn) {
            titleEl.textContent = "🎉 60代のターン終了";
            textEl.textContent = "お疲れ様でした！セカンドライフに到達です。";
            buttonEl.innerHTML = '<i class="fas fa-trophy"></i> 最終結果へ進む';
        } else {
            titleEl.textContent = `${age}代のターン`;
            textEl.textContent = "新しいターンを開始します。";
            buttonEl.innerHTML = '<i class="fas fa-play"></i> ターン開始';
        }
        modal.style.display = 'flex';
    } else {
        console.error("TurnStartModal or its elements not found!");
        proceedToTurnActions();
    }
}


function proceedToTurnActions() {
    const modal = document.getElementById('turnStartModal');
    if (modal) modal.style.display = 'none';

    // 70以上 (60代終了) なら「60代到達モーダル」を表示
    if (gameState.currentAge >= 70) {
        showFinalResult(); // 「60代到達！」モーダルを表示
    } 
    else if (gameState.currentAge === 40 || gameState.currentAge === 50 || gameState.currentAge === 60) {
        showAgeGuidanceModal(gameState.currentAge);
    }
    else {
        determineNextGuidance();
    }
}

// 60代到達モーダル (投資結果ボタンを表示)
function showFinalResult() {
    const modal = document.getElementById('finalResultModal');
    if (modal) modal.style.display = 'flex';
}

function showCareerChallenge(playerKey) {
    gameState.currentPlayerChallenge = playerKey;
    const playerName = gameState.players[playerKey].name;
    document.getElementById('career-challenge-player-name').textContent = playerName;
    document.getElementById('careerChallengeModal').style.display = 'flex';
}

function handleCareerChoice(choice) {
    const playerKey = gameState.currentPlayerChallenge; if (!playerKey) return; const player = gameState.players[playerKey];
    if (player.needsNewJob) { alert("転職活動中のため、このチャレンジはスキップされます。"); player.promotionSuccess = false; }
    else if (!player.jobId) { alert("職業についていないため、このチャレンジはスキップされます。"); player.needsNewJob = true; player.promotionSuccess = false; }
    else if (choice === 'jobChange') { const roll = prompt('1〜6のサイコロを振ってください:', '1'); const rollNum = parseInt(roll); if (rollNum === 1 || rollNum === 6) { alert(`成功！ 新しい職業カードを選んでください。`); player.needsNewJob = true; } else { alert(`失敗... (出目: ${rollNum}) 現状維持です。`); player.needsNewJob = false; } player.promotionSuccess = false; }
    else if (choice === 'promotion') { const roll = prompt('1〜6のサイコロを振ってください:', '3'); const rollNum = parseInt(roll); if (rollNum === 3 || rollNum === 5) { alert(`成功！ (出目: ${rollNum}) 年収が10%アップします。`); player.promotionSuccess = true; } else { alert(`失敗... (出目: ${rollNum}) 現状維持です。`); player.promotionSuccess = false; } player.needsNewJob = false; }
    else if (choice === 'skip') { alert(`【${player.name}】現状維持を選択しました。 (自動昇給のみ)`); player.needsNewJob = false; player.promotionSuccess = false; }
    
    if (playerKey === 'player1') {
        showCareerChallenge('player2');
    } else {
        document.getElementById('careerChallengeModal').style.display = 'none';
        gameState.isCareerChallengeActive = false;
        gameState.currentPlayerChallenge = null;
        
        updateStateForNewTurn();
        updateDisplay();
        saveGameState();
        
        showTurnStartModal(gameState.currentAge, false);
    }
}

function updateStateForNewTurn() {
    let incomeUpdated = false;
    ['player1', 'player2'].forEach(playerKey => {
        const player = gameState.players[playerKey];
        const oldIncome = player.income;
        
        if (player.needsNewJob) { 
            player.job = "転職活動中"; 
            player.jobId = null; 
            player.income = 0; 
            player.grossIncome = 0; 
        }
        else if (player.jobId) {
            const jobCard = CARD_DATA[player.jobId];
            let newGrossSalary = jobCard.salary[gameState.currentAge];
            if (newGrossSalary === undefined) { 
                console.warn(`Salary for age ${gameState.currentAge} not found for ${player.jobId}. Using previous gross income.`);
                newGrossSalary = player.grossIncome; 
            }

            if (player.promotionSuccess) {
                newGrossSalary = Math.round(newGrossSalary * 1.1);
                addEvent(`🎉 ${player.name} が昇格成功！ 年収 ${newGrossSalary}万円に`);
                player.promotionSuccess = false;
            } else {
                 addEvent(`💼 ${player.name} が自動昇給。 年収 ${newGrossSalary}万円に`);
            }
            
            const newNetDetails = getNetIncomeDetails(newGrossSalary);
            player.grossIncome = newGrossSalary;
            player.income = newNetDetails.net;
        }
        if (player.income !== oldIncome) { incomeUpdated = true; }
    });

    if (incomeUpdated) {
        updateHouseCost(); 
    }
    
    recalculateAnnualExpense(); 
}

function showBalance() {
    const modal = document.getElementById('balanceModal');
    if (!modal) { console.error("Balance modal not found!"); return; }

    const history = gameState.balanceHistory;
    const lastEntry = history.length > 0 ? history[history.length - 1] : null;

    const tbody = document.getElementById('turnBreakdownTbody');
    const titleEl = document.getElementById('balance-modal-title');

    if (tbody) {
        tbody.innerHTML = ''; 

        if (lastEntry) {
            const yearsInTurn = (lastEntry.age === 60) ? 5 : 10;
            const ageText = (lastEntry.age === 60) ? "60-64歳" : `${lastEntry.age}代`;
            
            titleEl.textContent = `収支詳細 (${ageText} - ${yearsInTurn}年間)`;
            
            // ★ 詳細な収支内訳を表示
            const turnIncome = lastEntry.income * yearsInTurn;
            const turnRegularExpense = lastEntry.expense * yearsInTurn;
            const turnOneTimeExpense = lastEntry.oneTimeExpenses;
            const turnFinalDiff = lastEntry.finalDiff; // (turnIncome - turnRegularExpense - turnOneTimeExpense)

            tbody.innerHTML += `<tr><td><i class="fas fa-briefcase income-icon"></i> 手取り収入 (合計)</td><td>+${turnIncome}</td></tr>`;
            tbody.innerHTML += `<tr><td><i class="fas fa-shopping-cart expense-icon"></i> 年間支出 (合計)</td><td>-${turnRegularExpense}</td></tr>`;
            tbody.innerHTML += `<tr><td><i class="fas fa-calendar-times expense-icon"></i> 一時支出 (合計)</td><td>-${turnOneTimeExpense}</td></tr>`;
            tbody.innerHTML += `<tr style="font-weight: bold; border-top: 2px solid #ccc;"><td><i class="fas fa-calculator"></i> ${yearsInTurn}年間の最終収支</td><td>${turnFinalDiff >= 0 ? '+' : ''}${turnFinalDiff}</td></tr>`;

        } else {
            titleEl.textContent = "収支詳細 (30代)";
            tbody.innerHTML = '<tr><td colspan="2">まだ最初のターンが完了していません。</td></tr>';
        }
    } else { console.error("Turn breakdown table body not found!"); }

    modal.style.display = 'flex';
}
function closeBalanceModal() { const modal = document.getElementById('balanceModal'); if (modal) modal.style.display = 'none'; }

// ★★★ 修正: resetGame はアクティブデータのみ削除 ★★★
function resetGame() {
    if (confirm("本当にゲームをリセットしますか？ (現在の進行状況は失われます)")) {
        localStorage.removeItem('gameStarted');
        localStorage.removeItem(BALANCE_HISTORY_KEY);
        localStorage.removeItem(GAME_STATE_KEY);
        location.reload();
    }
}

// ==========================================================
// 11. 進行指示関連
// ==========================================================
function showGuidanceModal(guidanceKey) {
    gameState.currentGuidance = guidanceKey;
    const modal = document.getElementById('guidanceModal');
    if (!modal) return;
    const titleEl = document.getElementById('guidance-title');
    const textEl = document.getElementById('guidance-text');
    const okButton = document.getElementById('guidance-ok-button');
    const doneButton = document.getElementById('guidance-done-button');
    const skipButton = document.getElementById('guidance-skip-button');

    if (!guidanceKey) {
        closeGuidanceModal();
        return;
    }
    titleEl.textContent = getGuidanceTitle(guidanceKey);
    textEl.textContent = getGuidanceText(guidanceKey);

    const isMultiScanType = (guidanceKey === 'car' || guidanceKey === 'insurance' || guidanceKey === 'turnEvent');
    doneButton.style.display = isMultiScanType ? 'block' : 'none';
    okButton.textContent = isMultiScanType ? '続けてスキャンする' : 'スキャンする';
    skipButton.style.display = canSkipGuidance(guidanceKey) ? 'block' : 'none';

    okButton.onclick = () => {
        gameState.guidanceContextForApply = guidanceKey;
        closeGuidanceModal();
        openCamera('カード');
    };

    doneButton.onclick = () => {
        gameState.guidanceContextForApply = null;
        if (guidanceKey === 'car') gameState.car.cardScanned = true;
        else if (guidanceKey === 'insurance') gameState.insurance.cardScanned = true;
        else if (guidanceKey === 'turnEvent') gameState.turnEventCompleted = true;
        addEvent(`${getGuidanceTitle(guidanceKey)} のスキャン/選択を完了しました。`);
        closeGuidanceModal();
        determineNextGuidance();
    };

    skipButton.onclick = () => {
        gameState.guidanceContextForApply = null;
        if (guidanceKey === 'marriage') gameState.marriage.cardScanned = true;
        else if (guidanceKey === 'children') gameState.children.cardScanned = true;
        else if (guidanceKey === 'house') gameState.house.cardScanned = true;
        else if (guidanceKey === 'car') gameState.car.cardScanned = true;
        else if (guidanceKey === 'insurance') gameState.insurance.cardScanned = true;
        else if (guidanceKey === 'turnEvent') gameState.turnEventCompleted = true;
        closeGuidanceModal();
        addEvent(`${getGuidanceTitle(guidanceKey)} をスキップしました。`);
        determineNextGuidance();
    };

    modal.style.display = 'flex';
}

function closeGuidanceModal() {
    gameState.currentGuidance = null;
    const modal = document.getElementById('guidanceModal');
    if (modal) modal.style.display = 'none';
}

function getGuidanceTitle(key) {
    switch(key) {
        case 'job1': return `💼 ${gameState.players.player1.name}さんの職業選択`;
        case 'job2': return `💼 ${gameState.players.player2.name}さんの職業選択`;
        case 'marriage': return '💍 結婚カード';
        case 'children': return '👶 子どもカード';
        case 'house': return '🏠 住宅カード';
        case 'car': return '🚗 自動車カード';
        case 'insurance': return '🛡️ 保険カード (更新)'; 
        case 'turnEvent': return '🎲 ターンイベントカード';
        case 'newJob': return '💼 新しい職業カード';
        default: return '❓ カードスキャン';
    }
}

function getGuidanceText(key) {
    let playerNeedsJob = '';
    if (key === 'newJob') {
        if (gameState.players.player1.needsNewJob && gameState.players.player2.needsNewJob) {
            playerNeedsJob = `(${gameState.players.player1.name}さん または ${gameState.players.player2.name}さん用)`;
        } else if (gameState.players.player1.needsNewJob) {
            playerNeedsJob = `(${gameState.players.player1.name}さん用)`;
        } else if (gameState.players.player2.needsNewJob) {
            playerNeedsJob = `(${gameState.players.player2.name}さん用)`;
        }
    }

    switch(key) {
        case 'job1': return `${gameState.players.player1.name}さんの職業カードをスキャンしてください。`;
        case 'job2': return `${gameState.players.player2.name}さんの職業カードをスキャンしてください。`;
        case 'marriage': return '【30代のみ】結婚カードをスキャンしてください。（スキップ可）';
        case 'children': return '【30代のみ】子どもカードをスキャンしてください。（スキップ可）';
        case 'house': return '【30代のみ】住宅カードをスキャンしてください。（スキップ可）';
        case 'car': return '自動車カードをスキャンしてください。（複数可、終わったら「完了」/スキップ可）';
        case 'insurance': return '保険カード（生命・火災・自動車）をスキャンしてください。\n※10年ごとの更新です。このターンでスキャンしない保険は失効します。（複数可、終わったら「完了」/スキップ可）';
        case 'turnEvent': return `${gameState.currentAge === 60 ? "60-64歳" : `${gameState.currentAge}代`}のターンイベントカード（ライフイベント、社会情勢、投資など）をスキャンしてください。（複数可、終わったら「完了」/スキップ可）`;
        case 'newJob': return `転職/再就職が必要です。新しい職業カードをスキャンしてください。\n${playerNeedsJob}`;
        default: return '指示されたカードをスキャンしてください。';
    }
}

function getExpectedCardType(key) {
     switch(key) {
        case 'job1': case 'job2': case 'newJob': return 'job';
        case 'marriage': return 'marriage';
        case 'children': return 'children';
        case 'house': return 'house';
        case 'car': return 'car';
        case 'insurance': return 'insurance';
        case 'turnEvent': return null;
        default: return null;
    }
}

function canSkipGuidance(key) {
    if (key === 'job1' || key === 'job2') {
        return false;
    }
    return true;
}

function determineNextGuidance() {
    let nextGuidance = null;
    
    if (gameState.players.player1.needsNewJob || gameState.players.player2.needsNewJob) {
        nextGuidance = 'newJob';
    } 
    else if (gameState.currentAge === 30) {
        if (!gameState.players.player1.jobId) { nextGuidance = 'job1'; }
        else if (!gameState.players.player2.jobId) { nextGuidance = 'job2'; }
        else if (!gameState.marriage.cardScanned) { nextGuidance = 'marriage'; }
        else if (!gameState.children.cardScanned) { nextGuidance = 'children'; }
        else if (!gameState.house.cardScanned) { nextGuidance = 'house'; }
        else if (!gameState.car.cardScanned) { nextGuidance = 'car'; }
        else if (!gameState.insurance.cardScanned) { nextGuidance = 'insurance'; }
        else if (!gameState.turnEventCompleted) { nextGuidance = 'turnEvent'; }
        else { nextGuidance = null; }
    } 
    else {
        if (!gameState.car.cardScanned) { nextGuidance = 'car'; }
        else if (!gameState.insurance.cardScanned) { nextGuidance = 'insurance'; } 
        else if (!gameState.turnEventCompleted) { nextGuidance = 'turnEvent'; }
        else { nextGuidance = null; } 
    }

    showGuidanceModal(nextGuidance);
}


// ==========================================================
// 11-B. 年代別解説モーダル
// ==========================================================

function showAgeGuidanceModal(age) {
    const modal = document.getElementById('ageGuidanceModal');
    if (!modal) {
        console.error("ageGuidanceModal not found!");
        determineNextGuidance(); 
        return;
    }

    const titleEl = document.getElementById('age-guidance-title');
    const textEl = document.getElementById('age-guidance-text');
    let contentHtml = '';

    const ulStyle = `style="list-style-type: none; padding-left: 0;"`;
    const liStyle = `style="position: relative; padding-left: 28px; margin-bottom: 10px;"`;
    const iconStyle = `style="position: absolute; left: 0; top: 4px; width: 20px; text-align: center; color: #FF7F50;"`; 

    if (age === 40) {
        titleEl.textContent = "📊 40代のプランニング";
        contentHtml = `
            <p style="margin-bottom: 15px; font-weight: bold;">40代は<strong>「教育費のピーク」</strong>と<strong>「キャリア」</strong>がテーマです。</p>
            <ul ${ulStyle}>
                <li ${liStyle}><i class="fas fa-university" ${iconStyle}></i><strong>教育費ピーク:</strong> 子どもが中学・高校・大学へと進学し、教育費が最大になります。</li>
                ${gameState.children.annualCost > 0 ? `<li ${liStyle}><i class="fas fa-wallet" ${iconStyle}></i><span style="color: #E53E3E;">現在の年間教育費: <strong>${gameState.children.annualCost}万円</strong></span></li>` : ''}
                <li ${liStyle}><i class="fas fa-file-invoice-dollar" ${iconStyle}></i><strong>継続支出:</strong> 住宅ローンや生活費も引き続き発生します。</li>
                ${gameState.house.annualCost > 0 ? `<li ${liStyle}><i class="fas fa-home" ${iconStyle}></i>現在の年間住居費: <strong>${gameState.house.annualCost}万円</strong></li>` : ''}
                <li ${liStyle}><i class="fas fa-briefcase" ${iconStyle}></i><strong>キャリア:</strong> 先ほどのチャレンジ結果が、この10年間の収入に反映されます。</li>
            </ul>
        `;
    } 
    else if (age === 50) {
        titleEl.textContent = "📈 50代のプランニング";
        contentHtml = `
            <p style="margin-bottom: 15px; font-weight: bold;">50代は<strong>「資産形成の山場」</strong>と<strong>「老後の準備」</strong>がテーマです。</p>
            <ul ${ulStyle}>
                <li ${liStyle}><i class="fas fa-graduation-cap" ${iconStyle}></i><strong>教育費終了:</strong> 40代で教育費の支払いが完了しました。</li>
                <li ${liStyle}><i class="fas fa-piggy-bank" ${iconStyle}></i><strong>資産形成の山場:</strong> 大きな支出が減り、資産を増やす最後のチャンスです。</li>
                <li ${liStyle}><i class="fas fa-heartbeat" ${iconStyle}></i><strong>健康リスク:</strong> 健康への関心が高まり、医療費の支出（「病気で入院」イベントなど）が増え始める時期です。</li>
                <li ${liStyle}><i class="fas fa-home" ${iconStyle}></i><strong>住宅ローンの終盤:</strong> 住宅ローンの完済も目前です。</li>
                ${gameState.house.annualCost > 0 ? `<li ${liStyle}><i class="fas fa-file-invoice" ${iconStyle}></i>現在の年間住居費: <strong>${gameState.house.annualCost}万円</strong></li>` : ''}
                <li ${liStyle}><i class="fas fa-gift" ${iconStyle}></i><strong>突発イベント:</strong> 「子どもの結婚援助」など、高額なイベントが発生する可能性もあります。</li>
            </ul>
        `;
    } 
    else if (age === 60) {
        titleEl.textContent = "🏁 60代のプランニング (最終ターン)";
        contentHtml = `
            <p style="margin-bottom: 15px; font-weight: bold;">60代は<strong>「セカンドライフへの準備」</strong>がテーマの<strong>最終ターン（5年間）</strong>です。</p>
            <ul ${ulStyle}>
                <li ${liStyle}><i class="fas fa-child" ${iconStyle}></i><strong>子ども独立:</strong> 子どもは独立し、教育費は発生しません。</li>
                <li ${liStyle}><i class="fas fa-home" ${iconStyle}></i><strong>住宅ローンの完済:</strong> ６５歳までで住宅ローンが完済となります。</li>
                <li ${liStyle}><i class="fas fa-heartbeat" ${iconStyle}></i><strong>健康リスク:</strong> 「病気で入院」など、健康に関するイベントのリスクが高まる年代です。</li>
                <li ${liStyle}><i class="fas fa-check-double" ${iconStyle}></i><strong>最終準備:</strong> 65歳でセカンドライフ（ゲーム終了）を迎えます。最後の5年間で備えを万全にしましょう。</li>
            </ul>
        `;
    }

    textEl.innerHTML = contentHtml;
    modal.style.display = 'flex';
}

function closeAgeGuidanceModal() {
    const modal = document.getElementById('ageGuidanceModal');
    if (modal) modal.style.display = 'none';
    determineNextGuidance();
}


// ==========================================================
// 10-B. 投資計算 & 最終結果表示 (★★★ 修正: グラフ・詳細表示追加 ★★★)
// ==========================================================

/**
 * 利率決定モーダルを表示する
 */
function showInvestmentRateModal() {
    // 60代到達モーダルを閉じる
    const finalModal = document.getElementById('finalResultModal');
    if (finalModal) finalModal.style.display = 'none';

    // 利率決定モーダルを表示
    const modal = document.getElementById('investmentRateModal');
    if (modal) modal.style.display = 'flex';
}

/**
 * 投資結果を計算し、「投資運用結果」モーダルを表示する
 */
function calculateInvestmentResult() {
    const inputEl = document.getElementById('diceRollInput');
    const diceRoll = parseInt(inputEl.value);

    if (!diceRoll || diceRoll < 1 || diceRoll > 6) {
        alert("サイコロの出目 (1〜6) を正しく入力してください。");
        return;
    }

    const rate = diceRoll / 100.0; // 年利 (例: 0.06)
    
    let tsumitatePrincipal = 0;
    let tsumitateFV = 0; // Future Value (将来価値)
    let ikkatsuPrincipal = 0;
    let ikkatsuFV = 0;

    gameState.investment.tsumitateLog.forEach(log => {
        // (startAge: 30, endAge: 40) -> 10年間
        const tsumitateYears = log.endAge - log.startAge; 
        const principalThisBlock = log.amount * tsumitateYears;
        tsumitatePrincipal += principalThisBlock;
        
        // 65歳時点での価値を計算
        const fvThisBlock = calculateTsumitateBlock(log.amount, rate, log.startAge, log.endAge);
        tsumitateFV += fvThisBlock;
    });

    gameState.investment.ikkatsuLog.forEach(log => {
        const years = 65 - log.startAge; // (例: 65 - 30 = 35年)
        ikkatsuPrincipal += log.amount;
        const fvThisBlock = log.amount * Math.pow(1 + rate, years);
        ikkatsuFV += fvThisBlock;
    });

    const totalPrincipal = Math.round(tsumitatePrincipal + ikkatsuPrincipal);
    const totalFV = Math.round(tsumitateFV + ikkatsuFV);
    const totalGain = totalFV - totalPrincipal;
    const assetsBeforeInvestment = gameState.totalAssets;
    
    // ★ 最終結果をグローバル変数に一時保存
    gameState.finalInvestmentResult = {
        rate: rate,
        principal: totalPrincipal,
        fv: totalFV,
        gain: totalGain,
        assetsBefore: assetsBeforeInvestment,
        finalAssets: assetsBeforeInvestment + totalFV // ★ 投資受取額(FV)を加算
    };
    
    // ★ 資産を更新 (ここで gameState.totalAssets を変更)
    gameState.totalAssets = gameState.finalInvestmentResult.finalAssets; 
    // saveGameState(); // 最終資産はゲーム終了時に保存する

    // 利率決定モーダルを閉じる
    document.getElementById('investmentRateModal').style.display = 'none';

    // 「投資運用結果」モーダルを表示
    const modal = document.getElementById('investmentResultModal');
    const summaryEl = document.getElementById('investmentResultSummary');
    
    if (summaryEl) {
        summaryEl.innerHTML = `
            <div style="text-align: left; max-width: 600px; margin: 20px auto;">
                <p style="text-align: center; margin-bottom: 20px; font-weight: bold;">
                    決定した運用年利: ${rate * 100}%
                </p>
                <table class="balance-table" style="margin-bottom: 20px;">
                    <tbody>
                        <tr>
                            <td><i class="fas fa-piggy-bank expense-icon"></i> 投資元本 (合計)</td>
                            <td>${totalPrincipal} 万円</td>
                        </tr>
                        <tr>
                            <td><i class="fas fa-trophy income-icon"></i> 運用結果 (65歳受取額)</td>
                            <td>${totalFV} 万円</td>
                        </tr>
                        <tr style="font-weight: bold; font-size: 1.1em; background: #f0fff4;">
                            <td><i class="fas fa-plus-circle income-icon"></i> 運用利益</td>
                            <td style="color: #48bb78;">+${totalGain} 万円</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    }
    if (modal) modal.style.display = 'flex';
}

/**
 * 積立投資の1ブロック(例: 30代の10年間)の将来価値(65歳時点)を計算する
 * (年利、年1回積立、複利計算)
 */
function calculateTsumitateBlock(annualAmount, rate, startAge, endAge) {
    const tsumitateYears = endAge - startAge; // (例: 40 - 30 = 10年)
    const compoundYears = 65 - endAge;       // (例: 65 - 40 = 25年)

    if (rate === 0) {
        // 金利ゼロなら元本のみ
        return annualAmount * tsumitateYears;
    }
    
    // 1. 積立終了時点 (endAge) の価値を計算 (年金終価係数)
    const blockFV = annualAmount * ( (Math.pow(1 + rate, tsumitateYears) - 1) / rate );

    // 2. 終了時点の価値を、65歳まで複利運用 (複利終価係数)
    const finalValue = blockFV * Math.pow(1 + rate, compoundYears);

    return finalValue;
}


/**
 * 最終ライフプラン結果モーダルを表示する
 */
function showFinalAssets() {
    const results = gameState.finalInvestmentResult;
    if (!results) {
        alert("エラー: 最終結果データが見つかりません。");
        return;
    }

    // 投資結果モーダルを閉じる
    closeInvestmentResultModal();

    // 最終資産モーダルを表示
    const modal = document.getElementById('finalAssetsModal');
    const summaryEl = document.getElementById('finalAssetsSummary');

    if (summaryEl) {
        summaryEl.innerHTML = `
            <div style="text-align: left; max-width: 600px; margin: 20px auto;">
                
                <table class="balance-table">
                     <tbody>
                        <tr>
                            <td>65歳時点の資産 (投資受取前)</td>
                            <td>${results.assetsBefore} 万円</td>
                        </tr>
                         <tr>
                            <td>投資受取額 (利益 +${results.gain})</td>
                            <td style="color: #48bb78;">+${results.fv} 万円</td>
                        </tr>
                        <tr style="font-weight: bold; font-size: 1.3em; background: #FFFDF8;">
                            <td>最終総資産</td>
                            <td style="color: #FF7F50; font-size: 1.5em;">${results.finalAssets} 万円</td>
                        </tr>
                    </tbody>
                </table>

                <div style="font-size: 0.9em; color: #666; margin-top: 20px; text-align: center;">
                    <p><strong>プレイヤー:</strong> ${gameState.players.player1.name}, ${gameState.players.player2.name}</p>
                    <p><strong>結婚:</strong> ${gameState.marriage.type}</p>
                    <p><strong>子ども:</strong> ${gameState.children.count} 人</p>
                    <p><strong>住居:</strong> ${gameState.house.type}</p>
                </div>
            </div>
        `;
    }
    
    if (modal) modal.style.display = 'flex';
}

/**
 * 投資運用結果モーダルを閉じる
 */
function closeInvestmentResultModal() {
    const modal = document.getElementById('investmentResultModal');
    if (modal) modal.style.display = 'none';
}

/**
 * 最終資産モーダルを閉じる (★ 動作変更: ゲーム終了処理へ)
 */
function saveAndExitGame() {
    // 1. 最終結果を「殿堂入り」に保存
    saveToHallOfFame();
    
    // 2. 現在のゲームデータを削除
    localStorage.removeItem('gameStarted');
    localStorage.removeItem(BALANCE_HISTORY_KEY);
    localStorage.removeItem(GAME_STATE_KEY);
    
    // 3. ページをリロードしてタイトル画面に戻る
    alert("お疲れ様でした！\nゲーム結果を「セーブデータ」に保存しました。");
    location.reload();
}


// ★ 最終収支詳細モーダル (アコーディオン)
function showFinalBalanceDetails() {
    const container = document.getElementById('finalBalanceDetailsContainer');
    if (!container) return;

    container.innerHTML = ''; // クリア
    const accordionDiv = document.createElement('div');
    accordionDiv.className = 'balance-accordion';

    gameState.balanceHistory.forEach((entry, index) => {
        const details = entry.details;
        const years = (entry.age === 60) ? 5 : 10;
        const ageText = (entry.age === 60) ? "60-64歳" : `${entry.age}代`;
        
        const turnIncome = entry.income * years;
        const turnRegularExpense = entry.expense * years;
        const turnOneTimeExpense = entry.oneTimeExpenses;
        const turnFinalDiff = entry.finalDiff;

        let detailsHtml = `
            <details ${index === gameState.balanceHistory.length - 1 ? 'open' : ''}>
                <summary>${ageText} (${years}年間) の収支 (差額: ${turnFinalDiff >= 0 ? '+' : ''}${turnFinalDiff}万円)</summary>
                <div class="details-content">
                    <h4 style="margin-top: 5px;">年間収支 (×${years}年)</h4>
                    <table>
                        <tr>
                            <th><i class="fas fa-briefcase income-icon"></i> 世帯手取り年収</th>
                            <td class="income-val">+${entry.income} 万円</td>
                        </tr>
                        <tr>
                            <th><i class="fas fa-shopping-cart expense-icon"></i> 年間支出 合計</th>
                            <td class="expense-val">-${entry.expense} 万円</td>
                        </tr>
                        <tr>
                            <th style="padding-left: 25px;"><i class="fas fa-child"></i> 教育費</th>
                            <td class="expense-val">-${details.childCost} 万円</td>
                        </tr>
                         <tr>
                            <th style="padding-left: 25px;"><i class="fas fa-home"></i> 住居費</th>
                            <td class="expense-val">-${details.houseCost} 万円</td>
                        </tr>
                         <tr>
                            <th style="padding-left: 25px;"><i class="fas fa-shield-alt"></i> 保険料</th>
                            <td class="expense-val">-${details.insuranceCost} 万円</td>
                        </tr>
                         <tr>
                            <th style="padding-left: 25px;"><i class="fas fa-shopping-cart"></i> 生活費</th>
                            <td class="expense-val">-${details.livingCost} 万円</td>
                        </tr>
                         <tr>
                            <th style="padding-left: 25px;"><i class="fas fa-chart-line"></i> 積立投資</th>
                            <td class="expense-val">-${details.tsumitate} 万円</td>
                        </tr>
                        <tr style="font-weight: bold; background: #f9f9f9;">
                            <th><i class="fas fa-calculator"></i> 年間収支差額</th>
                            <td>${entry.diff >= 0 ? '+' : ''}${entry.diff} 万円</td>
                        </tr>
                    </table>

                    <h4 style="margin-top: 15px;">一時収支 (期間中合計)</h4>
                     <table>
                        <tr>
                            <th><i class="fas fa-heart expense-icon"></i> 結婚費用</th>
                            <td class="expense-val">-${details.marriage} 万円</td>
                        </tr>
                        <tr>
                            <th><i class="fas fa-car-side expense-icon"></i> 自動車購入</th>
                            <td class="expense-val">-${details.car} 万円</td>
                        </tr>
                        <tr>
                            <th><i class="fas fa-exclamation-triangle expense-icon"></i> イベント (ライフ/社会)</th>
                            <td class="expense-val">${details.social_event - details.life_event > 0 ? '+' : '-'}${Math.abs(details.life_event - details.social_event)} 万円</td>
                        </tr>
                        <tr>
                            <th><i class="fas fa-piggy-bank expense-icon"></i> 一括投資</th>
                            <td class="expense-val">-${details.investment_ikkatsu} 万円</td>
                        </tr>
                         <tr style="font-weight: bold; background: #f9f9f9;">
                            <th><i class="fas fa-calculator"></i> 一時収支 合計</th>
                            <td class="expense-val">-${turnOneTimeExpense} 万円</td>
                        </tr>
                    </table>
                </div>
            </details>
        `;
        accordionDiv.innerHTML += detailsHtml;
    });

    container.appendChild(accordionDiv);
    document.getElementById('finalBalanceModal').style.display = 'flex';
}

function closeFinalBalanceModal() {
    document.getElementById('finalBalanceModal').style.display = 'none';
}


// ★ 最終グラフモーダル
function showFinalGraph() {
    const modal = document.getElementById('finalGraphModal');
    const ctx = document.getElementById('finalBalanceChart');
    if (!ctx) {
        console.error("Final balance chart canvas not found!");
        return;
    }
    
    // 投資結果
    const investmentGain = gameState.finalInvestmentResult ? gameState.finalInvestmentResult.gain : 0;
    
    // グラフデータの準備
    const labels = ["初期", "30代", "40代", "50代", "60代", "65歳\n(投資反映)"];
    let cumulativeAssets = 100; // 初期資産
    const diffs = [];
    const assetsData = [100]; // 初期資産

    gameState.balanceHistory.forEach(entry => {
        // 年間収支差額 (グラフ用)
        diffs.push(entry.diff); 
        // 累計資産
        cumulativeAssets += entry.finalDiff;
        assetsData.push(cumulativeAssets);
    });

    // 65歳時点の投資利益を反映
    diffs.push(null); // 65歳時点の「年間収支」はない
    assetsData.push(cumulativeAssets + investmentGain); 

    // グラフの描画
    if (finalBalanceChartInstance) {
        finalBalanceChartInstance.destroy();
    }

    finalBalanceChartInstance = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: '総資産 (累計)',
                    data: assetsData,
                    borderColor: 'rgb(153, 102, 255)',
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    fill: true,
                    tension: 0.1,
                    yAxisID: 'yAsset' // 第2軸 (右)
                },
                {
                    label: '年間収支差額 (定期)',
                    data: diffs,
                    borderColor: 'rgb(54, 162, 235)',
                    fill: false,
                    tension: 0.1,
                    yAxisID: 'yDiff' // 主軸 (左)
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // ★ 高さを固定するために false
            scales: {
                yDiff: { // 左軸 (年間収支)
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: '年間の収支差額 (万円)'
                    },
                },
                yAsset: { // 右軸 (総資産)
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
                     beginAtZero: false 
                }
            },
            plugins: {
                 tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += `${context.parsed.y} 万円`;
                            }
                            // 65歳(投資反映)の総資産ツールチップに注釈を追加
                            if (context.dataset.label === '総資産 (累計)' && context.dataIndex === labels.length - 1) {
                                label += ` (投資利益 +${investmentGain}万円 含む)`;
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });

    modal.style.display = 'flex';
}

function closeFinalGraphModal() {
    document.getElementById('finalGraphModal').style.display = 'none';
}


// ==========================================================
// 12. 手取り計算関連の関数
// ==========================================================

function getNetPay(gross) {
    if (gross < 100) return Math.round(gross * 0.85); 
    if (gross <= 100) return 85;
    if (gross <= 150) return 128;
    if (gross <= 200) return 168;
    if (gross <= 250) return 208;
    if (gross <= 300) return 240;
    if (gross <= 350) return 280;
    if (gross <= 400) return 320;
    if (gross <= 450) return 355;
    if (gross <= 500) return 391;
    if (gross <= 550) return 430;
    if (gross <= 600) return 461;
    if (gross <= 650) return 495;
    if (gross <= 700) return 531;
    if (gross <= 750) return 565;
    if (gross <= 800) return 595;
    if (gross <= 850) return 630;
    if (gross <= 900) return 665;
    if (gross <= 950) return 700;
    if (gross <= 1000) return 735;
    if (gross <= 1050) return 768;
    if (gross <= 1100) return 800;
    if (gross <= 1150) return 830;
    if (gross <= 1200) return 850;
    if (gross <= 1250) return 880;
    if (gross <= 1300) return 910;
    if (gross <= 1350) return 938;
    if (gross <= 1400) return 965;
    if (gross <= 1450) return 992;
    if (gross <= 1500) return 1020;
    if (gross <= 1550) return 1048;
    if (gross <= 1600) return 1075;
    if (gross <= 1650) return 1102;
    if (gross <= 1700) return 1130;
    if (gross <= 1750) return 1155;
    if (gross <= 1800) return 1180;
    if (gross <= 1850) return 1205;
    if (gross <= 1900) return 1230;
    if (gross <= 1950) return 1255;
    if (gross <= 2000) return 1290;
    return Math.round(gross * 0.64);
}

function getNetIncomeDetails(grossIncome) {
    const net = getNetPay(grossIncome);
    const totalDeduction = grossIncome - net;

    const socialRate = 0.145; 
    let socialIns = grossIncome * socialRate;
    if (socialIns > 120) socialIns = 120;
    if (grossIncome < 130) socialIns = 0;
    let health = 0, pension = 0, employment = 0;
    if (socialIns > 0) {
        health = Math.round(socialIns * 0.45);
        pension = Math.round(socialIns * 0.50);
        employment = Math.round(socialIns * 0.05);
    }
    let taxTotal = totalDeduction - health - pension - employment;
    if (taxTotal < 0) taxTotal = 0;
    const incomeTax = Math.round(taxTotal * 0.4);
    const residentTax = Math.round(taxTotal * 0.6);
    const calculatedTotal = health + pension + employment + incomeTax + residentTax;
    const diff = totalDeduction - calculatedTotal;
    const finalResidentTax = residentTax + diff;
    const deductions = { health, pension, employment, incomeTax, residentTax: finalResidentTax };
    gameState.tempDeductions = deductions;
    gameState.tempDeductions.total = totalDeduction;
    return { net, totalDeduction, deductions };
}


function showNetIncomeModal(player, grossIncome, netIncomeDetails) {
    document.getElementById('net-income-player-name').textContent = `${player.name} さんの手取り年収`;
    document.getElementById('net-income-gross').textContent = `${grossIncome} 万円`;
    document.getElementById('net-income-net').textContent = `${netIncomeDetails.net} 万円`;
    document.getElementById('netIncomeModal').style.display = 'flex';
}

function closeNetIncomeModal() {
    document.getElementById('netIncomeModal').style.display = 'none';
    recalculateAnnualExpense(); 
    updateDisplay();
    saveGameState();
    determineNextGuidance(); 
}

function showDeductionDetailsModal() {
    const deductions = gameState.tempDeductions;
    if (!deductions) return;
    document.getElementById('deduction-health').textContent = `-${deductions.health}万円`;
    document.getElementById('deduction-pension').textContent = `-${deductions.pension}万円`;
    document.getElementById('deduction-employment').textContent = `-${deductions.employment}万円`;
    document.getElementById('deduction-income-tax').textContent = `-${deductions.incomeTax}万円`;
    document.getElementById('deduction-resident-tax').textContent = `-${deductions.residentTax}万円`;
    document.getElementById('deduction-total').textContent = `-${deductions.total}万円`;
    document.getElementById('deductionDetailsModal').style.display = 'flex';
}

function closeDeductionDetailsModal() {
    document.getElementById('deductionDetailsModal').style.display = 'none';
}


// ==========================================================
// 13. セーブデータ (Hall of Fame) 関連
// ==========================================================

/**
 * ★★★ 新規追加: 最終結果を「殿堂入り」として保存
 */
function saveToHallOfFame() {
    if (!gameState.finalInvestmentResult) {
        console.error("No final result to save.");
        return;
    }

    const finalAssets = gameState.finalInvestmentResult.finalAssets;
    
    // 保存するデータを作成
    const entry = {
        id: new Date().toISOString(), // ユニークID
        timestamp: new Date().toLocaleString('ja-JP'),
        finalAssets: finalAssets,
        player1Name: gameState.players.player1.name,
        player2Name: gameState.players.player2.name,
        marriage: gameState.marriage.type,
        children: gameState.children.count,
        house: gameState.house.type,
    };

    try {
        const hallOfFameData = localStorage.getItem(HALL_OF_FAME_KEY);
        let entries = hallOfFameData ? JSON.parse(hallOfFameData) : [];
        
        entries.push(entry);
        
        // 資産額でソート (降順)
        entries.sort((a, b) => b.finalAssets - a.finalAssets);
        
        // 最大10件まで保存
        if (entries.length > 10) {
            entries = entries.slice(0, 10);
        }
        
        localStorage.setItem(HALL_OF_FAME_KEY, JSON.stringify(entries));
        
    } catch (e) {
        console.error("Failed to save to Hall of Fame:", e);
    }
}

/**
 * ★★★ 新規追加: 殿堂入りモーダルを表示
 */
function showHallOfFame() {
    const modal = document.getElementById('hallOfFameModal');
    const container = document.getElementById('hallOfFameContainer');
    if (!modal || !container) return;

    container.innerHTML = ''; // クリア
    
    try {
        const hallOfFameData = localStorage.getItem(HALL_OF_FAME_KEY);
        const entries = hallOfFameData ? JSON.parse(hallOfFameData) : [];

        if (entries.length === 0) {
            container.innerHTML = '<p style="text-align: center;">まだセーブデータがありません。</p>';
            modal.style.display = 'flex';
            return;
        }

        entries.forEach(entry => {
            const entryDiv = document.createElement('div');
            entryDiv.className = 'hof-entry';
            entryDiv.innerHTML = `
                <div class="assets">
                    ${entry.finalAssets}<span>万円</span>
                </div>
                <div class="details">
                    <p class="timestamp">${entry.timestamp}</p>
                    <p><strong>プレイヤー:</strong> ${entry.player1Name}, ${entry.player2Name}</p>
                    <p><strong>結婚:</strong> ${entry.marriage}</p>
                    <p><strong>子ども:</strong> ${entry.children} 人</p>
                    <p><strong>住居:</strong> ${entry.house}</p>
                </div>
            `;
            container.appendChild(entryDiv);
        });

    } catch (e) {
        console.error("Failed to load Hall of Fame:", e);
        container.innerHTML = '<p style="text-align: center; color: red;">セーブデータの読み込みに失敗しました。</p>';
    }
    
    modal.style.display = 'flex';
}

/**
 * ★★★ 新規追加: 殿堂入りモーダルを閉じる
 */
function closeHallOfFameModal() {
    const modal = document.getElementById('hallOfFameModal');
    if (modal) modal.style.display = 'none';
}


// ==========================================================
// 14. 初期ロード処理
// ==========================================================
document.addEventListener('DOMContentLoaded', () => {
    const titleScreen = document.getElementById('titleScreen');
    const gameContainer = document.querySelector('.container');
    const setupModal = document.getElementById('setupModal');

    // (CSS側で display:none に変更済み)
    // const modals = document.querySelectorAll('.modal');
    // modals.forEach(modal => modal.style.display = 'none');

    if (loadGameState() && titleScreen && gameContainer && setupModal) {
        titleScreen.style.display = 'none';
        setupModal.style.display = 'none';
        gameContainer.style.display = 'block';

        try {
            localStorage.setItem(BALANCE_HISTORY_KEY, JSON.stringify(gameState.balanceHistory));
        } catch (e) {
             console.error("Error saving balance history after load:", e);
        }

        updateDisplay();
        
        if (gameState.isCareerChallengeActive) {
             showCareerChallenge(gameState.currentPlayerChallenge || 'player1');
        }
        else if (gameState.currentGuidance) {
            showGuidanceModal(gameState.currentGuidance); 
        } 
        else if (!gameState.currentGuidance && !gameState.isCareerChallengeActive && gameState.currentAge >= 40 && gameState.currentAge < 70) {
            if (!gameState.car.cardScanned || !gameState.insurance.cardScanned || !gameState.turnEventCompleted) {
                 showAgeGuidanceModal(gameState.currentAge);
            }
        }
        else if (gameState.currentAge === 30 && !gameState.players.player1.jobId) {
             determineNextGuidance();
        }

    } else {
        if (titleScreen) titleScreen.style.display = 'flex';
        if (gameContainer) gameContainer.style.display = 'none';
        if (setupModal) setupModal.style.display = 'none';
        
        // ★ アクティブなゲームデータのみ削除 (殿堂入りは残す)
        localStorage.removeItem(GAME_STATE_KEY);
        localStorage.removeItem(BALANCE_HISTORY_KEY);
        localStorage.removeItem('gameStarted');
    }

    updateDisplay();
});