let array=[3,5,6,2,1];
let x= prompt('Nhap 1 so');
for(let i=0; i<=array.length; i++){
    if(x==array[i]){
        document.write('x o vi tri thu '+i);
        break;
    }else {
        document.write('-1')
        break;
    }
}