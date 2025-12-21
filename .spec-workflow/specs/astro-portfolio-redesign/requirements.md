# Astro Portfolio Redesign - Requirements

## 概要

現在のNext.js製ポートフォリオサイトをAstroで完全に書き直し、デザインを大幅にリニューアルする。

## 背景

- 現在のサイトはNext.js 15 + React 19で構築されている
- Developer/Designerのデュアルモード切り替え機能がある
- 英語/日本語の国際化対応済み
- shadcn/ui + Tailwind CSS + Framer Motionを使用

## 目標

1. **技術スタックの刷新**: Next.js → Astro への移行
2. **デザインリニューアル**: クリエイティブ・アーティスティックな新デザイン
3. **アニメーション強化**: GSAPとThree.jsによるインタラクティブな体験
4. **パフォーマンス向上**: Astroのアイランドアーキテクチャによる最適化

## 機能要件

### FR-001: ポートフォリオモードの統合
- **説明**: 現在のDeveloper/Designerモードを1つのポートフォリオに統合
- **詳細**:
  - 開発スキルとデザインスキルの両方を1つのサイトで表現
  - モード切り替えUIは廃止
  - セクション単位でDeveloper/Designerの要素を適切に配置

### FR-002: 国際化（i18n）
- **説明**: 英語/日本語の2言語対応を維持
- **詳細**:
  - Astro組み込みのi18n機能を使用
  - 日本語テキストのブラッシュアップ（より自然な表現に）
  - 言語切り替えUIの改善
  - URLベースのロケール管理（`/en/`, `/ja/`）

### FR-003: 3Dビジュアル要素
- **説明**: Three.jsを使用した3D要素の導入
- **詳細**:
  - ヒーローセクションに3Dオブジェクト
  - インタラクティブなマウス追従効果
  - パフォーマンスを考慮したロード戦略

### FR-004: GSAPアニメーション
- **説明**: GSAPによる高度なアニメーション実装
- **詳細**:
  - ScrollTriggerによるスクロール連動アニメーション
  - ページ遷移アニメーション（View Transitions API連携）
  - マイクロインタラクション
  - テキストアニメーション（SplitTextなど）

### FR-005: プロジェクト詳細ページ
- **説明**: 各プロジェクトの詳細ページ
- **詳細**:
  - ケーススタディ形式
  - 画像ギャラリー
  - 技術スタック表示
  - 課題・解決策・成果の構造

### FR-006: スキルセクション
- **説明**: 技術スキルの視覚的な表示
- **詳細**:
  - Developer スキル（Frontend, Backend, Tools）
  - Designer スキル（UI/UX, Graphic, Tools）
  - インタラクティブな表示方法

### FR-007: コンタクトセクション
- **説明**: お問い合わせ機能
- **詳細**:
  - SNSリンク
  - メールリンク
  - コンタクトフォーム（オプション）

### FR-008: ダークモード
- **説明**: ライト/ダークテーマ対応
- **詳細**:
  - システム設定連動
  - 手動切り替え
  - テーマ永続化

## 非機能要件

### NFR-001: パフォーマンス
- Lighthouse Performance スコア 90以上
- Core Web Vitals 基準クリア
- 3D要素の遅延ロード

### NFR-002: アクセシビリティ
- WAI-ARIA準拠
- キーボードナビゲーション対応
- スクリーンリーダー対応
- prefers-reduced-motion 対応

### NFR-003: SEO
- メタタグ最適化
- 構造化データ（JSON-LD）
- サイトマップ生成
- OGP画像対応

### NFR-004: デプロイ
- 静的サイト生成（SSG）
- AWS S3 + CloudFrontへのデプロイ継続
- または Vercel/Netlify への移行検討

## 技術スタック

### フレームワーク
- **Astro** (v5.x): メインフレームワーク
- **Reactは使用しない**: Astroコンポーネントのみ

### スタイリング
- **Tailwind CSS**: ユーティリティファースト
- **CSS Variables**: テーマ管理

### アニメーション
- **GSAP**: 高度なアニメーション
  - ScrollTrigger: スクロール連動
  - SplitText: テキストアニメーション
- **View Transitions API**: ページ遷移

### 3D
- **Three.js**: 3Dグラフィックス
- **vanilla-three**: Astroとの統合

### その他
- **TypeScript**: 型安全性
- **Prettier**: コードフォーマット
- **ESLint**: リンティング

## 制約事項

1. **Reactは使用しない**: Astroネイティブコンポーネントのみ
2. **静的サイト生成**: SSR/SSGは静的出力のみ
3. **既存のAWSインフラ活用**: デプロイ先は変更可能だが既存も選択肢

## 成功基準

1. 全ページがAstroで正常に動作
2. GSAPアニメーションがスムーズに動作
3. Three.js 3D要素が正常に表示
4. 両言語で全コンテンツが表示可能
5. Lighthouse各スコア90以上
6. モバイル対応完了

## ステークホルダー

- **プロジェクトオーナー**: Muneyasu Kagawa
- **対象ユーザー**: 採用担当者、クライアント、同業者

## 参考リンク

- [Astro Documentation](https://docs.astro.build/)
- [GSAP Documentation](https://gsap.com/docs/v3/)
- [Three.js Documentation](https://threejs.org/docs/)
