const setup = () => {
    let btnNewParagraph = document.getElementsByName("btnNewParagraph")[0];

    const newP = () =>{
        let div = document.querySelector("div");
        let br = document.createElement("br");
        let textNode = document.createTextNode("Hello World!");
        div.appendChild(br);
        div.appendChild(textNode);
    }
    btnNewParagraph.addEventListener("click", newP);
}
window.addEventListener("load", setup);