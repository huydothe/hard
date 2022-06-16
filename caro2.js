let b= document.getElementById('carogame');

let board=[];
let str="";
for(let i=0; i<5; i++){
    board[i]=[0,0,0,0,0]
}
for(let i=0; i<5; i++){
    str=str+'<br>';
    for(let j=0; j<5; j++){
        str+=board[i][j] +'&nbsp;&nbsp';
    }
}
data+='<br><br><input type="button" value="Change Value" onclick="changeValue()>';
b.innerHTML=data;
function changeValue() {
    let positionX = prompt('X');
    let positionY = prompt('Y');
    str = '';
    let h = 1;
    if (h % 2 == 0) {
        board[positionX][positionY] = 'o';
    } else {
        board[positionX][positionY] = 'x';
    }
    for (let i = 0; i < 5; i++) {
        str += '<br>';
        for (let j = 0; j < 5; j++) {
            str += board[i][j]
        }
    }
    if ((board[i][j] && board[i][j + 1] && board[i][j + 2] && board[i][j + 3] && board[i][j + 4]) === 'x' ||
        (board[i + 1][j] && board[i + 2][j] && board[i + 3][j] && board[i + 4][j] && board[i][j]) === 'x' ||
        (board[i][j] && board[i + 1][j + 1] && board[i + 2][j + 2] && board[i + 3][j + 3] && board[i + 4][j + 4]) === 'x'||
        (board[i][j+4] && board[i+1 + 1][j + 3] && board[i + 2][j + 2] && board[i + 3][j + 1] && board[i + 4][j]) === 'x') {
        alert('X win');
    } else if ((board[i][j] && board[i][j + 1] && board[i][j + 2] && board[i][j + 3] && board[i][j + 4]) === 'x' ||
        (board[i + 1][j] && board[i + 2][j] && board[i + 3][j] && board[i + 4][j] && board[i][j]) === 'x' ||
        (board[i][j] && board[i + 1][j + 1] && board[i + 2][j + 2] && board[i + 3][j + 3] && board[i + 4][j + 4]) === 'x'||
        (board[i][j+4] && board[i+1 + 1][j + 3] && board[i + 2][j + 2] && board[i + 3][j + 1] && board[i + 4][j]) === 'x'){
        alert('0 win');
    }
    b.innerHTML = data;
}


