const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");

    lstPersonen.addEventListener('click', aanklikken);
};
let personen = [];

const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    let validatie = valideer();
    if(validatie === 0){
        console.log("geslaagd")
        let voornaam = document.getElementById('txtVoornaam');
        let achternaam = document.getElementById('txtFamilienaam');
        let geboortedatum = document.getElementById('txtGeboorteDatum');
        let email = document.getElementById('txtEmail');
        let aantalkids = document.getElementById('txtAantalKinderen');
        let contact={
            voornaamValue : voornaam.value,
            achternaamValue : achternaam.value,
            geboortedatumValue : geboortedatum.value,
            emailValue : email.value,
            aantalkidsValue : aantalkids.value,
        }


        let lstPersonen = document.getElementById("lstPersonen");
        if(lstPersonen.selectedIndex >= 0){
            personen[lstPersonen.selectedIndex] = contact;
            let alleOptions = document.querySelectorAll('option');
            // een bestaande persoon in de lijst passen we aan
            let aanpassen = alleOptions[lstPersonen.selectedIndex];
            aanpassen.value = voornaam.value + " " + achternaam.value;
            aanpassen.innerText = voornaam.value + " " + achternaam.value;
        }
        else {
            personen.push(contact);
            let optie = document.createElement("option");
            optie.innerText = voornaam.value + " " + achternaam.value;
            optie.value = voornaam.value + " " + achternaam.value;
            lstPersonen.appendChild(optie)
            console.log(personen[0])
        }
    } else {
        console.log('error');
    }
}

const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    let voornaam = document.getElementById('txtVoornaam');
    voornaam.value = '';
    let achternaam = document.getElementById('txtFamilienaam');
    achternaam.value = '';
    let geboortedatum = document.getElementById('txtGeboorteDatum');
    geboortedatum.value = '';
    let email = document.getElementById('txtEmail');
    email.value = '';
    let aantalkids = document.getElementById('txtAantalKinderen');
    aantalkids.value = '';
    let alleOptions = document.querySelectorAll('option');
    for(let i = 0; i < alleOptions.length; i++){
        alleOptions[i].selected = false;
    }
};
const aanklikken = () =>{
    console.log("Wohoo!")
    let show = document.getElementById("lstPersonen").selectedIndex;
    let contact = personen[show];
    document.getElementById('txtVoornaam').value = contact.voornaamValue;
    document.getElementById('txtFamilienaam').value = contact.achternaamValue;
    document.getElementById('txtGeboorteDatum').value = contact.geboortedatumValue;
    document.getElementById('txtEmail').value = contact.emailValue;
    document.getElementById('txtAantalKinderen').value = contact.aantalkidsValue;

}

window.addEventListener("load", setup);