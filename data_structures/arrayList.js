// convert arrays to lists and vice-versa

var arrayToList = function(array){
	list = { value: array.pop(), rest: null };
	while(array.length){
		list = {value: array.pop(), rest: list};
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

console.log(arrayToList([10, 20,30]));
console.log(listToArray({ value: 10, rest: { value: 20, rest: { value: 30, rest: null }}}));

