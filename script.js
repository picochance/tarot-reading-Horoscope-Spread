import { pipeline } from "https://cdn.jsdelivr.net/npm/@xenova/transformers";

let generator = null;

async function loadLLM() {
  generator = await pipeline(
    "text-generation",
    "Xenova/tiny-llama-1.1b-chat"
  );
}

loadLLM();


// タロットカードデータ（78枚）- 詳細な意味付き
const tarotDeck = [
    // 大アルカナ（22枚）
    { name: "愚者", emoji: "🃏", type: "major", 
      upright: "大きな決断、始まり、ラッキーチャンス", 
      reversed: "愚かな決断、無責任、自己中心的な行動" },
    { name: "魔術師", emoji: "🎩", type: "major",
      upright: "独創的なアイデアの創造、才能、可能性",
      reversed: "計画が実現されない、制限、不完全" },
    { name: "女教皇", emoji: "👸", type: "major",
      upright: "見えない秘密、知恵が隠されている",
      reversed: "疑惑、隠蔽、誤解が不幸な結果を招く" },
    { name: "女帝", emoji: "👑", type: "major",
      upright: "成長、豊かさ、愛、母性",
      reversed: "感情の抑制、不安定、不満、無気力" },
    { name: "皇帝", emoji: "🤴", type: "major",
      upright: "目標達成、良い結果が出る、権力、強さ",
      reversed: "無計画、支配欲、独裁、威圧に終わる行動" },
    { name: "教皇", emoji: "⛪", type: "major",
      upright: "伝統と秩序を守った目標達成、導き手の出現",
      reversed: "固定観念にとらわれ、誤解やトラブルが生じる" },
    { name: "恋人", emoji: "💑", type: "major",
      upright: "愛、正しい選択、関係",
      reversed: "未練、葛藤、嫉妬" },
    { name: "戦車", emoji: "🏇", type: "major",
      upright: "勝利、行動、決断、心の強さによる克服",
      reversed: "衝動、攻撃性、挫折、自制心の喪失" },
    { name: "力", emoji: "🦁", type: "major",
      upright: "自己理解、忍耐、勇気、克服",
      reversed: "自己嫌悪、暴力、抑圧、執着" },
    { name: "隠者", emoji: "🕯️", type: "major",
      upright: "内省、孤独、精神性、内なる案内人",
      reversed: "アドバイスの無視、閉鎖、孤立、冷淡" },
    { name: "運命の輪", emoji: "☸️", type: "major",
      upright: "運命、変化、循環、チャンス",
      reversed: "不運、問題の再発、延期、妨害、停滞" },
    { name: "正義", emoji: "⚖️", type: "major",
      upright: "正しい判断、公平、適切な報酬",
      reversed: "非難、制裁、不公平、アンバランス" },
    { name: "吊された男", emoji: "🙃", type: "major",
      upright: "犠牲、優先順位の変化",
      reversed: "自分本位、プライドと執着、停滞" },
    { name: "死神", emoji: "💀", type: "major",
      upright: "変化、変容、再生",
      reversed: "破壊、絶望、衰退" },
    { name: "節制", emoji: "⚗️", type: "major",
      upright: "バランス、制御、安定、調和",
      reversed: "アンバランス、極端、不適切な行動" },
    { name: "悪魔", emoji: "😈", type: "major",
      upright: "誘惑、執着、制限",
      reversed: "解放、自由、脱却" },
    { name: "塔", emoji: "🗼", type: "major",
      upright: "破壊、崩壊、変革の訪れ",
      reversed: "変革の訪れ、再生、希望" },
    { name: "星", emoji: "⭐", type: "major",
      upright: "希望、夢、予言",
      reversed: "一時的な失望、幻滅、挫折" },
    { name: "月", emoji: "🌙", type: "major",
      upright: "直感、潜在意識、欺瞞",
      reversed: "現実、真実、洞察" },
    { name: "太陽", emoji: "☀️", type: "major",
      upright: "成功、達成、幸福",
      reversed: "失敗、挫折、不幸" },
    { name: "審判", emoji: "📯", type: "major",
      upright: "赦し、再生、ターニングポイント",
      reversed: "裁き、現状への執着、変化への恐れ" },
    { name: "世界", emoji: "🌍", type: "major",
      upright: "完全性、達成、新たな旅立ち",
      reversed: "未熟、不足、部分的な成功" },
    
    // 小アルカナ - ワンド（14枚）
    { name: "ワンドのエース", emoji: "🔥", type: "wands",
      upright: "アイデア、新しい可能性、才能",
      reversed: "制限、不完全、無責任、燃え尽き" },
    { name: "ワンドの2", emoji: "🌋", type: "wands",
      upright: "選択、決断、パートナーシップ",
      reversed: "二分化、対立、分離" },
    { name: "ワンドの3", emoji: "⚡", type: "wands",
      upright: "創造性、エネルギー、発展",
      reversed: "衝動、過剰な自信、失敗" },
    { name: "ワンドの4", emoji: "🎆", type: "wands",
      upright: "安定、基盤、成就、祝福",
      reversed: "退屈、マンネリ化、消極性、誤解" },
    { name: "ワンドの5", emoji: "🔆", type: "wands",
      upright: "衝突、競争、対立",
      reversed: "調和、和解、協力" },
    { name: "ワンドの6", emoji: "🌟", type: "wands",
      upright: "勝利、達成、成功",
      reversed: "失敗、挫折、不満" },
    { name: "ワンドの7", emoji: "💫", type: "wands",
      upright: "逆境、防衛、信念",
      reversed: "諦め、不信、不確実性" },
    { name: "ワンドの8", emoji: "✨", type: "wands",
      upright: "急速な進展、達成、旅行、成長",
      reversed: "障害、衝突、恐れ、トラブル" },
    { name: "ワンドの9", emoji: "🎇", type: "wands",
      upright: "完成、成熟、防御、警戒",
      reversed: "意欲の喪失、自信喪失、諦め" },
    { name: "ワンドの10", emoji: "🎑", type: "wands",
      upright: "達成、プレッシャー、重荷、責任",
      reversed: "疲弊、大きすぎるプレッシャー、限界" },
    { name: "ワンドのペイジ", emoji: "🧑", type: "wands",
      upright: "情熱、無限の可能性、才能",
      reversed: "誇大妄想、不完全、迷い道と試練" },
    { name: "ワンドのナイト", emoji: "🤺", type: "wands",
      upright: "情熱、大胆な行動、積極性",
      reversed: "衝動的、無謀、空回り" },
    { name: "ワンドのクイーン", emoji: "👸🔥", type: "wands",
      upright: "創造性、エネルギー、魅力",
      reversed: "支配欲、独善、傲慢" },
    { name: "ワンドのキング", emoji: "🤴🔥", type: "wands",
      upright: "権力、カリスマ性、ビジョン",
      reversed: "独裁、傲慢、金の亡者" },
    
    // 小アルカナ - カップ（14枚）
    { name: "カップのエース", emoji: "🏆", type: "cups",
      upright: "愛、新たな感情、恋愛成就",
      reversed: "失恋、心の乱れ、ネガティブな感情" },
    { name: "カップの2", emoji: "💕", type: "cups",
      upright: "調和、協力、パートナーシップ",
      reversed: "二つの選択肢、別離、復讐" },
    { name: "カップの3", emoji: "🎉", type: "cups",
      upright: "幸福、喜び、満足、祝福",
      reversed: "不幸の連鎖、苦しみ、依存症" },
    { name: "カップの4", emoji: "😔", type: "cups",
      upright: "停滞、休息が必要、熟慮",
      reversed: "不安定、無関心、現実逃避" },
    { name: "カップの5", emoji: "😢", type: "cups",
      upright: "心痛、悲しみ、喪失、破談",
      reversed: "改善、希望、自信" },
    { name: "カップの6", emoji: "🌸", type: "cups",
      upright: "温もり、祝福、家庭的な幸せ",
      reversed: "過去との決別、旅立ち、縁切り" },
    { name: "カップの7", emoji: "💭", type: "cups",
      upright: "幻想と夢、現実のギャップ",
      reversed: "夢からの目覚め、現実と向き合う" },
    { name: "カップの8", emoji: "🚶", type: "cups",
      upright: "心の整理、新たな旅立ち、交代",
      reversed: "放棄、出会い、好転" },
    { name: "カップの9", emoji: "😊", type: "cups",
      upright: "満足、充実、願望成就",
      reversed: "不満、燃え尽き、過剰な期待" },
    { name: "カップの10", emoji: "🌈", type: "cups",
      upright: "家庭的な幸せ、充実、繁栄",
      reversed: "愛情不足、崩壊、不満" },
    { name: "カップのペイジ", emoji: "👦", type: "cups",
      upright: "新しい恋、才能、純粋な好奇心",
      reversed: "優柔不断、妄想、現実逃避" },
    { name: "カップのナイト", emoji: "🦄", type: "cups",
      upright: "情熱、積極性、理想、ロマンス",
      reversed: "感情の混乱、不誠実、無謀" },
    { name: "カップのクイーン", emoji: "👸💧", type: "cups",
      upright: "愛、慈愛、癒し",
      reversed: "情緒不安定、犠牲、現実逃避" },
    { name: "カップのキング", emoji: "🤴💧", type: "cups",
      upright: "責任感、冷静な判断力、知性",
      reversed: "独裁、未熟、傲慢、ノイローゼ" },
    
    // 小アルカナ - ソード（14枚）
    { name: "ソードのエース", emoji: "⚔️", type: "swords",
      upright: "知性、明晰な思考、洞察力",
      reversed: "混乱、誤解、八方塞がり" },
    { name: "ソードの2", emoji: "🤷", type: "swords",
      upright: "選択、決断、葛藤",
      reversed: "優柔不断、自己欺瞞、二分化" },
    { name: "ソードの3", emoji: "💔", type: "swords",
      upright: "心の痛み、悲しみ",
      reversed: "自己欺瞞、被害者意識、心の閉ざし" },
    { name: "ソードの4", emoji: "😴", type: "swords",
      upright: "休息が必要、保護、静養",
      reversed: "新規、再出発、休息の拒否" },
    { name: "ソードの5", emoji: "⚡", type: "swords",
      upright: "対立、闘争、攻撃",
      reversed: "敗北、無力感、負け惜しみ" },
    { name: "ソードの6", emoji: "⛵", type: "swords",
      upright: "変化、好転、引越し",
      reversed: "困難、行き詰まり、失敗" },
    { name: "ソードの7", emoji: "🥷", type: "swords",
      upright: "策略、裏切り、自滅",
      reversed: "誤解、勘違い、謝罪" },
    { name: "ソードの8", emoji: "🪢", type: "swords",
      upright: "心の戦い、試練、成長",
      reversed: "解放、自由、復活" },
    { name: "ソードの9", emoji: "😰", type: "swords",
      upright: "苦しみ、悲しみ、苦悩",
      reversed: "救済、癒し、希望" },
    { name: "ソードの10", emoji: "🗡️", type: "swords",
      upright: "破壊、喪失、敗北",
      reversed: "再生、再構築、改善、希望" },
    { name: "ソードのペイジ", emoji: "🧒", type: "swords",
      upright: "知性、思考、好奇心",
      reversed: "混乱、誤解、不確実性" },
    { name: "ソードのナイト", emoji: "🐎", type: "swords",
      upright: "行動力、決断力、攻撃性",
      reversed: "衝動、無謀、失敗" },
    { name: "ソードのクイーン", emoji: "👸⚔️", type: "swords",
      upright: "理性、知恵、冷静さ、洞察力",
      reversed: "被害妄想、嫉妬心、猜疑心" },
    { name: "ソードのキング", emoji: "🤴⚔️", type: "swords",
      upright: "公正、権威、冷静沈着",
      reversed: "独裁、強引、傲慢" },
    
    // 小アルカナ - ペンタクル（14枚）
    { name: "ペンタクルのエース", emoji: "💰", type: "pentacles",
      upright: "金銭的な成功、富、精神の充実",
      reversed: "貧困、失敗、不満" },
    { name: "ペンタクルの2", emoji: "⚖️", type: "pentacles",
      upright: "バランス、柔軟性、調和",
      reversed: "不安定、不調和、分離" },
    { name: "ペンタクルの3", emoji: "🏗️", type: "pentacles",
      upright: "勤勉、努力、収穫",
      reversed: "怠惰、無駄、失敗" },
    { name: "ペンタクルの4", emoji: "🔒", type: "pentacles",
      upright: "経済基盤、守銭奴、独占欲",
      reversed: "倹約、計画性、長期的なプラン" },
    { name: "ペンタクルの5", emoji: "🚪", type: "pentacles",
      upright: "経済的な喪失、不健康、孤独",
      reversed: "努力が報われる、希望、解放、好転" },
    { name: "ペンタクルの6", emoji: "🤝", type: "pentacles",
      upright: "報酬、ギブアンドテイク、慈悲",
      reversed: "不公平、搾取、バランスの欠如" },
    { name: "ペンタクルの7", emoji: "🌱", type: "pentacles",
      upright: "小さな幸せ、物足りなさ、再考",
      reversed: "不確実性、浪費、負債、幻滅" },
    { name: "ペンタクルの8", emoji: "🔨", type: "pentacles",
      upright: "努力、成長、繁栄",
      reversed: "手抜き、詐欺、自惚れ" },
    { name: "ペンタクルの9", emoji: "🎭", type: "pentacles",
      upright: "繁栄、豊かさ、満足感、独立",
      reversed: "慢心、甘え、過度な自立心、損失" },
    { name: "ペンタクルの10", emoji: "🏰", type: "pentacles",
      upright: "豊かさ、順調、長期的な安定",
      reversed: "危険、不安定、経済的困窮" },
    { name: "ペンタクルのペイジ", emoji: "👨‍🎓", type: "pentacles",
      upright: "才能、実践的な学び、成長",
      reversed: "不完全、無責任、反抗心" },
    { name: "ペンタクルのナイト", emoji: "🐢", type: "pentacles",
      upright: "誠実、努力、勤勉",
      reversed: "怠惰、計算高い、優柔不断" },
    { name: "ペンタクルのクイーン", emoji: "👸💎", type: "pentacles",
      upright: "豊かさ、繁栄、恵み",
      reversed: "欲望、執着、物質主義" },
    { name: "ペンタクルのキング", emoji: "🤴💎", type: "pentacles",
      upright: "権力、財力、成功",
      reversed: "物質主義、過剰な管理、傲慢" }
];

