let eng=['book', 'cat', 'dog'];
let vie=['quyen sach','meo','cho'];
let index=-1;
let n=prompt('Nhap tu can tra');
for(let i=0; i<eng.length; i++){
    if(eng[i]==n){
        index=i;
        break;
    }
}
if(index===-1){
    console.log(`khong co trong tu dien ${n}`);
}else {
    console.log('nghia tieng viet ' + vie[index]);
}