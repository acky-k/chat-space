# Chatspace DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|nickname|string|null: false|
### Asociation
- has_many :messages
- has_many :groups, through: :groups_users
- has_many groups_users

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
|groupname|string|null: false|
### Asociation
- has_many :messages
- has_many :users, through: :groups_users 
- has_many :groups_users

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Asociation
- belongs_to :user
- belongs_to :group

