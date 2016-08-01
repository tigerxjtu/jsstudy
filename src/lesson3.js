Function.prototype.bind =function(context){
	var self = this ;
	return function(){
		/*alert(self);
		alert(context);*/
		return self.apply(context,arguments);
	}
};

var obj ={name : 'steven'};
var obj1 ={name : 'steven111'};
var func = (function(){
	console.log(this.name);
}).bind(obj);

func1=func.bind(obj1);
/*var func1 = (function(){
	console.log(this.name);
}).bind(obj1);*/

func();
func1();

Function.prototype.before = function(beforefn){
	 var that = this ;
	 return function(){
		 beforefn.apply(this,arguments);
		 return that.apply(this,arguments);
	 };
};

Function.prototype.after = function(afterfn){
	 var that = this ;
	 return function(){
		 var ret =that.apply(this,arguments);
		 afterfn.apply(this,arguments);
		 return ret ;
	 };
};

var func = function(){
	console.log(2);
};
func = func.before(function(){
	console.log(1);
}).after(function(){
	console.log(3);
});
func();