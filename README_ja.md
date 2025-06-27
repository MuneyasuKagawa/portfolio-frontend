# Munのポートフォリオ

開発とデザインの両方のスキルを紹介するモダンでレスポンシブなポートフォリオサイト。Next.js 15で構築し、AWSにデプロイしています。

🌐 **公開サイト:** [mun-k.com](https://mun-k.com)

📖 **English Version:** [README.md](./README.md)

## ✨ 特徴

### デュアルポートフォリオモード

- **開発者モード**: フロントエンド/フルスタック開発プロジェクトと技術スキルを紹介
- **デザイナーモード**: UI/UXデザインワークとケーススタディをハイライト
- Framer Motionアニメーションによるスムーズなモード遷移

### モダンな技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **スタイリング**: Tailwind CSS + shadcn/uiコンポーネント
- **アニメーション**: Framer Motionによるスムーズなインタラクション
- **状態管理**: JotaiとlocalStorage永続化
- **国際化**: カスタムi18nシステム（英語/日本語）
- **テーマ**: next-themesによるダーク/ライトモード対応

### パフォーマンス＆デプロイ

- 最適化された静的サイト生成
- AWS S3 + CloudFrontデプロイ
- TerraformによるInfrastructure as Code
- 自動化されたデプロイパイプライン

## 📜 利用可能なスクリプト

```bash
# 開発サーバーを起動
npm run dev

# プロダクション用ビルド（/outディレクトリに静的エクスポート）
npm run build

# プロダクションサーバーを起動（ビルド後）
npm run start

# Prettierでコード整形（Tailwind CSSクラスソート含む）
npm run format

# ESLintでコードをリント
npm run lint

# AWSにデプロイ（ビルド、S3アップロード、CloudFront無効化）
# .envにCLOUDFRONT_DISTRIBUTION_IDが必要
npm run deploy

# CloudFrontキャッシュのみ無効化
npm run disable-cache
```

## 🏗️ プロジェクト構造

```
portfolio-frontend/
├── app/                    # Next.js App Routerページ
│   ├── projects/[slug]/   # 動的プロジェクト詳細ページ
│   └── page.tsx           # ホームページ
├── components/            # Reactコンポーネント
│   ├── ui/               # shadcn/uiコンポーネントライブラリ（40+コンポーネント）
│   ├── developer/        # 開発者モード専用コンポーネント
│   ├── designer/         # デザイナーモード専用コンポーネント
│   └── ...               # 共通コンポーネント
├── lib/                  # ユーティリティ関数と設定
│   ├── atoms.ts          # Jotaiステートatom
│   ├── use-portfolio-mode.ts  # ポートフォリオモードフック
│   └── use-translation.ts     # i18nフック
├── locales/              # 翻訳ファイル
│   ├── en.json          # 英語翻訳
│   └── ja.json          # 日本語翻訳
├── public/               # 静的アセット
├── terraform/            # Infrastructure as Code
└── out/                  # 静的エクスポート出力（生成）
```

## 🎨 主要機能の詳細

### ポートフォリオモードシステム

開発者とデザイナーのポートフォリオを切り替えられるユニークなデュアルモードシステム：

- **状態管理**: `portfolioModeAtom`を使用したJotai
- **URL連携**: `?want=developer|designer`クエリパラメータ対応
- **スムーズな遷移**: Framer Motionアニメーション
- **設定の永続化**: localStorage に設定を保存

### 多言語化

英語と日本語をサポートするカスタムi18n実装：

- **翻訳フック**: ドット記法キーアクセスの`useTranslation()`
- **言語状態**: `languageAtom`を使用したJotai管理
- **クライアントサイド永続化**: localStorageに言語設定を保存
- **動的コンテンツ**: すべてのUIテキストとコンテンツをローカライズ

### コンポーネントアーキテクチャ

- **サーバーコンポーネント**: パフォーマンス最適化のためデフォルト使用
- **クライアントコンポーネント**: インタラクションが必要な場合のみ使用
- **shadcn/ui統合**: 一貫したデザインのための40+UIコンポーネント
- **レスポンシブデザイン**: Tailwindブレークポイントによるモバイルファースト

## 🚀 デプロイ

### AWSインフラストラクチャ

サイトはAWSサービスを使用してデプロイ：

- **S3**: 静的ウェブサイトホスティング
- **CloudFront**: グローバルコンテンツ配信CDN
- **Route53**: DNS管理
- **ACM**: SSL証明書管理

### デプロイプロセス

1. **AWS認証情報を設定**

   ```bash
   export AWS_ACCESS_KEY_ID="your-access-key"
   export AWS_SECRET_ACCESS_KEY="your-secret-key"
   ```

2. **Terraformを設定**

   ```bash
   cd terraform
   cp terraform.tfvars.sample terraform.tfvars
   # terraform.tfvarsを編集して設定
   terraform init
   terraform plan
   terraform apply
   ```

3. **サイトをデプロイ**
   ```bash
   npm run deploy
   ```

## 🛠️ 開発

### コードスタイル

- **TypeScript**: 包括的な型チェックを有効にしたストリクトモード
- **ESLint**: Next.js推奨ルールによるコードリント
- **Prettier**: Tailwind CSSクラスソートを含むコード整形
- **パスエイリアス**: クリーンなインポートのための`@/*`マッピング

### テーマシステム

- **CSS変数**: テーマ用カスタムプロパティ
- **ダーク/ライトモード**: 自動システム設定検出
- **テーマトグル**: ユーザー設定オーバーライド
- **一貫したスタイリング**: コンポーネント全体でTailwindデザイントークン

## 📝 ライセンス

このプロジェクトはMITライセンスの下でライセンスされています - 詳細は[LICENSE](LICENSE)ファイルをご覧ください。

## 📧 連絡先

**香川 宗靖（Muneyasu Kagawa）**

- ウェブサイト: [mun-k.com](https://mun-k.com)
- メール: muneyasu.kagawa@gmail.com
- LinkedIn: [muneyasu-kagawa](https://www.linkedin.com/in/muneyasu-kagawa/)
- Twitter: [@m*kagawa*](https://twitter.com/m_kagawa_)

---

⭐ このプロジェクトが役に立ったら、スターをつけていただけると嬉しいです！
