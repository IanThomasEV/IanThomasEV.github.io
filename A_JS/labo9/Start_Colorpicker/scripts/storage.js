const storeSliderValues = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;
    if(typeof(Storage)=="undefined") {
        console.log("Sorry, uw browser ondersteunt geen web storage...");
    } else {
localStorage.setItem("red", red);
localStorage.setItem("green", green);
localStorage.setItem("blue", blue);
    }
}

const restoreSliderValues = () => {
let red = localStorage.getItem("red");
let green = localStorage.getItem("green");
let blue = localStorage.getItem("blue");
document.getElementById("sldRed").value = red;
document.getElementById("sldGreen").value = green;
document.getElementById("sldBlue").value = blue;
}

const storeSwatches = () => {
    let swatches = [];
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    let swatch = {
        red: red,
        green: green,
        blue: blue
    };


    let swatchesJSON = localStorage.getItem("swatchesColorPicker");
    if (swatchesJSON) {
        swatches = JSON.parse(swatchesJSON);
    }

    swatches.push(swatch);

    localStorage.setItem("swatchesColorPicker", JSON.stringify(swatches));
}



const restoreSwatches = () => {
    let swatchesJSON = localStorage.getItem("swatchesColorPicker");
    if (swatchesJSON) {
        let swatches = JSON.parse(swatchesJSON);
        swatches.forEach(swatch => {
            addSwatchComponent(swatch.red, swatch.green, swatch.blue);
        });
    }
}


