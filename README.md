# Chatspace DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|nickname|string|null: false|
### Asociation
- has_many :messages

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|message|text|bull :false 