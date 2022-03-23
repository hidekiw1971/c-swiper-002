# compornent（共通部品）

## 概要

- cdn swiper navigation slider
- swiper@8を使用

## 仕様

- スマホファースト
- rem 記述
- ルートフォントを vw で設定していることから PC サイズのレイアウトをタブレットで表示させることが出来ます（rem で書いた場合のみ）。
- xxx

## 注意事項
- swiper@7、swiper@8を使用する場合、reset.scssの`optimaizeSpeed`をコメントが必要です。
- `/* Set core body defaults */`
- `body {`
- `min-height: 100vh;`
- `// text-rendering: optimizeSpeed;` これをコメントしないとnavigationが表示されません。
- `line-height: 1.5;`
- `}`

## 使い方

- 「copy start」から「copy end」をコピペ。
- css: src -> module -> xxx をコピペ。

## イメージ画像

<img width="399" alt="image" src="https://user-images.githubusercontent.com/99580997/159725677-8b5ebe16-3bfe-493a-b49d-4889bf7d9180.png">
<img width="782" alt="image" src="https://user-images.githubusercontent.com/99580997/159725772-5c370441-f8d5-4855-b45f-c74b7726e000.png">
<img width="1092" alt="image" src="https://user-images.githubusercontent.com/99580997/159725841-c5e2c743-aa90-4e3e-9285-aa2db6b361e1.png">


## portfolio url:

https://c-0024.wtb.cfbx.jp/

## w3c htmlチェック
<img width="784" alt="image" src="https://user-images.githubusercontent.com/99580997/159727171-8b21834d-9e3d-43ea-8490-e6abcd8430a5.png">


## w3c cssチェック
<img width="1781" alt="image" src="https://user-images.githubusercontent.com/99580997/159727034-f20c1bb5-0ff1-44dc-9efd-ba68d8540d21.png">



## 参考にしたサイト

- swiper
- https://swiperjs.com/
- Swiper+CSS のみ！ズームアップしながらフェードインで切り替わるスライダーの実装方法
- https://wemo.tech/2961
- Swiper の設置の仕方（バージョン 7）ファイルのありかのメモが主な目的です。
- https://nakami.me/swiper7/

## 更新履歴

- 2022/3/15 初版 作成中

## 環境・使い方

- ダウンロードしたフォルダを開く。
- ターミナルを開き、 npm i とコマンドを入力する。
- node_modules と package-lock.json が生成されるのを確認する。
- 「 npx gulp 」とコマンドを入力すると動き出します。

## 備考
