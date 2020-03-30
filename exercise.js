function fizzBuzz(){
  let counter = 0;
  let result = 1;
  do{
    if(result % 15 === 0){
        console.log("FizzBuzz");
        counter++;
        result += 1;
    } else if(result % 5 === 0){
        console.log("Buzz");
        counter++;
        result += 1;
    } else if(result % 3 === 0){
        console.log("Fizz")
        counter++;
        result += 1;
    } else{
        console.log(result);
        counter++;
        result += 1;
    }
  } while(counter <= 99)
};

fizzBuzz();
