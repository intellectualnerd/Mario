function addbluebox() {
    const para = document.createElement("div");
    para.className = 'gamebox blue';
    const element = document.getElementById("screen");
    element.appendChild(para);
}
function addbrownbox() {
    const para = document.createElement("div");
    para.className = 'gamebox brown';
    const element = document.getElementById("screen");
    element.appendChild(para);
}
function addgreenrbox() {
    const para = document.createElement("div");
    para.className = 'gamebox green gr';
    const element = document.getElementById("screen");
    element.appendChild(para);
}
function addgreenlbox() {
    const para = document.createElement("div");
    para.className = 'gamebox green gl';
    const element = document.getElementById("screen");
    element.appendChild(para);
}
function addgraybox() {
    const para = document.createElement("div");
    para.className = 'gamebox gray';
    const element = document.getElementById("screen");
    element.appendChild(para);
}
function addwaterbox() {
    const para = document.createElement("div");
    para.className = 'gamebox water';
    const element = document.getElementById("screen");
    element.appendChild(para);
}
function outbox() {
    const para = document.createElement("div");
    para.className = 'outgamebox';
    const element = document.getElementById("smallgame");
    element.appendChild(para);
}


//marioooo
function mariohead(){
    const para = document.createElement("div");
    para.className = 'outgamebox mariohead';
    const element = document.getElementById("smallgame");
    element.appendChild(para);
}
function marioshirt(){
    const para = document.createElement("div");
    para.className = 'outgamebox marioshirt';
    const element = document.getElementById("smallgame");
    element.appendChild(para);
}
function marioskin(){
    const para = document.createElement("div");
    para.className = 'outgamebox marioskin';
    const element = document.getElementById("smallgame");
    element.appendChild(para);
}
function mariopants(){
    const para = document.createElement("div");
    para.className = 'outgamebox mariopants';
    const element = document.getElementById("smallgame");
    element.appendChild(para);
}


//game[row][column]


var row = 13, column = 100;
var start=0;
var outrow = (4*row), outcolumn = (4*column);
var x=36,y=0;
var a,b;
var marioup=0;
var ron=0,lon=0,uon=0;
var t=0.0001;
var jumpmario;
jumpmario=new Audio('smb_jump-small.wav');
var game = [];
for (let p = 0; p < row; p++) {
    game[p] = [];
    for (let q = 0; q < column; q++) {
        game[p][q] = 1;
    }

}

var outgame = [];
    for (let p = 0; p < outrow; p++) {
        outgame[p] = [];
        for (let q = 0; q < outcolumn; q++) {
            outgame[p][q] = 1;
        }

    }
    


function printgamebox(){
     
    for (let i = 0; i < row; i++) {
        for (let j = start; j < (start+16); j++) {
            
            if (game[i][j] == 1) {
                addbluebox();
            }
            if (game[i][j] == 2) {
                addbrownbox();
            }
            if (game[i][j] == 31) {
                addgreenlbox();
            }
            if (game[i][j] == 32) {
                addgreenrbox();
            }
            if (game[i][j] == 4) {
                addgraybox();
            }
            if (game[i][j] == 5) {
                addwaterbox();
            }
        }
        document.getElementById('screen').innerHTML += "<br><br><br><br>";
    }

}

function printoutgamebox(){
    for (let p = 0; p < outrow; p++) {
        outgame[p] = [];
        for (let q = 0; q < outcolumn; q++) {
            outgame[p][q] = 1;
        }

    }
    
    outgame[x][y+1]=10;
    outgame[x][y+2]=10;

    outgame[x+1][y]=20;
    outgame[x+1][y+1]=30;
    outgame[x+1][y+2]=30;
    outgame[x+1][y+3]=20;

    outgame[x+2][y]=20;
    outgame[x+2][y+1]=30;
    outgame[x+2][y+2]=30;
    outgame[x+2][y+3]=20;

    outgame[x+3][y+1]=40;
    outgame[x+3][y+2]=40;
    for (let i = 0; i < outrow; i++) {
        for (let j = (start*4); j < ((start*4)+(16*4)); j++) {
            if (outgame[i][j] == 1) {
                outbox();
            }
            if (outgame[i][j] == 10) {
                mariohead();
            }
            if (outgame[i][j] == 20) {
                marioskin();
            }
            if (outgame[i][j] == 30) {
                marioshirt();
            }
            if (outgame[i][j] == 40) {
                mariopants();
            }
        }
        document.getElementById('smallgame').innerHTML += "<br>";
    }

}




