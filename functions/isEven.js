// takes a number and tells if it's even, recursively

var isEven = function(number){
	if(number < 0) { number*=-1; }
	switch(number){
		case 0: return true; break;
		case 1: return false; break;
		default: return isEven(number-2);
	}
}

console.log(isEven(6));
console.log(isEven(3));
console.log(isEven(-5));
console.log(isEven(-4));