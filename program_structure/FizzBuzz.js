// classic FizzBuzz

for(index=1; index<=100; index++){
  output="";
  if(index%3==0){output="Fizz";}
  if(index%5==0){output+="Buzz";}
  if(output.length == 0){output=index;}
  console.log(output);
}
