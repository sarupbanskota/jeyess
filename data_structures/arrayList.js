// convert arrays to lists and vice-versa

var arrayToList = function(array){
	list = { value: array.pop(), rest: null };
	while(array.length){
		list = {value: array.pop(), rest: list};
	}
	return list;
}

console.log(arrayToList([10, 20,30]));

