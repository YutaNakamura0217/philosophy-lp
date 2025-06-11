# 親子哲学教室「ともに考える」LP - 詳細デザイン仕様書

## 1. 全体コンセプト・デザインポリシー

### デザインテーマ
- **未来志向×温かさ**: AI時代の先進性と親子の絆の温かさを両立
- **思考の視覚化**: 考える行為を色彩豊かなグラデーションで表現
- **親しみやすさ**: 哲学を身近に感じられる優しいトーン

### ブランドパーソナリティ
- 知的で信頼できる専門性
- 親しみやすく温かい人間性
- 革新的で未来志向
- 包容力のある安心感

## 2. カラーパレット

### メインカラー
```
プライマリーブルー: #2c5aa0
セカンダリーパープル: #764ba2
アクセントオレンジ: #ff6b6b
アクセントイエロー: #feca57
```

### グラデーション
```
ヒーローグラデーション: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
ソリューショングラデーション: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)
CTAグラデーション: linear-gradient(45deg, #ff6b6b, #feca57)
エキスパートグラデーション: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)
最終CTAグラデーション: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)
```

### ニュートラルカラー
```
テキストダーク: #333333
テキストミディアム: #666666
テキストライト: #999999
背景ライト: #f8f9fa
背景グレー: #f5f7fa
ホワイト: #ffffff
```

## 3. タイポグラフィ

### フォントファミリー
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

### フォントサイズ階層
```
H1 (メインタイトル): 48px (PC) / 32px (SP)
H2 (セクションタイトル): 40px (PC) / 32px (SP)
H3 (カードタイトル): 20px～24px
Body: 16px
Small: 14px
Caption: 12px
```

### フォントウェイト
```
Bold: 700 (メインタイトル、重要な見出し)
Semibold: 600 (サブタイトル、ナビゲーション)
Regular: 400 (本文テキスト)
```

## 4. レイアウトシステム

### グリッドシステム
```
最大幅: 1200px
コンテナ余白: 20px (PC) / 15px (SP)
セクション間余白: 80px (PC) / 60px (SP)
```

### ブレークポイント
```
XL: 1200px以上
L: 992px以上
M: 768px以上
S: 576px以上
XS: 575px以下
```

## 5. セクション別デザイン仕様

### 5.1 ヘッダー
```css
position: fixed
background: rgba(255, 255, 255, 0.95)
backdrop-filter: blur(10px)
height: 70px
box-shadow: 0 2px 20px rgba(0,0,0,0.1)
z-index: 1000
```

**ロゴ**
- フォントサイズ: 24px
- カラー: #2c5aa0
- アイコン: 🤔 (thinking emoji)

**ナビゲーション**
- フォントウェイト: 500
- ホバー効果: color transition 0.3s
- SP時は非表示（ハンバーガーメニュー推奨）

### 5.2 ヒーローセクション
```css
padding: 120px 0 80px (PC) / 100px 0 60px (SP)
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
color: white
text-align: center
position: relative
overflow: hidden
```

**アニメーション背景**
- ドットパターンが左から右に無限スクロール
- 透明度10%の白いドット
- animation: float 20s infinite linear

**メインタイトル**
- フォントサイズ: 48px (PC) / 32px (SP)
- フォントウェイト: 700
- text-shadow: 2px 2px 4px rgba(0,0,0,0.3)
- 改行: 「AI時代を生き抜く<br>「考える力」を親子で育む」

**CTAボタン**
```css
display: inline-block
background: linear-gradient(45deg, #ff6b6b, #feca57)
padding: 15px 40px
border-radius: 50px
font-weight: bold
font-size: 18px
margin: 10px
box-shadow: 0 4px 15px rgba(0,0,0,0.2)
transition: all 0.3s
```

ホバー効果:
```css
transform: translateY(-3px)
box-shadow: 0 6px 20px rgba(0,0,0,0.3)
```

### 5.3 問題提起セクション
```css
padding: 80px 0
background: white
```

**カードデザイン**
```css
background: #f8f9fa
padding: 30px
border-radius: 15px
text-align: center
box-shadow: 0 5px 15px rgba(0,0,0,0.1)
transition: transform 0.3s
```

ホバー効果:
```css
transform: translateY(-5px)
```

**アイコン**
- フォントサイズ: 48px
- 感情を表現する絵文字使用（😰, 🤖, 💭）

### 5.4 ソリューションセクション
```css
padding: 80px 0
background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)
color: white
```

**カードデザイン**
```css
background: rgba(255, 255, 255, 0.1)
padding: 30px
border-radius: 15px
backdrop-filter: blur(10px)
border: 1px solid rgba(255, 255, 255, 0.2)
```

### 5.5 特徴セクション（3つの特徴）
```css
padding: 80px 0
background: white
```

**フィーチャーカード**
```css
padding: 40px
border-radius: 20px
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
color: white
position: relative
overflow: hidden
```

**アニメーション効果**
- カード右上に半透明の円形要素
- ホバー時に位置が変化
- transition: all 0.3s

**番号表示**
```css
font-size: 48px
font-weight: bold
opacity: 0.3
margin-bottom: 10px
```

