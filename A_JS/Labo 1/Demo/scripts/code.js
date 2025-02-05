const setup = () => {
    let lblCursus = document.getElementById("lblCursus");
    lblCursus.addEventListener("mouseover", change);

   //document.getElementById("btnSend").addEventListener("click", show);
let btnSend = document.getElementById("btnSend");
btnSend.addEventListener("click", show);
}
const change = () => {
    let lblCursus = document.getElementById("lblCursus");
    lblCursus.className="cursus";
}
const show = () => {
    let txtName = document.getElementById("txtName");
    if (txtName && txtName.value !== "") {
        let name = txtName.value;
        alert("Jouw naam is " + name);
        console.log("Jouw naam is " + name);
        terroristDetection(name); // Functie aanroepen
    } else {
        alert("Voer een naam in.");
    }
};

const terroristDetection = (name) => {
    if (name === "adrian") {
        console.log("Terrorist detected");
    } else {
        console.log("Civilian detected");
    }
};
window.addEventListener("load", setup);