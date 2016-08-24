

var reg3 = /(?:([A-Za-z]+):)+/;
console.log(reg3.exec('http:xxx:'));//结果是什么呢？

var reg4 = /^(?:([A-Za-z]+):)?/;
console.log(reg4.exec('http:xxx:'));//结果是什么呢？