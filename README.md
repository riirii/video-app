# アプリケーション名
## Transcribe


# アプリケーション概要
- ビデオ通話機能：通話内容をテキスト化して保存することができます
- チャット機能：１対１から複数人でのグループチャットもできます
- 辞書機能：よく使用する言葉・対応などを登録し、全員で共有することができます


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
- システム障害の復旧対応など、迅速に社内外とのやりとりが発生する企業を対象として作成。通話後すぐに通話内容をテキスト化し、チャットにてデータを送付することで、迅速な対応の実現を目的としている。
また、登録型の辞書機能により、業務によく使われる単語や対応を、ユーザー自身で登録および検索できるようにすることで、業務効率化に繋げることができる。


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