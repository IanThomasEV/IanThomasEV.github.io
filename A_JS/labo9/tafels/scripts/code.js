const setup = () => {
    let go = document.getElementById("btnSubmit");
    go.addEventListener("click", checkNumber);
    console.log(go);
}

const checkNumber = () => {
    let number = document.getElementById("inpGetal").value;
    console.log(number);
    if(isNaN(number)) {
        window.alert("Please enter a number");
    }else{
        console.log("its a number" + number);
    }
}

const newTable = (number) => {
    let table = document.createElement("table");
    table.className = "table";

    let theader = document.createElement("theader");
}
window.addEventListener("load", setup);