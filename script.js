// タロットカードデータ（78枚）
const tarotDeck = [
    // 大アルカナ（22枚）
    { name: "愚者", emoji: "🃏", type: "major" },
    { name: "魔術師", emoji: "🎩", type: "major" },
    { name: "女教皇", emoji: "👸", type: "major" },
    { name: "女帝", emoji: "👑", type: "major" },
    { name: "皇帝", emoji: "🤴", type: "major" },
    { name: "教皇", emoji: "⛪", type: "major" },
    { name: "恋人", emoji: "💑", type: "major" },
    { name: "戦車", emoji: "🏇", type: "major" },
    { name: "力", emoji: "🦁", type: "major" },
    { name: "隠者", emoji: "🕯️", type: "major" },
    { name: "運命の輪", emoji: "☸️", type: "major" },
    { name: "正義", emoji: "⚖️", type: "major" },
    { name: "吊された男", emoji: "🙃", type: "major" },
    { name: "死神", emoji: "💀", type: "major" },
    { name: "節制", emoji: "⚗️", type: "major" },
    { name: "悪魔", emoji: "😈", type: "major" },
    { name: "塔", emoji: "🗼", type: "major" },
    { name: "星", emoji: "⭐", type: "major" },
    { name: "月", emoji: "🌙", type: "major" },
    { name: "太陽", emoji: "☀️", type: "major" },
    { name: "審判", emoji: "📯", type: "major" },
    { name: "世界", emoji: "🌍", type: "major" },
    
    // 小アルカナ - ワンド（14枚）
    { name: "ワンドのエース", emoji: "🔥", type: "wands" },
    { name: "ワンドの2", emoji: "🌋", type: "wands" },
    { name: "ワンドの3", emoji: "⚡", type: "wands" },
    { name: "ワンドの4", emoji: "🎆", type: "wands" },
    { name: "ワンドの5", emoji: "🔆", type: "wands" },
    { name: "ワンドの6", emoji: "🌟", type: "wands" },
    { name: "ワンドの7", emoji: "💫", type: "wands" },
    { name: "ワンドの8", emoji: "✨", type: "wands" },
    { name: "ワンドの9", emoji: "🎇", type: "wands" },
    { name: "ワンドの10", emoji: "🎑", type: "wands" },
    { name: "ワンドのペイジ", emoji: "🧑", type: "wands" },
    { name: "ワンドのナイト", emoji: "🤺", type: "wands" },
    { name: "ワンドのクイーン", emoji: "👸🔥", type: "wands" },
    { name: "ワンドのキング", emoji: "🤴🔥", type: "wands" },
    
    // 小アルカナ - カップ（14枚）
    { name: "カップのエース", emoji: "🏆", type: "cups" },
    { name: "カップの2", emoji: "💕", type: "cups" },
    { name: "カップの3", emoji: "🎉", type: "cups" },
    { name: "カップの4", emoji: "😔", type: "cups" },
    { name: "カップの5", emoji: "😢", type: "cups" },
    { name: "カップの6", emoji: "🌸", type: "cups" },
    { name: "カップの7", emoji: "💭", type: "cups" },
    { name: "カップの8", emoji: "🚶", type: "cups" },
    { name: "カップの9", emoji: "😊", type: "cups" },
    { name: "カップの10", emoji: "🌈", type: "cups" },
    { name: "カップのペイジ", emoji: "👦", type: "cups" },
    { name: "カップのナイト", emoji: "🦄", type: "cups" },
    { name: "カップのクイーン", emoji: "👸💧", type: "cups" },
    { name: "カップのキング", emoji: "🤴💧", type: "cups" },
    
    // 小アルカナ - ソード（14枚）
    { name: "ソードのエース", emoji: "⚔️", type: "swords" },
    { name: "ソードの2", emoji: "🤷", type: "swords" },
    { name: "ソードの3", emoji: "💔", type: "swords" },
    { name: "ソードの4", emoji: "😴", type: "swords" },
    { name: "ソードの5", emoji: "⚡", type: "swords" },
    { name: "ソードの6", emoji: "⛵", type: "swords" },
    { name: "ソードの7", emoji: "🥷", type: "swords" },
    { name: "ソードの8", emoji: "🪢", type: "swords" },
    { name: "ソードの9", emoji: "😰", type: "swords" },
    { name: "ソードの10", emoji: "🗡️", type: "swords" },
    { name: "ソードのペイジ", emoji: "🧒", type: "swords" },
    { name: "ソードのナイト", emoji: "🐎", type: "swords" },
    { name: "ソードのクイーン", emoji: "👸⚔️", type: "swords" },
    { name: "ソードのキング", emoji: "🤴⚔️", type: "swords" },
    
    // 小アルカナ - ペンタクル（14枚）
    { name: "ペンタクルのエース", emoji: "💰", type: "pentacles" },
    { name: "ペンタクルの2", emoji: "⚖️", type: "pentacles" },
    { name: "ペンタクルの3", emoji: "🏗️", type: "pentacles" },
    { name: "ペンタクルの4", emoji: "🔒", type: "pentacles" },
    { name: "ペンタクルの5", emoji: "🚪", type: "pentacles" },
    { name: "ペンタクルの6", emoji: "🤝", type: "pentacles" },
    { name: "ペンタクルの7", emoji: "🌱", type: "pentacles" },
    { name: "ペンタクルの8", emoji: "🔨", type: "pentacles" },
    { name: "ペンタクルの9", emoji: "🎭", type: "pentacles" },
    { name: "ペンタクルの10", emoji: "🏰", type: "pentacles" },
    { name: "ペンタクルのペイジ", emoji: "👨‍🎓", type: "pentacles" },
    { name: "ペンタクルのナイト", emoji: "🐢", type: "pentacles" },
    { name: "ペンタクルのクイーン", emoji: "👸💎", type: "pentacles" },
    { name: "ペンタクルのキング", emoji: "🤴💎", type: "pentacles" }
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
        reversed: Math.random() > 0.5
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
    
    selectedCards = currentDeck.slice(0, 12);
    
    selectedCards.forEach((card, index) => {
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
                <div class="card-face card-front ${card.reversed ? 'reversed' : ''}">
                    <div class="card-emoji">${card.emoji}</div>
                    <div class="card-name">${card.name}${card.reversed ? '<br>(逆位置)' : ''}</div>
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

// AIリーディングを生成
async function generateReading() {
    const readingSection = document.getElementById('readingSection');
    const readingContent = document.getElementById('readingContent');
    
    readingSection.classList.add('show');
    readingContent.innerHTML = '<div class="loading">リーディングを生成中</div>';
    
    try {
        const prompt = `あなたは経験豊富なタロット占い師です。以下のホロスコープ・スプレッドの結果に基づいて、今月の運勢を占ってください。

各ハウスに出たカードは以下の通りです：

${selectedCards.map((card, i) => 
    `${houses[i].name}（${houses[i].meaning}）: ${card.name}${card.reversed ? '（逆位置）' : '（正位置）'}`
).join('\n')}

【重要な指示】
以下のフォーマットで、各ハウスごとに均一で詳しいリーディングを提供してください：

各ハウスのリーディングは必ず以下の3つの要素を含めてください：
1. カードの基本的な意味とハウスのテーマの組み合わせ（2-3文）
2. 今月の具体的な展開や状況の予測（2-3文）
3. アドバイスや心構え（1-2文）

各ハウスのリーディングは200-250文字程度で、全てのハウスで同じくらいの長さ・詳しさにしてください。

出力フォーマット：
---第1ハウス---
[ここにリーディング内容]

---第2ハウス---
[ここにリーディング内容]

（以下同様に第12ハウスまで）

温かく、前向きで、具体的なアドバイスを心がけてください。`;

        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'claude-sonnet-4-20250514',
                max_tokens: 4000,
                messages: [{
                    role: 'user',
                    content: prompt
                }]
            })
        });

        const data = await response.json();
        const reading = data.content[0].text;
        
        // リーディングをパースして表示
        let html = '';
        const sections = reading.split(/---第\d+ハウス---/).filter(s => s.trim());
        
        selectedCards.forEach((card, index) => {
            const house = houses[index];
            const readingText = sections[index] || 
                `このハウスでは${card.name}${card.reversed ? '（逆位置）' : ''}が示されています。${house.meaning}の分野において、重要なメッセージがあります。`;
            
            html += `
                <div class="house-reading">
                    <h3>${house.name} - ${house.meaning}</h3>
                    <div class="card-info">${card.name}${card.reversed ? '（逆位置）' : '（正位置）'}</div>
                    <p>${readingText.trim()}</p>
                </div>
            `;
        });
        
        readingContent.innerHTML = html;
        
    } catch (error) {
        // エラー時のフォールバック
        let html = '';
        selectedCards.forEach((card, index) => {
            const house = houses[index];
            html += `
                <div class="house-reading">
                    <h3>${house.name} - ${house.meaning}</h3>
                    <div class="card-info">${card.name}${card.reversed ? '（逆位置）' : '（正位置）'}</div>
                    <p>このハウスでは${card.name}${card.reversed ? '（逆位置）' : ''}が示されています。${house.meaning}の分野において、カードが重要なメッセージを伝えています。カードの意味を深く瞑想し、ご自身の状況と照らし合わせてみてください。</p>
                </div>
            `;
        });
        readingContent.innerHTML = html;
        console.error('Reading generation error:', error);
    }
}

// 占いを開始
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

// 初期化
initializeDeck();
document.getElementById('startButton').addEventListener('click', startReading);
