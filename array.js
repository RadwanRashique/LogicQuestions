
// 1  bring all one to left and zero to right  or viseversa

// let array = [0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1];

// // Initialize the pointers for the left (i) and right (j) sides of the array.
// let i = 0;
// let j = array.length - 1;

// while (i < j) {
//     if (array[i] === 1) {
//         // If the element at position i is 0, move to the right.
//         i++;
//     } else if (array[j] === 0) {
//         // If the element at position j is 1, move to the left.
//         j--;
//     } else {
//         // Swap 0 and 1 at positions i and j.
//         let temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//         i++;
//         j--;
//     }
// }

// console.log(array);

// let array=[3,0,3,3,0,0,3,0,3]

// let i=0
// let j=array.length-1
// while(i<j){

//     if(array[i]==3){
// i++
//     }
//     else{
//         if(array[j]==0){
//             j--
//         }
//         else{
//             let temp=array[i]
//             array[i]=array[j]
//             array[j]=temp
//             i++
//             j--
//         }
//     }
// }
// console.log(array)

// let array=[0,1,1,1,0,0,1,0,1,0,0]
// let i=0
// let j=array.length-1    
// while(i<j){
//     if(array[i]==0){
//         i++
//     }
//     else{
//         if(array[j]==0){
//             let temp=array[i]
//             array[i]=array[j]
//             array[j]=temp
//             i++
//             j--

//         }
//         else{
//           j--
//         }
//     }
// }
// let result = array.sort((a,b)=>b-a)
// console.log(array)

// 2)  take all odd numbers to the right

// let array=[2,7,4,3,6,1,8]

// let i=0
// let j=array.length-1
// while(i<j){
//     if(array[i]%2==0){
//         i++
//     }
//     else{
//         if(array[j]%2==1){
//             j--
//         }
//         else{
//             let temp=array[i]
//             array[i]=array[j]
//             array[j]=temp
//             i++
//             j--
//         }
//     }
// }
// console.log(array)

// 3) find the 2 numbers index which give the target number


function targetNUm(target,array){

    for(let i=0;i<array.length;i++){
        
        for(let j=i+1;j<array.length;j++){
            if(array[i]+array[j]==target){
                return [i,j] 
            }
            
        }
       
    }
}

let array=[3,4,5,7,9,3,1,8]
let target = 9
let result = targetNUm(target,array)
console.log(result)