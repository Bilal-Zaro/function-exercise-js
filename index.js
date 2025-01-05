/****bilal */
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

var age = prompt("plz enter your age : ")
function agechecker( age){
  let check = age >= 18 ? "The user is Adult" : "The user is Minor";

return check;
}
console.log(agechecker(age));


/****dom task***/
// const div = document.getElementById("mydiv");
// const para = document.createElement("p");
// para.innerHTML = "bilal";
// const list = document.createElement("ol");
// const item1 = document.createElement("li");
// item1.innerHTML = "Gender:" + "male";
// const item2 = document.createElement("li");
// item2.innerHTML = "Age : " + age;
// const item3 = document.createElement("li");
// item3.innerHTML = "Order : " + "coffee";
// div.appendChild(para);
// div.appendChild(list);
// list.appendChild(item1);
// list.appendChild(item2);
// list.appendChild(item3);

