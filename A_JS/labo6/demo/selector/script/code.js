const setup = () => {
let lstParDiv  = document.querySelector('#myDIV>.color' );
for (let i = 0; i < lstParDiv.length; i++) {
    lstParDiv[i].addEventListener('click', changeDiv);
}
}
const changeDiv = () => {
    e.target.className = "colorParDiv";
}
window.addEventListener("load", setup);