// 12ハウスの意味
const houses = [
    { number: 1, name: "第1ハウス", meaning: "自己・個性", angle: 180 },
    { number: 2, name: "第2ハウス", meaning: "金銭・所有", angle: 150 },
    { number: 3, name: "第3ハウス", meaning: "コミュニケーション", angle: 120 },
    { number: 4, name: "第4ハウス", meaning: "家庭・基盤", angle: 90 },
    { number: 5, name: "第5ハウス", meaning: "創造・恋愛", angle: 60 },
    { number: 6, name: "第6ハウス", meaning: "健康・労働", angle: 30 },
    { number: 7, name: "第7ハウス", meaning: "パートナーシップ", angle: 0 },
    { number: 8, name: "第8ハウス", meaning: "変容・遺産", angle: 330 },
    { number: 9, name: "第9ハウス", meaning: "哲学・旅", angle: 300 },
    { number: 10, name: "第10ハウス", meaning: "社会的地位", angle: 270 },
    { number: 11, name: "第11ハウス", meaning: "友情・希望", angle: 240 },
    { number: 12, name: "第12ハウス", meaning: "潜在意識", angle: 210 }
];

let currentDeck = [];
let selectedCards = [];
let isShuffling = false;

// 初期デッキの作成（ランダムな向き付き）
function initializeDeck() {
    currentDeck = tarotDeck.map(card => ({
        ...card,
        isReversed: Math.random() > 0.5
    }));
}

