const pdf = require('pdfkit');
const fs = require('fs');


var doc = new pdf;
var test = '哲割好棒棒'
doc.font('./NotoSansCJKtc-Medium.otf')
.fontSize(30)
 .text(`NodeJS PDF ${test}`)
 .moveDown(0.5)

 doc.font('Times-Roman')
  .text('NodeJS PDF Document')
  .moveDown(0.5)

doc.font('Times-Roman')
     .fontSize(18)
     .text('NodeJS PDF Document')


doc.end()
doc.pipe(fs.createWriteStream('node.pdf'));
