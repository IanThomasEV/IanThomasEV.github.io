let setup = () => {
    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("input", updateColor);
        sliders[i].addEventListener("change", updateColor);
    }
    updateColor();
};

let updateColor = () => {
    let sliders = document.getElementsByClassName("slider");

    let r = sliders[0].value;
    let g = sliders[1].value;
    let b = sliders[2].value;

    let labels = document.getElementsByClassName("label");
    let colorBlock = document.getElementsByClassName("colorDemo");
    for(let i=0; i < sliders.length; i++) {
        colorBlock[0].style.backgroundColor = `rgb(${r},${g},${b})`;
        if( i === 1){
            labels[1].innerHTML = "Groen " + sliders[i].value;
        }else if( i === 0){
            labels[0].innerHTML = "Rood " + sliders[i].value;
        }else if( i === 2){
            labels[2].innerHTML = "Blauw " + sliders[i].value;
        }
    }

    console.log("de waarde van de groene slider is momenteel : "+red);
    console.log("de waarde van de rood slider is momenteel : "+green);
    console.log("de waarde van de  blauwe slider is momenteel : "+blue);
};

window.addEventListener("load", setup);
