const pdf = require('pdfkit');
const fs = require('fs');

var data = [
    {
        "_id": "59bbb0bc45c91e00d42d6760",
        "teamName": "NUU123",
        "title": "夢想EE123",
        "qualification": false,
        "registers": [
            {
                "email": "s2@yahoo.com.tw",
                "name": "s2",
                "_id": "59bbb0bc45c91e00d42d6763"
            },
            {
                "email": "s3@yahoo.com.tw",
                "name": "s3",
                "_id": "59bbb0bc45c91e00d42d6762"
            },
            {
                "email": "s4@yahoo.com.tw",
                "name": "s4",
                "_id": "59bbb0bc45c91e00d42d6761"
            }
        ],
        "leader": {
            "name": "student123",
            "email": "s1@yahoo.com.tw"
        },
        "teacher": {
            "name": "t1",
            "email": "t1@yahoo.com.tw"
        }
    },
    {
        "_id": "59bbb0c945c91e00d42d6765",
        "teamName": "CCC",
        "title": "夢想EE123",
        "qualification": false,
        "registers": [
            {
                "email": "s2@yahoo.com.tw",
                "name": "s2",
                "_id": "59bbb0c945c91e00d42d6768"
            },
            {
                "email": "s3@yahoo.com.tw",
                "name": "s3",
                "_id": "59bbb0c945c91e00d42d6767"
            },
            {
                "email": "s4@yahoo.com.tw",
                "name": "s4",
                "_id": "59bbb0c945c91e00d42d6766"
            }
        ],
        "leader": {
            "name": "student123",
            "email": "s1@yahoo.com.tw"
        },
        "teacher": {
            "name": "t1",
            "email": "t1@yahoo.com.tw"
        }
    },
    {
        "_id": "59bbb13dcee84f2d14858919",
        "teamName": "BBB",
        "title": "BB123",
        "qualification": false,
        "registers": [
            {
                "email": "s2@yahoo.com.tw",
                "name": "s2",
                "_id": "59bbb13dcee84f2d1485891c"
            },
            {
                "email": "s3@yahoo.com.tw",
                "name": "s3",
                "_id": "59bbb13dcee84f2d1485891b"
            },
            {
                "email": "s4@yahoo.com.tw",
                "name": "s4",
                "_id": "59bbb13dcee84f2d1485891a"
            }
        ],
        "leader": {
            "name": "student123",
            "email": "s1@yahoo.com.tw"
        },
        "teacher": {
            "name": "t1",
            "email": "t1@yahoo.com.tw"
        }
    }
]

for(k=0;k<data.length;k++){
  var doc = new pdf;
  doc.pipe(fs.createWriteStream(`${data[k].teamName}.pdf`));
  doc.font('./NotoSansCJKtc-Medium.otf')
  .fontSize(24)
   .text(`隊伍名稱 ${data[k].teamName}`)
   .moveDown(0.5)

  doc.font('./NotoSansCJKtc-Medium.otf')
  .fontSize(18)
  .text(`隊伍標頭 ${data[k].title}`)
  .moveDown(0.5)

  doc.font('./NotoSansCJKtc-Medium.otf')
  .fontSize(16)
   .text(`指導老師名稱 ${data[k].teacher.name}`)
   .moveDown(0.5)

  doc.font('./NotoSansCJKtc-Medium.otf')
  .fontSize(16)
  .text(`指導老師信箱 ${data[k].teacher.email}`)
  .moveDown(0.5)

  doc.font('./NotoSansCJKtc-Medium.otf')
  .fontSize(16)
  .text(`隊長名稱 ${data[k].leader.name}`)
  .moveDown(0.5)

  doc.font('./NotoSansCJKtc-Medium.otf')
  .fontSize(16)
  .text(`隊長信箱 ${data[k].leader.email}`)
  .moveDown(0.5)
  for(i=0;i<data[k].registers.length;i++)
   {

     doc.font('./NotoSansCJKtc-Medium.otf')
    .fontSize(14)
    .text(`隊員名稱 ${data[k].registers[i].name}`)
    .moveDown(0.5)

     doc.font('./NotoSansCJKtc-Medium.otf')
    .fontSize(14)
    .text(`隊員信箱 ${data[k].registers[i].email}`)
    .moveDown(0.5)
  }


doc.end()
}
