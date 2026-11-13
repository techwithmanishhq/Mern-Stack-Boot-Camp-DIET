let arr = [10,20,30,40];

let num;

do{
    num = Number(prompt("Enter a number: "));

    if(num!=0){
        arr.push(num);
    }
} while(num!=0);
console.log(arr);