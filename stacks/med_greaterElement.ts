


let res: number[] = [2,3,11,14,5,26,8,17,4];
let res1: number[] = [5, 6, 1, 3, 1, -2, -1, 3, 4, 5]
let i = 13
// console.log(res[i % res.length])
let stack: number[] = []
function findGreaterNumInArr(num: number, arr: number[]){
    let count: number;
    let res: number = 0;
    if(arr.includes(num)){
        let numIdx: number = arr.findIndex((val) => val === num);
        count = numIdx+1;
        while(arr[count%arr.length] <= num && 
            count%arr.length != numIdx){
            console.log(arr[count%arr.length]);
            count++
        }
        res = (arr[count%arr.length] != num) ? arr[count%arr.length]: -1;
        console.log('greaterElem', res)
    }
    // return stack.push(res)
}

findGreaterNumInArr(3, res1)

// for(let item of res1){
//     findGreaterNumInArr(item, res1, stack);
// }
// console.log(stack)

