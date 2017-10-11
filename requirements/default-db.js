
use musicvideoconnector;

db.createUser(
   {
     user: "admin",
     pwd: "aBcD1234",
     roles: [ "readWrite", "dbAdmin" ]
   }
)

db.createCollection('users');
db.createCollection('video');

db.users.insertMany(
    [
        { 
            "_id" : ObjectId("59d6621198188f7d1407e47e"), 
            "id" : "U1", 
            "account" : "Admin", 
            "password" : "123456", 
            "fbId" : null, 
            "ggId" : null, 
            "name" : "ADMIN", 
            "email" : "13520225@gm.uit.edu.vn", 
            "phone" : "01246461515", 
            "address" : "Hồ Chí Minh", 
            "avatar" : "U1.png", 
            "type" : "T1001", 
            "createdDay" : ISODate("2017-03-14T00:00:00.000+0000"), 
            "status" : 2.0, 
            "ability" : "Đàn Guitar, hát", 
            "gender" : "Male", 
            "birthday" : ISODate("1994-10-10T00:00:00.000+0000"), 
            "description" : "Ahihi", 
            "options" : {
                "showEmail" : 2.0, 
                "showPhone" : 2.0, 
                "showAddress" : 2.0, 
                "showBirthDay" : 2.0
            }
        },
        { 
            "_id" : ObjectId("59d6631298188f7d1407e47f"), 
            "id" : "U2", 
            "account" : "User1", 
            "password" : "123456", 
            "fbId" : null, 
            "ggId" : null, 
            "name" : "Thịnh", 
            "email" : "hihithinh@gmail.com", 
            "phone" : "0995829413", 
            "address" : "Hồ Chí Minh", 
            "avatar" : "default.png", 
            "type" : "T1002", 
            "createdDay" : ISODate("2017-03-14T00:00:00.000+0000"), 
            "status" : 2.0, 
            "ability" : "Hát", 
            "gender" : "Male", 
            "birthday" : ISODate("1994-10-24T00:00:00.000+0000"), 
            "description" : "Ahihi", 
            "options" : {
                "showEmail" : 2.0, 
                "showPhone" : 2.0, 
                "showAddress" : 2.0, 
                "showBirthDay" : 2.0
            }
        },
        { 
            "_id" : ObjectId("59d6640698188f7d1407e480"), 
            "id" : "U3", 
            "account" : "User2", 
            "password" : "123456", 
            "fbId" : null, 
            "ggId" : null, 
            "name" : "sasdads", 
            "email" : null, 
            "phone" : null, 
            "address" : null, 
            "avatar" : "default.png", 
            "type" : "T1002", 
            "createdDay" : ISODate("2017-03-14T00:00:00.000+0000"), 
            "status" : 1.0, 
            "ability" : null, 
            "gender" : null, 
            "birthday" : ISODate("1994-10-24T00:00:00.000+0000"), 
            "description" : null, 
            "options" : {
                "showEmail" : 2.0, 
                "showPhone" : 2.0, 
                "showAddress" : 2.0, 
                "showBirthDay" : 2.0
            }
        }
    ]
);

db.video.insertMany(
    [
        { 
            "_id" : ObjectId("59d667a898188f7d1407e481"), 
            "id" : "V1", 
            "userId" : "U1", 
            "youtubeUrl" : "pUP3OIfI_bE", 
            "type" : "T3002", 
            "description" : "Sầu lệ đá, frag1", 
            "status" : 1.0, 
            "createdDay" : ISODate("2017-03-14T21:06:06.000+0000"), 
            "options" : {
                "showPublic" : 2.0
            }
        },
        { 
            "_id" : ObjectId("59d668e78eec5028d4ba4706"), 
            "id" : "V2", 
            "userId" : "U1", 
            "youtubeUrl" : "P1ZqU48TJag", 
            "type" : "T3001", 
            "description" : "Sầu lệ đá, frag2", 
            "status" : 1.0, 
            "createdDay" : ISODate("2017-03-14T21:07:06.000+0000"), 
            "options" : {
                "showPublic" : 2.0
            }
        },
        { 
            "_id" : ObjectId("59d669118eec5028d4ba4707"), 
            "id" : "V3", 
            "userId" : "U1", 
            "youtubeUrl" : "TxLDUeHj_ZU", 
            "type" : "T3001", 
            "description" : "Sầu lệ đá, frag3", 
            "status" : 1.0, 
            "createdDay" : ISODate("2017-03-14T21:08:06.000+0000"), 
            "options" : {
                "showPublic" : 2.0
            }
        },
        { 
            "_id" : ObjectId("59d669288eec5028d4ba4708"), 
            "id" : "V4", 
            "userId" : "U1", 
            "youtubeUrl" : "l7wNZSXPsLY", 
            "type" : "T3002", 
            "description" : "Sầu lệ đá, frag4", 
            "status" : 1.0, 
            "createdDay" : ISODate("2017-03-14T21:09:06.000+0000"), 
            "options" : {
                "showPublic" : 2.0
            }
        },
        { 
            "_id" : ObjectId("59d669d78eec5028d4ba4709"), 
            "id" : "V5", 
            "userId" : "U1", 
            "youtubeUrl" : "YuZ1H5BbMT4", 
            "type" : "T3999", 
            "description" : "Sầu lệ đá, combined", 
            "status" : 1.0, 
            "createdDay" : ISODate("2017-03-14T21:10:06.000+0000"), 
            "options" : {
                "showPublic" : 2.0
            }
        }
    ]
)


