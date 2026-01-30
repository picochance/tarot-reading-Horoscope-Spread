# 月運タロット占い - ホロスコープ・スプレッド

ホロスコープの12ハウスに対応した12枚のカードで今月の運勢を占う、本格的なタロット占いWebアプリケーションです。

![タロット占いアプリ](https://img.shields.io/badge/Tarot-Reading-purple?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ 特徴

### 🎴 本格的なタロットカード
- **78枚のフルデッキ**: 大アルカナ22枚 + 小アルカナ56枚（ワンド、カップ、ソード、ペンタクル各14枚）
- **正位置・逆位置対応**: カードの向きもランダムに決定され、より深い解釈が可能

### 🔮 ホロスコープ・スプレッド
- **12ハウス展開**: 占星術の12ハウスに対応した配置で、人生の各領域を網羅
- **円形レイアウト**: 美しい円形のホロスコープ配置でカードを表示

### 🎭 リアルな演出
- **占い師風シャッフル**: 前から5〜10枚を起点として10〜20枚を移動させる本格的なシャッフル（8〜20回）
- **カードオープン演出**: 裏向きで配置されたカードが順番にめくられる美しいアニメーション
- **神秘的なデザイン**: 深い紫と金色を基調とした高級感のあるUI

### 🤖 AI リーディング
- **Claude API統合**: 各ハウスごとに詳細で具体的なリーディングを自動生成
- **均一な品質**: 全てのハウスで同じ詳しさのリーディングを提供
- **3段階の解釈**: 基本的な意味、具体的な展開、アドバイスの3要素で構成

## 🚀 使い方

### セットアップ

1. このリポジトリをクローンまたはダウンロード:
```bash
git clone https://github.com/yourusername/tarot-reading.git
cd tarot-reading
```

2. `index.html`をブラウザで開く:
```bash
# シンプルに開く場合
open index.html

# または、ローカルサーバーを起動（推奨）
python -m http.server 8000
# ブラウザで http://localhost:8000 を開く
```

### AI リーディング機能を使う場合

AIによる自動リーディングを利用するには、Anthropic APIキーが必要です：

1. [Anthropic Console](https://console.anthropic.com/)でAPIキーを取得
2. `script.js`の該当部分でAPIキーを設定（**注意**: 本番環境ではバックエンドサーバーを使用してください）

```javascript
// script.js内のfetch部分
headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'YOUR_API_KEY_HERE', // ここにAPIキーを追加
}
```

**セキュリティ上の注意**: 
- APIキーをフロントエンドに直接含めることは推奨されません
- 本番環境では必ずバックエンドサーバーを経由してAPIを呼び出してください

## 📁 ファイル構成

```
tarot-reading/
├── index.html      # メインHTMLファイル
├── style.css       # スタイルシート
├── script.js       # JavaScriptロジック
└── README.md       # このファイル
```

## 🎯 機能詳細

### タロットカードの種類

#### 大アルカナ（22枚）
愚者、魔術師、女教皇、女帝、皇帝、教皇、恋人、戦車、力、隠者、運命の輪、正義、吊された男、死神、節制、悪魔、塔、星、月、太陽、審判、世界

#### 小アルカナ（56枚）
- **ワンド**: 情熱、行動、創造性を表す
- **カップ**: 感情、愛、人間関係を表す
- **ソード**: 思考、知性、葛藤を表す
- **ペンタクル**: 物質、金銭、実務を表す

### 12ハウスの意味

1. **第1ハウス**: 自己・個性
2. **第2ハウス**: 金銭・所有
3. **第3ハウス**: コミュニケーション
4. **第4ハウス**: 家庭・基盤
5. **第5ハウス**: 創造・恋愛
6. **第6ハウス**: 健康・労働
7. **第7ハウス**: パートナーシップ
8. **第8ハウス**: 変容・遺産
9. **第9ハウス**: 哲学・旅
10. **第10ハウス**: 社会的地位
11. **第11ハウス**: 友情・希望
12. **第12ハウス**: 潜在意識

## 🎨 カスタマイズ

### 色の変更
`style.css`のCSS変数を編集してカラースキームを変更できます：

```css
:root {
    --deep-purple: #1a0b2e;
    --mystic-purple: #2d1b4e;
    --gold: #d4af37;
    --light-gold: #f4e4b5;
    --silver: #c0c0c0;
}
```

### シャッフル回数の調整
`script.js`でシャッフルの挙動を変更できます：

```javascript
const shuffleCount = Math.floor(Math.random() * 13) + 8; // 8-20回
const startPos = Math.floor(Math.random() * 6) + 5; // 5-10枚
const chunkSize = Math.floor(Math.random() * 11) + 10; // 10-20枚
```

## 🔧 技術スタック

- **HTML5**: セマンティックなマークアップ
- **CSS3**: アニメーション、グラデーション、レスポンシブデザイン
- **Vanilla JavaScript**: フレームワーク不要のシンプルな実装
- **Claude API**: AI駆動のタロットリーディング生成

## 📱 対応環境

- モダンブラウザ（Chrome, Firefox, Safari, Edge）
- レスポンシブデザイン対応（デスクトップ、タブレット、モバイル）

## 🤝 貢献

プルリクエストを歓迎します！大きな変更の場合は、まずissueを開いて変更内容を議論してください。

## 📄 ライセンス

MIT License - 詳細は[LICENSE](LICENSE)ファイルを参照してください。

## 🙏 謝辞

- フォント: Google Fonts（Cinzel, Noto Serif JP）
- タロットカードの解釈: 伝統的なタロット占いの知識に基づく
- AI技術: Anthropic Claude API

## 📞 サポート

問題が発生した場合や質問がある場合は、[Issues](https://github.com/yourusername/tarot-reading/issues)ページで報告してください。

---

**注意事項**: このアプリケーションは娯楽目的で作成されています。タロット占いの結果は参考程度にお楽しみください。
