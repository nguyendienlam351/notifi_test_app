# notifi_test_app

- Chọn method post sau đó nhập url :
```
https://fcm.googleapis.com/fcm/send
```
- Trong phần Header:
```
Authorization: key=<server_key>
Content-Type: application/json
```
- Trong phần Body > chọn raw > chọn JSON:
```
{
 "to" : "FCM device token",
 "notification" : {
     "body" : "nội dung thông báo",
     "title": "tiêu đề thông báo",
     "image": "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-camera-512.png"
 },
 "data" : {
     "body" : "nôi dung chi tiết",
     "title": "thông tin chi tiết",
     "key_1" : "giá trị key_1",
     "key_2" : "giá trị key_2"
 }
}
```
