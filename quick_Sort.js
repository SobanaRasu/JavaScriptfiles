let arr=[-3,-9,-4,8,3,5,9,0]
function quickSort(arr){
    let arrr=[],arrl=[]
if(arr.length<2){
    return arr
}
let pivot=arr[(arr.length)-1]
for(let i=0;i<(arr.length)-1;i++){
    if(pivot>arr[i]){
        arrr.push(arr[i])
    }
    else{
        arrl.push(arr[i])
    }
}
return[...quickSort(arrr),pivot,...quickSort(arrl)]
}
console.log(quickSort(arr))
//console.log(arrl)