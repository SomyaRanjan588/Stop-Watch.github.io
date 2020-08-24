const divhr=document.getElementById("Hr")
const divmin=document.getElementById("Min");
const divsec =document.getElementById("Sec");
const divmilisec=document.getElementById("Milisec");
const btnStart=document.getElementById("start");
const btnPause=document.getElementById("pause");
const btnResume=document.getElementById("resume");
const btnReset=document.getElementById("reset");

let  hour=0,min=0,sec=0,milisec=0;
let counter;

btnStart.onclick = ()=>{
    btnStart.style.display="none";
    btnPause.style.display="block";
    startStopwatch();
};
btnPause.onclick = ()=>{
    btnPause.style.display="none";
    btnResume.style.display="block";
    btnReset.style.display="block";
    clearInterval(counter);
};
btnResume.onclick= ()=>{
    btnResume.style.display="none";
    btnReset.style.display="none";
    btnPause.style.display="block"
    startStopwatch()
}
btnReset.onclick= ()=>{
  btnStart.style.display="block";
  btnResume.style.display="none";
    btnReset.style.display="none";
    hour=0;
    min=0;
    sec=0;
    milisec=0;
     Hr.innerText=hour;
        Min.innerText=min;
        Sec.innerText=sec;
        Milisec.innerText=milisec;
        
}


function stopStopwatch(){
  counter= setInterval(()=>{
        milisec+=50;
        if(milisec==1000){
            milisec=0;
            sec+=1;
        }
        if(sec==60){
            sec=0;
            min+=1;
        }
        if(min==60){
            min+=0;
            hour+=1;
        }
        Hr.innerText=hour;
        Min.innerText=min;
        Sec.innerText=sec;
        Milisec.innerText=milisec;
        
    },50);
}

function startStopwatch(){
   counter= setInterval(()=>{
        milisec+=50;
        if(milisec==1000){
            milisec=0;
            sec+=1;
        }
        if(sec==60){
            sec=0;
            min+=1;
        }
        if(min==60){
            min+=0;
            hour+=1;
        }
        Hr.innerText=hour;
        Min.innerText=min;
        Sec.innerText=sec;
        Milisec.innerText=milisec;
        
    },50);
}

