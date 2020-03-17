# Chatspace DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|
### Asociation
- has_many :messages
- has_many :groups, through: :group_users
- has_many :groups_users

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|null :false|
|image|string|
|user_id|string|null: false, foreign_key: true|
|group_id|string|null: false, foreign_key: true|
### Asociation
- belongs_to :users
- belongs_to :group

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group|string|null: false|
### Asociation
- has_many :messages
- has_many :users, through: :group_users 
- has_many :groups_users

## group_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Asociation
- belongs_to :user
- belongs_to :group

