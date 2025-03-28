// Rotate the array elements k time 

//    Method One 
 let arr = [1,2,3,4,5]
let k = 2;
k = k%arr.length;
for(let j = 0;j<k;j++){
    let copy = arr[0]
for(let i = 0;i<arr.length-1;i++){
    arr[i] = arr[i+1]
}
arr[arr.length-1] = copy

}
console.log(arr);





 // Method Two with extra space 
let arr = [1,2,3,4,5]
let k = 1
let temp = new Array(arr.length)

for(let i = 0;i<arr.length;i++){
    temp[i] = arr[(i+k)%arr.length];

}
console.log(temp);







// method three without extra space efficient way or block swap reversal algorithm
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
