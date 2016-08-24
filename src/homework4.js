//4-1
var showMap=function(mapImpl){
	mapImpl.show();
}

showMap(new GoogleMap());
showMap(new BaiduMap());

//4-2
var showMap=function(mapImpl){
	mapImpl.show();
}

var BaiduMapImpl=function(){

	function(baiduMap){
		this.mapImpl=baiduMap;
	}

	this.show=function(){
		this.mapImpl.display();
	}
}

showMap(new GoogleMap());
showMap(new BaiduMapImpl(new BaiduMap()));


