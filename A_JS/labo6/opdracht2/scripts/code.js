const setup = () => {

    let items = document.getElementsByTagName('li');
    for(let i = 0; i < items.length; i++) {
        items[i].setAttribute("class", "list");
    }
let myPic = document.createElement("img");
    myPic.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSygPJATpn6RxNeMlRDiGClL61WEwhBwAYvCg&s");
    myPic.setAttribute("alt", "mezelf");
    document.body.appendChild(myPic);
}
window.addEventListener("load", setup);