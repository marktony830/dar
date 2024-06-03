const inputEL = document.querySelector(".input");

const bodyEL = document.querySelector("body");

inputEL.checked = false
updatebody()
function updatebody(){
    if(inputEL.checked){
bodyEL.style.backgroundColor = "black"

    }else{
        bodyEL.style.backgroundColor = "white"
    }
}
inputEL.addEventListener("input",()=>{
    updatebody()
})