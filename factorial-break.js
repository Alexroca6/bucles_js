let num = 10;
let factorial = 1;

while(true) {
  factorial *= num;
  num--;
  if(num == 0) {
    break;
  }
}

console.log(factorial);
