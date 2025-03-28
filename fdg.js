

// let arr = [1,2,3,4,5]
// let copy = arr[0]
// for(let i = 0;i<arr.length-1;i++){
//     arr[i] = arr[i+1]
// }
// // arr[arr.length-1] = copy
// console.log(arr);


let arr = [1,2,3,4,5]
let k = 2;
k = k%arr.length;

function reverse(arr, i , j){
while(i<j){
let temp = arr[i]
arr[i] = arr[j]
arr[j] = temp;
i++;
j--;

}
}

reverse(arr,0,k-1)
reverse(arr,k,arr.length-1)
reverse(arr,0,arr.length-1)
console.log(arr);