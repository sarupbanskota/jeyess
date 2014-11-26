// compares two objects for equality

var deepEqual = function(apple, orange){
	if (typeof(apple) === "object" && typeof(orange) === "object" && apple!= null && orange!= null){
		for(property in apple){
			if(deepEqual(apple[property], orange[property]) === false) return false;
		}
	}
	else{
		if(apple != orange) return false;
	}
	return true;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));