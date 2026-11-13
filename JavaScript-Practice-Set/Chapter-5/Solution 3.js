let arr = [10,20,30,40,60,65,43,100,101];

let result = arr.filter((num)=>{
    return num%10==0;
});
console.log(result);