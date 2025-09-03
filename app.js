let boxes=document.querySelectorAll(".box")
let reset=document.querySelector(".reset-btn")
let msgcontainer=document.querySelector(".msg-container")
let newbtn=document.querySelector("#new-btn")
let turn=document.querySelector("#turn");
let count=0;
let turn0=true;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
reset.addEventListener("click",()=>{
  turn0=true;
  count=0;
  turn.innertext="Turn :O";
  enablebox();

})
const newgame=(()=>{
  
  turn0=true;
  count=0;
  checkturn(turn0);
  enablebox();
  
  msgcontainer.classList.add("hide");
})
newbtn.addEventListener("click",newgame)
const enablebox=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}
const disablebox=()=>{
  for(let box of boxes){
    box.disabled=true;
    
  }
}
let checkturn=(turn0)=>{
  if(turn0){
    turn.innerText="Turn : O"
  }else{
    turn.innerText="Turn : x"
  }
}
boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    
    if(turn0){
      box.innerText="0";
      turn0=false;
    }else{
      box.innerText="x";
      turn0=true;
    }
    checkturn(turn0);
    
    box.disabled=true;
    count++;
    let iswinner=checkwinner();
    if(count==9&& !iswinner){
      drawgame();
    }

  })
})
const drawgame=()=>{
  msg.innerText=`Draww ,Try new game `;
  msgcontainer.classList.remove("hide");
  disablebox();
}
const showwinner=(pos1value)=>{
  msg.innerText=`Congratulationss! winner is "${pos1value}"`;
  msgcontainer.classList.remove("hide");
  disablebox();
  
}
const checkwinner=()=>{
  for(let pattern of winPatterns){
    let pos1value=boxes[pattern[0]].innerText
    let pos2value=boxes[pattern[1]].innerText
    let pos3value=boxes[pattern[2]].innerText

    if(pos1value!=""&&pos2value!=""&& pos3value!=""){
      if(pos1value===pos2value && pos2value===pos3value){
        showwinner(pos1value);
        return true;
       
        
      }
    }
  }
  return false;
}
