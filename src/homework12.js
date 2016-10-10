//12
/*现在有一个登录模块，用户登录后的头像需要在header，或者导航栏，或者消息列表等模块显示，
请大家依据发布-订阅的设计模式，请大家设计代码，将登录信息通知各个模块。伪代码亦可。
*/
var event ={
	receivers:[],
	listen:function(key,fn){
			if(!this.receivers[key]){
				this.receivers[key] = [];
			}
			this.receivers[key].push(fn);
     },
	 trigger: function(){
				var key = Array.prototype.shift.call(arguments),
				fns = this.receivers[key];
				if(!fns||fns.length===0){
					return false;
				};
				for(var i=0,fn;fn=fns[i++];i<fns.length){
					fn.apply(this,arguments);
				}
			},
    remove:function(key,fn){
		var fns = this.receivers[key];
		if(!fns){
			return false;
		}
		if(!fn){
			fns&&(fns.length=0);
		}else {
			for(var l = fns.length-1;l>=0;l--){
				var _fn = fns[l];
				if(_fn===fn){
					fns.splice(l,1);
				}
			}
		}
	}
};

var installEvent = function(obj){
	for(var i in event){
		obj[i]=event[i];
	}
}

var loginEvent={};
installEvent(loginEvent);

loginEvent.login = function(){
	console.log('login success!');
	this.trigger('login','loginuser is liyin');
}

var banner=function(message){
	console.log("banner:"+message);
}

var nav=function(message){
	console.log("nav:"+message);
}

var noti=function(message){
	console.log("noti:"+message);
}

function test(){
	loginEvent.listen("login",banner);
	loginEvent.listen("login",nav);
	loginEvent.listen("login",noti);

	loginEvent.login();
}

test();




