// let arr=[34,7,8,8,9,9,1,2,3,4,7,5]
// let res=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2===1){

//         let isreapect=false

//         for(let j=0;j<res.length;j++){
//             if(res[j]===arr[i]){

//                 isreapect=true
//                 break;
//             }
            
//         }

//         if(!isreapect){

//             res.push(arr[i])
//         }
//     }
// }

// console.log(res)



function rearrange(arr){
    let i=0
    j=arr.length-1

    while(i<j){
        if(arr[i]%2!=0){
            i++

        }
        else{

            while(j>i){
                if(arr[j]%2==0){
                    j--
                }
                else{
                    let temp=arr[i]
                    arr[i]=arr[j]
                    arr[j]=temp

                    j--
                    i++
                    break

                }
               

             
            }

        }

    }
return arr

}
let arr=[3,42,3,4,1,5,3,7,8]
console.log(rearrange(arr))

