document.addEventListener("DOMContentLoaded",function(){

const arr=["ROCK","PAPER","SCISSORS"]
let p=0
let c=0
let plyd=0;

//scrbrd=document.getElementById('');
const choose=document.getElementById('chs');
const list=document.getElementById('btns');
const score=document.querySelector('#scbr #scr');
const sl=document.querySelector('#scbr #lbl');
const pbtn=document.getElementById("play");
pbtn.addEventListener("click",play);



function racn(parent) {
    Array.from(parent.children).forEach(ch=>{
        ch.disabled=!ch.disabled});
    }


function turn(b){  
let j=Math.floor(Math.random()*100)%3;
cc=arr[j];
let p=0  
const pc=b.target.textContent.toUpperCase();
for (let i=0;i<list.children.length;i++){
    if (list.children[i].textContent===pc) {
        list.children[i].style.boxShadow="5px 5px 0px lightgreen";
        p=i;
    }
    else if (list.children[i].textContent===cc){
        list.children[i].style.boxShadow="5px 5px 0px darkred";
    }
    else if (pc===cc){list.children[j].style.boxShadow="5px 5px 0px darkblue";p=j;break}
    
}
decide(p,j);
console.log(p,j)
}


function decide(pc,cc){
    if (pc-cc===-1 || pc-cc===2) {
        c++;
    }
    else if (pc-cc===0){
        return;
    }
    else {
        p++;
    }
    score.textContent=`You : ${p}    Sys : ${c}`;
}

function game(b){
    Array.from(list.children).forEach(ch=>{
        if (ch!=b) ch.style.boxShadow="3px 3px 0px grey";
    })
    turn(b);
    plyd++;
    if (plyd===5){
    plyd=0; 
    sl.textContent='FINAL SCORE:' 
    racn(list);
    pbtn.disabled=false;
    pbtn.textContent='Play Again'
    if (p>c) {  
        console.log(`final score-->you:${p}  sys:${c}`) 
        p=0,c=0; 
        choose.textContent='YOU WON!!!'
    }
    else if (c>p) {
        console.log(`final score-->you:${p}  sys:${c}`)
        p=0,c=0; 
        choose.textContent="YOU LOST:/"
    }
    else {
        p=0,c=0
        console.log(`final score-->you:${p}  sys:${c}`)
        choose.textContent="It's a Draw."
    }
    }
}

function play(e){
    e.target.disabled=true;
    

    choose.textContent='Choose:';
    if (e.target.textContent==='Play'){
    const rck=document.createElement('button');
    rck.textContent='ROCK';
    rck.setAttribute('class','btn btn-dark');
    list.appendChild(rck);
    
    const pap=document.createElement('button');
    pap.textContent='PAPER';
    pap.setAttribute('class','btn btn-primary');
    list.appendChild(pap);
    
    const scrs=document.createElement('button');
    scrs.textContent='SCISSORS';
    scrs.setAttribute('class','btn btn-warning');
    list.appendChild(scrs);
    
    pap.addEventListener('click',game);
    rck.addEventListener('click',game);
    scrs.addEventListener('click',game);

    sl.textContent='SCORE:';
    score.textContent=`You : ${p}    Sys : ${c}`;
    }  
     
    if (e.target.textContent==='Play Again') {
        racn(list)
        sl.textContent='SCORE:';
        score.textContent=`You : ${p}    Sys : ${c}`;
        Array.from(list.children).forEach(ch=>{ch.style.boxShadow="3px 3px 0px grey"})
    };
    
    e.target.textContent='Play';
    sl.textContent='SCORE:';
    score.textContent=`You : ${p}    Sys : ${c}`;
}
})
