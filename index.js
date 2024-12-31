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
// let text=prompt("plz enter a text : ").toLowerCase();
// let lentext =text.length;
// function order(text,textlen){
// let max=text.charcodeAt(0);
//     for (let i=0;i<textlen;i++){
//         for(let j=0)
//     }

// }
let text = prompt("plz enter a text : ").toLowerCase();
function order(tex) {
  for (let i = 1; i < tex.length; i++) {
    let key = tex.charAt(i);
    let j = i - 1;

    // Moving elements of arr[0..i-1], that are
    // greater than key, to one position ahead
    while (j >= 0 && tex.charAt(j) > key) {
      tex.charAt(j+1) = tex.charAt(j);
      j = j - 1;
    }

    tex.charAt(j+1) = key;
  }

  return tex;
}
console.log(order(text));