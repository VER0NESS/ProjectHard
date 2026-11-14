let num = 266219;
numlist=[]
for (const item of String(num).split("")){
    if (!numlist.includes(Number(item))){
        numlist.push(Number(item))
    }
}
let res=1
for (const item of numlist){
    res=res*item
}
console.log("result is ",String(res**3).slice(0,2))
// let result = sum ** 3;
// let resultSlice = String(result).slice(0, 2);

// console.log(resultSlice);