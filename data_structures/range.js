// sums up numbers within a given range

var range = function(start, end, step){
	range_array = [];
	if (start < end) {
		(step === undefined) ? step = 1: true;
		for(index=start; index <= end; index+=step){
			range_array.push(index);
		}
	}
	else {
		(step === undefined) ? step = -1: true;
		for(index=start; index >= end; index+=step){
			range_array.push(index);
		}
	}
	return range_array;
}

var sum = function(range_array){
	cumulative = 0;
	for(index=0;index<range_array.length;index++){
		cumulative+= range_array[index];
	}
	return cumulative;
}


console.log(sum(range(5,2,-2)));