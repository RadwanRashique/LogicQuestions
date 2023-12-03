let arr=[888880,2,32,2324,232,435,22]
let fLarge=arr[0]
let secLarge=arr[1]

for(let i=0;i<arr.length;i++){

if(fLarge<arr[i]){
    secLarge=fLarge
    fLarge=arr[i]
}
else{
    if(fLarge!==arr[i]&& secLarge<arr[i]){
        secLarge=arr[i]
    }
}

}

console.log(secLarge)