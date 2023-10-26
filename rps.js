document.addEventListener("DOMContentLoaded",function(){

const arr=["rock","paper","scissors"]
let p=0
let c=0

document.getElementById("play").addEventListener("click",play);

function turn(){  
pc=prompt("choose").toLowerCase(); 
if (pc!=null){
for (i in arr){
    if (arr[i]===pc) {
        let j=Math.floor(Math.random()*100)%3;
        cc=arr[j]
        console.log(decide(i,j));
        return;
    }
}}
alert(`Enter a valid sign!`);
turn();
}


function decide(pc,cc){
    if (pc-cc===(-1 || 2)) {
        c++;
        return `you Lose!${arr[cc]} beats ${arr[pc]}`;
    }
    else if (pc-cc===0) {
        return `draw!`;
    }
    else {
        p++;
        return `you win!${arr[pc]} beats ${arr[cc]}`;
    }
}

function game(){
    for (let i=0;i<5;i++){
        turn();
    }
    if (p>c) {  
        console.log(`final score-->you:${p}  sys:${c}`) 
        p=0,c=0; 
        return "you won!"
    }
    else if (c>p) {
        console.log(`final score-->you:${p}  sys:${c}`)
        p=0,c=0; 
        return "you lost:/"
    }
    else {
        p=0,c=0
        return "Draw."
    }
}

function play(){
    console.log(game())
}
})
