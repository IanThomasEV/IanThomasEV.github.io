const setup = () => {
    let btnSubstring = document.getElementById("btnSubstring");  btnSubstring.addEventListener("click", substring);
}

window.addEventListener("load", setup);

const substring = () => {
    let start = parseInt(document.getElementById("txtStart").value); // Convert naar number
    let end = parseInt(document.getElementById("txtEnd").value); // Convert naar number
    let string = document.getElementById("txtInput").value;

    if (isNaN(start) || isNaN(end)) {
        document.getElementById("txtOutput").innerHTML = "Voer geldige nummers in.";
        return;
    }

    string = string.substring(start, end);
    document.getElementById("txtOutput").innerHTML = string;
}
