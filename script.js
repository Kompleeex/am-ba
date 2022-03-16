window.addEventListener("load", init)

function $(elem){
    return document.querySelectorAll(elem);
}

function ID(elem){
    return document.getElementById(elem);
}

var lepes = 0;

function init(){
    var txt = "";
    for (let index = 0; index < 9; index++) {
        txt+= "<div></div>"
    }
    ID("keret").innerHTML = txt

var elem =$("#keret div");
for (let index = 0; index < elem.length; index++) {
        elem[index].addEventListener("click", kiiras);
}
for (let index = 0; index < elem.length; index++) {
    elem[index].addEventListener("mouseover", hatter1)
}
}

function kiiras(){
    if(lepes % 2 === 0){
    event.target.innerHTML = "X"
    }
    else{
        event.target.innerHTML = "O"
    }   

    event.target.removeEventListener("click",kiiras)
    event.target.className= "valasztott";
    lepes++
}

function hatter1(){
    event.target.className = "kiemel"
}

function hatter2(){
    event.target.className = ""
}