// シャッフル関数（占い師風）
async function shuffleDeck() {
    const shuffleCount = Math.floor(Math.random() * 13) + 8; // 8-20回
    
    for (let i = 0; i < shuffleCount; i++) {
        const startPos = Math.floor(Math.random() * 6) + 5; // 5-10枚
        const chunkSize = Math.floor(Math.random() * 11) + 10; // 10-20枚
        
        const chunk = currentDeck.splice(startPos, chunkSize);
        currentDeck = [...chunk, ...currentDeck];
        
        document.getElementById('shuffleStatus').textContent = 
            `シャッフル中... (${i + 1}/${shuffleCount})`;
        
        await new Promise(resolve => setTimeout(resolve, 300));
    }
}

// カードを配置
function layoutCards() {
    const container = document.getElementById('spreadContainer');
    container.innerHTML = '<div class="horoscope-wheel" id="wheel"></div>';
    const wheel = document.getElementById('wheel');
    
    const radius = 250;
    const centerX = 350;
    const centerY = 350;

    // ★ 13枚選ぶ（12ハウス＋中央カード）
    selectedCards = currentDeck.slice(0, 13);

    // ★ 最初の12枚をホロスコープ配置
    selectedCards.slice(0, 12).forEach((card, index) => {
        const house = houses[index];
        const angle = (house.angle - 90) * Math.PI / 180;
        const x = centerX + radius * Math.cos(angle) - 45;
        const y = centerY + radius * Math.sin(angle) - 70;

        const cardEl = document.createElement('div');
        cardEl.className = 'card';
        cardEl.style.left = `${x}px`;
        cardEl.style.top = `${y}px`;
        cardEl.innerHTML = `
            <div class="card-inner">
                <div class="card-face card-back"></div>
                <div class="card-face card-front ${card.isReversed ? 'reversed' : ''}">
                    <div class="card-emoji">${card.emoji}</div>
                    <div class="card-name">${card.name}${card.isReversed ? '<br>(逆位置)' : ''}</div>
                </div>
            </div>
        `;
        wheel.appendChild(cardEl);

        // ハウスラベル
        const labelAngle = house.angle * Math.PI / 180;
        const labelRadius = radius + 60;
        const labelX = centerX + labelRadius * Math.cos(labelAngle) - 40;
        const labelY = centerY + labelRadius * Math.sin(labelAngle) - 10;

        const label = document.createElement('div');
        label.className = 'house-label';
        label.style.left = `${labelX}px`;
        label.style.top = `${labelY}px`;
        label.textContent = house.name;
        wheel.appendChild(label);
    });

    // ★ 13枚目（中央カード：結果カード）
    const centerCard = selectedCards[12];
    const centerEl = document.createElement('div');
    centerEl.className = 'card result-card';
    centerEl.style.left = `${centerX - 55}px`;
    centerEl.style.top = `${centerY - 90}px`;
    centerEl.innerHTML = `
        <div class="card-inner">
            <div class="card-face card-back"></div>
            <div class="card-face card-front ${centerCard.isReversed ? 'reversed' : ''}">
                <div class="card-emoji">${centerCard.emoji}</div>
                <div class="card-name">${centerCard.name}${centerCard.isReversed ? '<br>(逆位置)' : ''}</div>
            </div>
        </div>
    `;
    wheel.appendChild(centerEl);

    // ★ 結果カードのラベル
    const resultLabel = document.createElement('div');
    resultLabel.className = 'result-label';
    resultLabel.textContent = "結果カード";
    wheel.appendChild(resultLabel);
}

