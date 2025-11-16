# Ionic Angular テストプロジェクト

このプロジェクトは、Ionicコンポーネントをテストするために作成されたIonic + Angularのサンプルアプリケーションです。

## 含まれるコンポーネント

- Buttons（ボタン）
- Cards（カード）
- Lists（リスト）
- Inputs（入力フィールド）
- Toggle & Checkbox（トグル＆チェックボックス）
- Chips（チップ）
- Badges（バッジ）
- その他カスタムコンポーネント

## 必要な環境

- **Node.js**: v14以上（推奨: v18以上）
- **npm**: v6以上
- **Ionic CLI**: v7以上
- **Xcode**: iOS開発の場合（macOSのみ）
- **Android Studio**: Android開発の場合

## 初期セットアップ

### 1. リポジトリをクローン

```bash
git clone <repository-url>
cd "ionic　テスト"
```

### 2. 依存関係をインストール

```bash
npm install
```

### 3. Ionic CLIをインストール（まだの場合）

```bash
npm install -g @ionic/cli
```

## 開発サーバーの起動

### Webブラウザで実行

```bash
ionic serve
```

ブラウザが自動的に開き、`http://localhost:8101` でアプリが表示されます。

### ポート指定で起動

```bash
ionic serve --port=8100
```

### ブラウザを自動で開かない

```bash
ionic serve --no-open
```

## モバイルプラットフォームでの実行

### iOS（macOSのみ）

#### 1. プロジェクトをビルド

```bash
ionic build
```

#### 2. iOSプラットフォームを追加（初回のみ）

```bash
ionic capacitor add ios
```

#### 3. プロジェクトを同期

```bash
ionic capacitor sync ios
```

#### 4. Xcodeで開く

```bash
ionic capacitor open ios
```

Xcodeが開いたら：
1. 上部のツールバーでシミュレーターを選択（例: iPhone 15 Pro）
2. 再生ボタン（▶️）をクリックするか、`Cmd + R` を押す

### Android

#### 1. プロジェクトをビルド

```bash
ionic build
```

#### 2. Androidプラットフォームを追加（初回のみ）

```bash
ionic capacitor add android
```

#### 3. プロジェクトを同期

```bash
ionic capacitor sync android
```

#### 4. Android Studioで開く

```bash
ionic capacitor open android
```

Android Studioが開いたら、エミュレーターを選択して実行ボタンをクリックします。

## プロジェクト構成

```
ionic　テスト/
├── src/
│   ├── app/
│   │   ├── home/
│   │   │   ├── home.page.html      # メインページのHTML
│   │   │   ├── home.page.scss      # メインページのスタイル
│   │   │   ├── home.page.ts        # メインページのロジック
│   │   │   └── home.module.ts      # メインページのモジュール
│   │   └── ...
│   ├── assets/                      # 静的ファイル
│   ├── theme/                       # グローバルスタイル
│   └── index.html                   # エントリーポイント
├── ios/                             # iOSプロジェクト（生成後）
├── android/                         # Androidプロジェクト（生成後）
├── capacitor.config.ts              # Capacitor設定
├── angular.json                     # Angular設定
├── ionic.config.json                # Ionic設定
└── package.json                     # 依存関係
```

## よく使うコマンド

### 開発

```bash
# 開発サーバー起動
ionic serve

# ビルド
ionic build

# リント
ng lint

# テスト実行
ng test
```

### Capacitor

```bash
# プラットフォーム追加
ionic capacitor add ios
ionic capacitor add android

# プロジェクト同期
ionic capacitor sync

# ネイティブIDEで開く
ionic capacitor open ios
ionic capacitor open android

# プラットフォーム削除
ionic capacitor remove ios
ionic capacitor remove android
```

### その他

```bash
# Ionic CLIのバージョン確認
ionic --version

# プロジェクト情報表示
ionic info

# Ionic CLIのヘルプ
ionic --help
```

## トラブルシューティング

### `ionic: command not found`

Ionic CLIがインストールされていません。以下のコマンドでインストールしてください：

```bash
npm install -g @ionic/cli
```

### `capacitor sync` でエラーが出る

1. プロジェクトを再ビルド：
   ```bash
   ionic build
   ```

2. node_modulesを再インストール：
   ```bash
   rm -rf node_modules
   npm install
   ```

### iOSビルドエラー

1. CocoaPodsをインストール（macOSのみ）：
   ```bash
   sudo gem install cocoapods
   ```

2. Podsをインストール：
   ```bash
   cd ios/App
   pod install
   ```

### ポートが既に使用されている

別のポートを指定して起動：
```bash
ionic serve --port=8200
```

## 使用技術

- **Ionic Framework**: v7.x
- **Angular**: v17.x
- **Capacitor**: v7.x
- **TypeScript**: v5.x
- **Node.js**: v24.x
- **npm**: v11.x

## ライセンス

このプロジェクトはテスト目的で作成されています。

## 参考リンク

- [Ionic Documentation](https://ionicframework.com/docs)
- [Angular Documentation](https://angular.dev)
- [Capacitor Documentation](https://capacitorjs.com/docs)
