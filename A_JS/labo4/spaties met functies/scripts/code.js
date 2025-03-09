let button = document.getElementById('button');
let inputTekst = document.getElementById("inputTekst");
let inputZoekwaarde = document.getElementById("inputZoekwaarde");
let output = document.getElementById("output");

const setup = () => {
    const zoekTekstIndexOf = (inputZoekwaarde) => {
        let result = "";
        if (inputTekst.value.trim().indexOf(inputZoekwaarde) != -1) {
            result = "Tekst bevat het woordje " + inputZoekwaarde;
            output.innerHTML = result;
        } else {
            result = inputZoekwaarde + " niet gevonden!";
            output.innerHTML = result;
        }
        return result;

    }
    const zoekTekstLastIndexOf = (inputZoekwaarde) => {
        let result = "";
        if (inputTekst.value.trim().lastIndexOf(inputZoekwaarde) != -1) {
            result = "Tekst bevat het woordje " + inputZoekwaarde;
            output.innerHTML = result;
        } else {
            result = inputZoekwaarde + " niet gevonden!";
            output.innerHTML = result;
        }
        return result;

    }
    document.getElementById("button").addEventListener("click", () =>{
        let returnTekst = zoekTekstIndexOf(inputTekst.value);
        let returnTekst2 = zoekTekstLastIndexOf(inputTekst.value);
        console.log(returnTekst);
    });


}



window.addEventListener("load", setup);

