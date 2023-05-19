let body = document.getElementById("body");
let white = document.getElementById("white");
let black = document.getElementById("black");
let violet = document.getElementById("violet");
let aqua = document.getElementById("aqua");
let pg = document.getElementById("pg");


white.addEventListener("click", changeBg=()=>{
    body.style.backgroundColor="white";
    pg.style.color="blue";
})
black.addEventListener("click", changeBg=()=>{
    body.style.backgroundColor="black";
    pg.style.color="white";
})
violet.addEventListener("click", changeBg=()=>{
    body.style.backgroundColor="violet";
    pg.style.color="black";
})
aqua.addEventListener("click", changeBg=()=>{
    body.style.backgroundColor="aqua";
    pg.style.color="black";
})
