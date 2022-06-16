let arr=[9,5,9,8,2,9];
let max=arr[0];
for(let i=0; i<arr.length; i++){
    if(max<arr[i]){
        max=arr[i];
    }
}
for(let i=0; i<arr.length; i++){
    if(max === arr[i]){
        document.write(i+'<br>');
    }
}