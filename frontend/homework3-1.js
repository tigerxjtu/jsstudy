//方法1
/*var getSingle = function(fn){
	var ret ;
	return function(){
		return ret||(ret=fn.apply(this,arguments));
	};
};

var getDiv = getSingle(function(){
	return $('<div id="dialog1"></div>');
})

var displayDialog = function(content){
	var div=getDiv();
	//console.log(div);
	var title=$(this).text()
	div.attr('title',title).html($('<p></p>').text(content)).dialog();
}*/


//方法2
function openDialog(id){
	var elements =[];
	return function(content){
		var div=elements[id];
		//console.log(div);
		if (!div) {
			div= $('<div id="'+id+'"></div>');
			elements[id]=div;
			//console.log('div created');
		}
		var title=$(this).text()
		div.attr('title',title).html($('<p></p>').text(content)).dialog();
	}
}

var displayDialog= openDialog('dialog1');