function gameon() {
   
    
    //floating branches
    game[7][5] = 2;
    game[7][6] = 2;
    game[7][7] = 2;
    game[7][8] = 2;


    game[5][21] = 2;
    game[5][22] = 2;
    game[5][23] = 2;
    game[5][24] = 2;


    //upwarded road

    game[9][17] = 2;
    for (let p = 8; p < 10; p++) {
        for (let q = 18; q < 38; q++) {
            game[p][q] = 2;
        }
    }

    //road

    for (let p = 10; p < row; p++) {
        for (let q = 0; q < column; q++) {
            game[p][q] = 2;
        }
    }

    //pipe

    game[9][42] = 32;
    game[8][42] = 32;
    game[7][42] = 32;
    game[6][42] = 32;
    game[9][41] = 31;
    game[8][41] = 31;
    game[7][41] = 31;
    game[6][41] = 31;

    //small pipe
    game[9][47] = 31;
    game[8][47] = 31;
    game[9][48] = 32;
    game[8][48] = 32;
    

    //cement wall
    game[9][55] = 4;
    game[8][55] = 4;

    game[9][58] = 4;
    game[8][58] = 4;
    game[7][58] = 4;
    game[6][58] = 4;

    game[9][61] = 4;
    game[8][61] = 4;
 

    //water
    for (let p = 10; p < 11; p++) {
        for (let q = 70; q < 75; q++) {
            game[p][q] = 1;
        }
    }

    for (let p = 11; p < row; p++) {
        for (let q = 70; q < 75; q++) {
            game[p][q] = 5;
        }
    }
    printgamebox();
    //outgame
    printoutgamebox();
}







function wait(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("");
        }, delay);
    });
}
async function right(){
    if (ron==0){
        ron=1;
        var a=givevalueofa(),b=givevalueofb();
    
    if(game[a+1][b]==1 && game[a+1][b+1]==1 && uon==0){
        uon=1;
        for(var t=0;(game[a+1][b]!=2);t++){ 
            a=givevalueofa();
            b=givevalueofb();
            var no=0; 
             if(game[a+1][b]==2||game[a+1][b]==31||game[a+1][b]==32||game[a+1][b]==4){
                    no=1;
             }
             
             if(no==0){
                 x+=1;
                 document.getElementById('smallgame').innerHTML='   ';
                 printoutgamebox();
                 await wait('t');
             }
             
         }
        uon=0;
    }
    switch(game[a][b+1]){
        case 2:
        y-=1;
        case 31:
        y-=1;
        case 32:
        y-=1;
        case 4:
        y-=1;
    }
    
    y+=1;
    if(y==((start*4)+ 32)){
        start++;
        document.getElementById('screen').innerHTML='   ';
        printgamebox();
    }
    document.getElementById('smallgame').innerHTML='   ';
    printoutgamebox();
    await wait('t'); 
    ron=0;
    }

}
async function left(){
    if(lon==0){
    lon=1;
    y-=1;
    a=givevalueofa();
    b=givevalueofb();
    switch(game[a][b]){
        case 2:
        y+=1;
        case 31:
        y+=1;
        case 32:
        y+=1;
        case 4:
        y+=1;
    }
    if(game[a+1][b]==1 && game[a+1][b+1]==1 && uon==0){
        uon=1;
        y+=1;
        for(var t=0;(game[a+1][b]!=2);t++){ 
            a=givevalueofa();
            b=givevalueofb();
            var no=0; 
             if(game[a+1][b]==2||game[a+1][b]==31||game[a+1][b]==32||game[a+1][b]==4){
                    no=1;
             }
             
             if(no==0){

                 x+=1;
                 document.getElementById('smallgame').innerHTML='   ';
                 printoutgamebox();
                 await wait('t');
             }
             
         }
        uon=0;
    } 
    else{
        y+=1
    }
    y-=1;
    document.getElementById('smallgame').innerHTML='   ';
    printoutgamebox();
    await wait ('t');
    lon=0;    
    }
    
}
var isupon=1;
async function up(){
if(uon==0){
    uon=1;
    jumpmario.play();
    if(isupon == 1){
        isupon=0;
        for(var t=0;t<13;t++){
            a=givevalueofa();
            b=givevalueofb(); 
            if((game[a][b])!=2){
            x-=1;
            document.getElementById('smallgame').innerHTML='   ';
            printoutgamebox();
            await wait('t');

            }
            
        }
        var no=0;
        for(var t=0;no!=1;t++){ 
           a=givevalueofa();
           b=givevalueofb(); 
            if(game[a+1][b]==2||game[a+1][b]==31||game[a+1][b]==32||game[a+1][b]==4||game[a+1][b+1]==2||game[a+1][b+1]==31||game[a+1][b+1]==32||game[a+1][b+1]==4){
                no=1;
            }
            
            if(no==0){
                x+=1;
                document.getElementById('smallgame').innerHTML='   ';
                printoutgamebox();
                await wait('t');
            }
            if(game[a][b]==5){
                document.getElementById('smallgame').innerHTML='   ';
                document.getElementById('sreen').innerHTML='   ';
            }
        }
        isupon=1;
        uon=0;
        await wait('t');
    }
    on=0;
}
    
    
}

function givevalueofa(){
    if(x%4==0){
        return (x/4);
    }
    if(x%4==1){
        return ((x-1)/4);
    }
    if(x%4==2){
        return ((x-2)/4);
    }
    if(x%4==3){
        return ((x-3)/4);
    }
}
function givevalueofb(){
    if(y%4==0){
        return (y/4);
    }
    if(y%4==1){
        return ((y-1)/4);
    }
    if(y%4==2){
        return ((y-2)/4);
    }
    if(y%4==3){
        return ((y-3)/4);
    }
}

document.onkeydown = function (e) {
            switch (e.keyCode) {
            case 37: left(); break;
            case 38: up(); break;
            case 32: up(); break;
            case 39: right(); break;
            case 40: down(); break;
            }

        } 
function Sound(){
            var a = document.getElementById("Test_Audio");
            a.loop = true;
            a.load();
            a.play();
 }
       