// カードを一気にオープン
async function revealCards() {
    const cards = document.querySelectorAll('.card');
    
    for (let i = 0; i < cards.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 150));
        cards[i].classList.add('flipped');
    }
    
    await new Promise(resolve => setTimeout(resolve, 800));
}

// ===============================
// ★ generateReading（完全修正版）
// ===============================
async function generateReading() {
    const readingSection = document.getElementById('readingSection');
    const readingContent = document.getElementById('readingContent');

    readingSection.classList.add('show');
    readingContent.innerHTML = '<div class="loading">リーディングを生成中</div>';

    try {
        // 12ハウス分のカード情報
        const cardDetails = selectedCards.slice(0, 12).map((card, i) => {
            const house = houses[i];
            const meaning = card.isReversed ? card.reversed : card.upright;
            return `${house.name}（${house.meaning}）: ${card.name}${card.isReversed ? '（逆位置）' : '（正位置）'}
意味: ${meaning}`;
        }).join('\n\n');

        // 結果カード（13枚目）
        const resultCard = selectedCards[12];
        const resultMeaning = resultCard.isReversed ? resultCard.reversed : resultCard.upright;

        // AI プロンプト
        const prompt = `
あなたは経験豊富なタロット占い師です。

【12ハウスのカード】
${cardDetails}

【結果カード（今月の総合テーマ）】
${resultCard.name}${resultCard.isReversed ? '（逆位置）' : '（正位置）'}
意味: ${resultMeaning}

【重要な指示】
1. 第1〜第12ハウスはそれぞれ250〜300文字でリーディングを書くこと。
2. 結果カードは「今月の総合テーマ」として300文字前後でまとめること。
3. 抽象表現を避け、具体的で実践的なアドバイスを含めること。
4. 温かく前向きな語り口で書くこと。

【出力フォーマット】
---第1ハウス---
（リーディング）

...

---第12ハウス---
（リーディング）

---結果カード---
（総合テーマのリーディング）
`;

        /*
        // API 呼び出し
        const response = await fetch("https://api.anthropic.com/v1/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "claude-sonnet-4-20250514",
                max_tokens: 6000,
                messages: [{ role: "user", content: prompt }]
            })
        });
        const reading = data.content[0].text;
        */
        /*
        // WebLLM で推論
        const reply = await engine.chat.completions.create({
            messages: [
                { role: "user", content: prompt }
            ],
            max_tokens: 6000
        });
        // Claude の data.content[0].text と同じ形式に合わせる
        const reading = reply.choices[0].message.content;
        */
        
        // ★ Transformers.js で推論
        const out = await generator(prompt, { max_new_tokens: 6000 });
        const reading = out[0].generated_text;

        
        const data = await response.json();

        // --- パースして HTML に変換 ---
        let html = "";

        // 12ハウスのリーディングを抽出
        const houseSections = reading.split(/---第\d+ハウス---/).filter(s => s.trim());

        // 12ハウス分を出力
        selectedCards.slice(0, 12).forEach((card, index) => {
            const house = houses[index];
            const meaning = card.isReversed ? card.reversed : card.upright;
            const readingText = houseSections[index]?.trim() || "リーディング生成に失敗しました。";

            html += `
                <div class="house-reading">
                    <h3>${house.name} - ${house.meaning}</h3>
                    <div class="card-info">
                        ${card.name}${card.isReversed ? '（逆位置）' : '（正位置）'} - ${meaning}
                    </div>
                    <p>${readingText}</p>
                </div>
            `;
        });

        // --- 結果カードのリーディング ---
        const resultSection = reading.split(/---結果カード---/)[1]?.trim() ||
            "総合テーマの生成に失敗しました。";

        html += `
            <div class="house-reading" 
                 style="border-left: 4px solid var(--gold); background: rgba(212,175,55,0.1);">
                <h3>結果カード（今月の総合テーマ）</h3>
                <div class="card-info">
                    ${resultCard.name}${resultCard.isReversed ? '（逆位置）' : '（正位置）'} - ${resultMeaning}
                </div>
                <p>${resultSection}</p>
            </div>
        `;

        readingContent.innerHTML = html;

    } catch (error) {
        console.error("Reading generation error:", error);
        readingContent.innerHTML = "<p>リーディング生成中にエラーが発生しました。</p>";
    }
}


// ===============================
// ★ startReading（完全修正版）
// ===============================
async function startReading() {
    if (isShuffling) return;
    isShuffling = true;

    const startButton = document.getElementById('startButton');
    startButton.disabled = true;

    document.getElementById('shuffleStatus').textContent = 'カードを準備中...';

    // シャッフル
    await shuffleDeck();

    document.getElementById('shuffleStatus').textContent = 'カードを配置中...';
    await new Promise(resolve => setTimeout(resolve, 500));

    // レイアウト
    layoutCards();
    await new Promise(resolve => setTimeout(resolve, 800));

    document.getElementById('shuffleStatus').textContent = 'カードをオープン...';

    // カードを開く
    await revealCards();

    document.getElementById('shuffleStatus').textContent = '';

    // リーディング生成
    await generateReading();

    isShuffling = false;
}
