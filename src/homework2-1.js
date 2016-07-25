function argsSortTest(){
	return Array.prototype.sort.call(arguments);
}

function argsSliceTest(){
	return Array.prototype.slice.apply(arguments,[1,3]);
}

console.log(argsSortTest(1,4,2,6,3));
console.log(argsSliceTest(1,4,2,6,3));