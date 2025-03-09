let input = document.getElementById("tekstje");
const zin = "an";

const setup = () => {
    function tellenIndexOf(tekst, zin) {
        let telling = 0;
        let index = tekst.indexOf(zin);
        while (index !== -1) {
            telling++;
            index = tekst.indexOf(zin, index + 1);
        }
        return telling;
    }

    function tellenLastIndexOf(tekst, zin) {
        let telling = 0;
        let index = tekst.lastIndexOf(zin);
        while (index !== -1) {
            telling++;
            index = tekst.lastIndexOf(zin, index - 1);
        }
        return telling;
    }

    console.log("aantal keer gevonden: " + tellenIndexOf(input.textContent, zin));
    console.log("aantal keer gevonden: " + tellenLastIndexOf(input.textContent, zin));
};
window.addEventListener("load", setup);