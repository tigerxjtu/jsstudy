Array.prototype.collect = function(init, collectFun) {
    var result = init;
    
    function fun() {
    	if (arguments.length === 0) return result;
        if (arguments.length === 1) {
            if (Array.isArray(arguments[0])) {
                return Array.prototype.collect.call(arguments[0], result, collectFun);
            } else {
                return collectFun(result, arguments[0]);
            }
        }
        var args = Array.prototype.slice.call(arguments, 1);
        if (Array.isArray(arguments[0])) {
            //result = Array.prototype.collect.call(arguments[0], result, collectFun);
            result = arguments[0].collect(result,collectFun);
        } else {
            result = collectFun(result, arguments[0]);
        }
        return args.collect(result, collectFun);
    }
	return fun.apply(null,this);
}

console.log([1, 2, 3, 4].collect(0,function(a, b) {
    return a + b;
}));

console.log(['a','b','c','d'].collect(null,function(a,b){
	if (!a) return b;
	return a+','+b;
}));

console.log([[1, 2], [3, 4]].collect(0,function(a, b) {
    return a + b;
}));

console.log([['a','b'],'c','d'].collect(null,function(a,b){
	if (!a) return b;
	return a+','+b;
}));