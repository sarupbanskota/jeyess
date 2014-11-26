// reverses an array

var reverseArray = function(array){
	new_array = [];
	while(array.length!=0){
	  new_array.push(array.pop());
	}
	return new_array;
}

var reverseArrayInPlace = function(array){
	for(index=0; index<array.length/2; index++){
		buffer = array[index]
		array[index] = array[array.length - 1 - index];
		array[array.length - 1 - index] = buffer;
	}
	return array;
}


console.log(reverseArrayInPlace([1,2,3,4,5,6,7]));
console.log(reverseArray([1,2,3,4,5]));