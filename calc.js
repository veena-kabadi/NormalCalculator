let input=document.querySelector("#input");
let buttons=document.querySelectorAll("button");

let result="";
let buttonArray=Array.from(buttons);
buttonArray.forEach(button =>{
    button.addEventListener("click",(a)=>{
      if(a.target.innerHTML === '='){
        result=eval(result);
        input.value=result;
      }else if(a.target.innerHTML==='AC'){
        result="";
        input.value=result;
      }else if(a.target.innerHTML==='DEL'){
        result=result.substring(0,result.length-1);
        input.value=result;
      }
      else{
        result+=a.target.innerHTML;
        input.value=result;
      }
    })
})


let btn=document.querySelector("#btn");
let curmode="dark";
let x=btn.addEventListener("click",()=>{
if(curmode==="light")
{
   curmode="dark";
   document.querySelector("body").style.backgroundColor="rgb(31, 23, 42)";
   
}else{
   curmode="light";
   document.querySelector("body").style.backgroundColor="white";
}

}

)