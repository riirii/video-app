# アプリケーション名
## Transcribe


# アプリケーション概要
- ビデオ通話機能：通話内容をテキスト化して保存することができます
- チャット機能：１対１から複数人でのグループチャットもできます
- メモ機能：好きな内容をメモして保存しておけます

# URL
- https://video-app-29850.herokuapp.com/


# テスト用アカウント
- email:
- password: 
## Basic認証
- id:
- password:

# 利用方法
- 完成次第記述予定

# 目指した課題解決
- 主に企業においての電話業務にて、通話内容をすぐにテキスト化して保存することで、通話内容を基にした作業を簡易にするために作成

# 要件定義
- 後ほどスプレッドシートのURL記述


# 実装した機能についてのGIFと説明	
- 完成後記述予定

# 実装予定の機能
- グループチャット機能
- ビデオ通話機能

# テーブル設計

## users テーブル

| Column   | Type   | Options     |
| -------- | ------ | ----------- |
| name     | string | null: false |
| email    | string | null: false |
| password | string | null: false |

### Association

- has_many :group_users
- has_many :groups, through: group_users
- has_many :messages

## groups テーブル

| Column | Type   | Options     |
| ------ | ------ | ----------- |
| name   | string | null: false |

### Association

- has_many :group_users
- has_many :users, through: group_users
- has_many :messages

## group_users テーブル

| Column | Type       | Options                        |
| ------ | ---------- | ------------------------------ |
| user   | references | null: false, foreign_key: true |
| group  | references | null: false, foreign_key: true |

### Association

- belongs_to :user
- belongs_to :group

## messages テーブル

| Column  | Type       | Options                        |
| ------- | ---------- | ------------------------------ |
| content | text       |                                |
| image   | text       |                                |
| user    | references | null: false, foreign_key: true |
| group   | references | null: false, foreign_key: true |

### Association

- belongs_to :user
- belongs_to :group

# ローカルでの動作方法
1. $ git clone https://github.com/riirii/video-app.git
2. $ cd video-app
3. $ bundle install
4. $ rails db:create
5. $ rails db:migrate
6. $ rails s
👉 http://localhost:3000