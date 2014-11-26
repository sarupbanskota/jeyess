// convert arrays to lists and vice-versa

var prepend = function(element, list){
	return { 
		value: element, 
		rest: list
	};
}

var nth = function(list, number){
	if(number){ return nth(list.rest, number-1); }
	else{ return list.value; }
}

var arrayToList = function(array){
	list = { value: array.pop(), rest: null };
	while(array.length){
		list = prepend(array.pop(), list)
	}
	return list;
}

var listToArray = function(list){
	array = [];
	array.push(list.value);
	if(list.rest!= null){
		array = array.concat(listToArray(list.rest));
	}
	return array;
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));


