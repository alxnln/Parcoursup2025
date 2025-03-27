function click1() {
    const clicked = document.getElementById("valid-1").value;
    const paragraph = document.querySelector("p.commentaire-1");
    paragraph.innerHTML = clicked;
}

function applyCross1() {
    const paragraph = document.querySelector("p.commentaire-1");
    paragraph.classList.toggle("cross");
}


function click2() {
    const cliquee2 = document.getElementById("valid-2").value;
    const para2 = document.querySelector("p.commentaire-2");
    para2.innerHTML = cliquee2;
}

function applyCross2() {
    const paragraph = document.querySelector("p.commentaire-2");
    paragraph.classList.toggle("cross");
}


function click3() {
    const cliquee3 = document.getElementById("valid-3").value;
    const para3 = document.querySelector("p.commentaire-3");
    para3.innerHTML = cliquee3;
}

function applyCross3() {
    const paragraph = document.querySelector("p.commentaire-3");
    paragraph.classList.toggle("cross");
}


function click4() {
    const cliquee4 = document.getElementById("valid-4").value;
    const para4 = document.querySelector("p.commentaire-4");
    para4.innerHTML = cliquee4;
}

function applyCross4() {
    const paragraph = document.querySelector("p.commentaire-4");
    paragraph.classList.toggle("cross");
}



const p = document.querySelector("p");

function applyBold() {
    const el = document.querySelector("div.carnet");
    el.classList.toggle("bold");
}

/* 
change_backround_1.onclick = applyColor; 
setAttribute("style","color:pink; radiusBorder:20px");
*/

function applyItalic() {
    const el = document.querySelector("div.carnet");
    el.classList.toggle("italic");
}

function applyUnderline() {
    const el = document.querySelector("div.carnet");
    el.classList.toggle("underline");
}

function applyBlue() {
    const el = document.querySelector("div.carnet");
    el.classList.toggle("blue");
}



el.onclick = applyBold;
document.querySelector(".typet").addEventListener("click", applyBold);
document.getElementById("cross3").onclick = applyCross3;