### 5.6 実績・声セクション
```css
padding: 80px 0
background: #f8f9fa
```

**テスティモニアルカード**
```css
background: white
padding: 30px
border-radius: 15px
box-shadow: 0 5px 15px rgba(0,0,0,0.1)
position: relative
```

**引用符デザイン**
```css
content: '"'
font-size: 64px
color: #2c5aa0
position: absolute
top: -10px
left: 20px
opacity: 0.3
```

### 5.7 専門性セクション
```css
padding: 80px 0
background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)
color: white
text-align: center
```

**バッジデザイン**
```css
background: rgba(255, 255, 255, 0.2)
padding: 15px 25px
border-radius: 50px
backdrop-filter: blur(10px)
border: 1px solid rgba(255, 255, 255, 0.3)
margin: 0 15px 15px 0
display: inline-block
```

### 5.8 料金セクション
```css
padding: 80px 0
background: white
```

**プライシングカード**
```css
background: #f8f9fa
padding: 40px
border-radius: 20px
text-align: center
box-shadow: 0 5px 15px rgba(0,0,0,0.1)
transition: transform 0.3s
```

**フィーチャードカード（中央）**
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
color: white
transform: scale(1.05)
```

**価格表示**
```css
font-size: 40px
font-weight: bold
margin: 20px 0
color: #2c5aa0
```

### 5.9 最終CTAセクション
```css
padding: 80px 0
background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)
text-align: center
color: white
```

**緊急性ボックス**
```css
background: rgba(255, 255, 255, 0.2)
padding: 20px
border-radius: 10px
margin: 30px 0
backdrop-filter: blur(10px)
```

### 5.10 フッター
```css
background: #2c3e50
color: white
padding: 40px 0
```

**リンクスタイル**
```css
color: #ecf0f1
text-decoration: none
transition: color 0.3s
```

ホバー効果:
```css
color: #3498db
```

## 6. モーダルデザイン

### オーバーレイ
```css
background-color: rgba(0,0,0,0.5)
backdrop-filter: blur(5px)
```

### モーダルコンテンツ
```css
background-color: white
margin: 5% auto
padding: 40px
border-radius: 20px
width: 90%
max-width: 600px
max-height: 90vh
overflow-y: auto
```

### フォーム要素
```css
input, textarea, select:
  padding: 12px
  border: 2px solid #ddd
  border-radius: 8px
  font-size: 16px
  transition: border-color 0.3s

focus状態:
  border-color: #2c5aa0
```

### 送信ボタン
```css
background: linear-gradient(45deg, #ff6b6b, #feca57)
color: white
padding: 15px 30px
border: none
border-radius: 8px
font-size: 16px
font-weight: bold
width: 100%
transition: all 0.3s
```

## 7. アニメーション仕様

### フェードインアニメーション
```css
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### トリガー条件
- Intersection Observer使用
- threshold: 0.1
- rootMargin: '0px 0px -50px 0px'

### ホバーアニメーション
- カード: translateY(-5px) / translateY(-10px)
- ボタン: translateY(-2px) ～ translateY(-3px)
- transition時間: 0.3s

### ローディング状態
- ボタン: スピナー表示
- フォーム送信時: disabled状態

## 8. レスポンシブデザイン

### PC (768px以上)
- 3カラムグリッド使用
- ホバー効果有効
- フルナビゲーション表示

### タブレット (768px～1024px)
- 2カラムグリッド
- タッチフレンドリーなボタンサイズ

### スマートフォン (767px以下)
- 1カラムレイアウト
- ナビゲーション: ハンバーガーメニュー
- フォントサイズ縮小
- 余白調整

### 画像最適化
- PC: 高解像度版
- SP: 軽量版
- WebP対応
- lazy loading実装

## 9. アクセシビリティ

### キーボードナビゲーション
- Tab順序の論理的設定
- focus状態の視覚的表示
- skip link提供

### カラーコントラスト
- WCAG AA準拠
- 最小コントラスト比4.5:1

### セマンティックHTML
- 適切な見出し階層
- alt属性設定
- role属性使用

## 10. パフォーマンス

### 最適化項目
- CSS/JS minify
- 画像圧縮
- critical CSS inline化
- font-display: swap

### 目標値
- Lighthouse Score 90+
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1

## 11. 実装優先度

### Phase 1（必須）
1. ヘッダー・ナビゲーション
2. ヒーローセクション
3. 問題提起セクション
4. ソリューションセクション
5. CTAボタン・モーダル

### Phase 2（重要）
6. 特徴セクション
7. 料金セクション
8. 最終CTA
9. フッター

### Phase 3（拡張）
10. 実績・声セクション
11. 専門性セクション
12. アニメーション強化
13. マイクロインタラクション

## 12. 技術要件

### 必須ライブラリ
- Intersection Observer (フェードイン)
- CSS Grid / Flexbox (レイアウト)

### 推奨ライブラリ
- AOS (Animate On Scroll)
- Lottie (高度なアニメーション)
- GSAP (複雑なタイムライン）

### ブラウザサポート
- Chrome (最新2バージョン)
- Safari (最新2バージョン)
- Firefox (最新2バージョン)
- Edge (最新2バージョン)