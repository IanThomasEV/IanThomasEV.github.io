const setup = () => {
    let gemeenten = [];
    let select = document.getElementById("inputGemeentes");
    let prompt1;

  /*  while ((prompt1 = prompt("Geef gemeentes op - typ 'stop' om te stoppen")) !== "stop") {
        if (prompt1) gemeenten.push(prompt1);
    }
   */

    prompt1 = prompt("Geef gemeentes op - typ 'stop' om te stoppen");
    while(prompt1.localeCompare("stop") !== 0){
        if (prompt1) gemeenten.push(prompt1);
        prompt1 = prompt("Geef gemeentes op - typ 'stop' om te stoppen");
   //Moet je er nog eens bij vertellen aanders loopt ie, je hebt nog geen stop gezegd maar vraagt ook niet om een nieuwe prompt te tonen!
    }

    gemeenten.sort();

    for (let i = 0; i < gemeenten.length; i++) {
        select.innerHTML += `<option value="${gemeenten[i]}">${gemeenten[i]}</option>`;
    }
};

window.addEventListener("load", setup);
