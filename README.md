# Chatspace DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|nickname|string|null: false|
### Asociation
- has_many :messages
- has_many :group

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|null :false|
|image|string|
|user_id|string|null: false, foreign_key: true|
### Asociation
- belongs_to :users
- has_many :group

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|groupname|string|null: false|
|user_id|integer|null: false, foreign_key: true|
|message_id|integer|null: false, foreign_key: true|
### Asociation
- has_many :users
- has_,any :messages

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Asociation
- belongs_to :user
- belongs_to :group

