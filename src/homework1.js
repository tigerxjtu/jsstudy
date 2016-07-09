'use strict';

/**
* practice Node.js Project
* @author tigerxjtu
**/
/*work 1*/
const count=5;
var lines=[];
var len=2*count-1;
for (var i=0; i<count; i++){
	var arr=new Array();
	var pads=count-i;
	for (var j=0;j<pads;j++){
		arr.push(' ');
	}
	for (var j=0;j<=i;j++){
		arr.push('*');
		if (j<i){
			arr.push(' ');
		}
	}
	for (var j=0;j<pads;j++){
		arr.push(' ');
	}
	lines.push(arr);
}
var output = lines.map(function(item){
	return item.join('');
});
output.forEach(function(item){
	console.log(item);
});

/*work 2*/
var input="hello world";
var words=input.split('');
var cnt_words=words.reduce(function(prev,next){
    prev[next] = (prev[next] + 1) || 1;
    return prev;
  },{});
var maxKey;
var maxOccurs;
for (var key in cnt_words){
	if (!maxKey){
		maxKey=key;
		maxOccurs=cnt_words[key];
	}else{
		if (cnt_words[key]>maxOccurs){
			maxKey=key;
			maxOccurs=cnt_words[key];
		}
	}
}
console.log('max occurs is:'+maxOccurs + ', letter is:'+maxKey);