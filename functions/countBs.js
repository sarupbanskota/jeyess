// counts number of 'B's in a string

var countChar = function(string, character){
	count = 0;
	for(index=0; index<string.length; index++){
		if(string.charAt(index) === character) { count+=1};
	}
	console.log(count);
}

var countBs = function(string){
	return countChar(string, 'B');
}

countChar("JavaScriptMerryJavaScary", 'J');
countBs("ThisIsA B that-you-don'tWANNAmiss,rightB? ok one more.. B");