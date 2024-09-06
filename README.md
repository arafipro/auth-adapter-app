# 【Auth.js/NextAuth】NextAuth v5のadapter機能を追加して登録ユーザーをデータベースで管理する

## YouTube

[!["【Auth.js/NextAuth】NextAuth v5のadapter機能を追加して登録ユーザーをデータベースで管理する"](https://i.ytimg.com/vi/Jzkt_FVBdwA/maxresdefault.jpg)](https://youtu.be/Jzkt_FVBdwA)

## 技術選定

- TypeScript
- Next.js
- Tailwind CSS
- shadcn/ui
- Auth.js(NextAuth.js) v5
- drizzle
- Cloudflare D1
- Cloudflare Pages

## 初期設定

### NodeModule をインストール

```bash
bun install
```

### 環境変数を設定

ファイル`.env.local.sample`を`.env.local`に変更して、各環境変数を指定する

```sh:.env.local
AUTH_SECRET=

AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=

AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
```

### データベースを作成

```bash
npx wrangler d1 create next-auth-db
```

### wrangler.toml に追記

```toml
[[d1_databases]]
binding = "DB"
database_name = "next-auth-db"
database_id = "<unique-ID-for-your-database>"
```

`<unique-ID-for-your-database>`はデータベースを作成したときに出力されるID

### テーブルのスキーマを作成

```bash
npx drizzle-kit generate
```

### ローカルデータベースにテーブルを作成

```bash
npx wrangler d1 migrations apply next-auth-db --local
```

### リモートデータベースにテーブルを作成

```bash
npx wrangler d1 migrations apply next-auth-db --remote
```
