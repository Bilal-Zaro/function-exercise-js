let numbers= prompt("plz enter numbers");
let len= numbers.length;
function reve(numbers,len){
    let newnum ="";
    for(let i=len-1;i>=0;i--){
        newnum=newnum+numbers.charAt(i);
    } 
    return newnum;
}
console.log(reve(numbers,len));

for(let i =0;i<=15;i++){
    if(i%2==0){
        console.log(i+" is even ");
    }
    else{
        console.log(i+" is odd");
    }
}
/********/
function order(input) {
  let str = input.toLowerCase();
  let orderStr = '';

  for (let i = 0; i < input.length; i++) {
      let min = str[0];
    for (let j = 0; j < str.length; j++) 
      {
      if (min > str[j]) {
        min = str[j];
      }
    }
    orderStr += min;
    str = str.replace(min, '');
  }
  return orderStr;
}
console.log(order(prompt("Enter a text : ")));
let num = prompt("plz Enter numbers : ");
num =num+"";
let resault ="";
for(let i=0;i<num.length;i++){
  if(num[i]>0 && num[i]%2==0 && num[i-1]%2==0){
    resault += "-";
  }
  resault+=num[i];
}
console.log(resault);

function agechecker( age){
  let check = age >= 18 ? "The user is Adult" : "The user is Minor";

return check;
}
console.log(agechecker(prompt("plz enter your age")));