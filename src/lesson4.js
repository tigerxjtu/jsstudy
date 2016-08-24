Object.create = function(o){
	var F = function(){};
	F.prototype = o ;
	return new F();
};

var person = {first_name:'MA',second_name:'BOB'};

var anotherPerson = Object.create(person);
console.log(anotherPerson.first_name); //MA
//对这个对象进行更新
anotherPerson.first_name ='hello';
console.log(person.first_name); //显示的是什么？ MA
//console.log(anotherPerson.prototype.first_name);
console.log(anotherPerson.first_name);//hello
console.log(anotherPerson.__proto__.first_name); //hello
console.log(anotherPerson.__proto__===person); //true

console.log(anotherPerson.hasOwnProperty('first_name')); //true

console.log(anotherPerson.hasOwnProperty('second_name')); //false

for (v in anotherPerson){
	console.log(v,'=',anotherPerson[v]);
}

person.alert=function(){console.log('in function')};

for (v in anotherPerson){
	if (anotherPerson.hasOwnProperty(v)){
		if (typeof anotherPerson[v] === 'function'){
			anotherPerson[v].apply(anotherPerson);
		}else{
			console.log(v,'=',anotherPerson[v]);
		}
	}else{
		if (typeof anotherPerson[v] === 'function'){
			anotherPerson[v].apply(anotherPerson);
		}else{
			console.log('proto:',v,'=',anotherPerson[v]);
		}
	}
	
}
