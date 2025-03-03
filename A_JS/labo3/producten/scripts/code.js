const setup = () => {
    let prijzen = document.getElementsByClassName('prijs');
    let aantallen = document.getElementsByClassName('aantal');
    let percentages = document.getElementsByClassName('percentage');
    let totalen = document.getElementsByClassName('totalen');
    let button = document.getElementById('berekenButton');
    let totaal = document.getElementById('totaal');

    function berekenen() {
        let totaalBedrag = 0;

        for (let i = 0; i < prijzen.length; i++) {
            let percentage = 1 + parseFloat(percentages[i].textContent.replace("%", "")) / 100;
            let prijs = parseFloat(prijzen[i].textContent.replace(" Eur", ""));
            let aantal = parseInt(aantallen[i].value) || 0;

            let subTotaal = prijs * percentage * aantal;
            totalen[i].textContent = subTotaal.toFixed(2) + " Eur";
            totaalBedrag += subTotaal;
        }

        totaal.textContent = totaalBedrag.toFixed(2) + " Eur";
    }


    for (let i = 0; i < aantallen.length; i++) {
        aantallen[i].addEventListener('input', berekenen);
    }

    if (button) {
        button.addEventListener('click', berekenen);
    }
};

window.addEventListener("load", setup);
