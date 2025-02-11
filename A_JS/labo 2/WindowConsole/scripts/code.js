const setup = () => {
    window.alert("Geef nog een extra naam");

    let confirmResult = window.confirm("Geef nog een extra naam");
    console.log("Confirm return value:", confirmResult);

    let promptResult = window.prompt("Geef nog een extra naam", "default");
    console.log("Prompt return value:", promptResult);
}

window.addEventListener("load", setup);
