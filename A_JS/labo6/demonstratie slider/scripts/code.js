let setup = () => {
    let sliders = document.getElementsByClassName("slider");
    let save = document.getElementsByClassName("save")[0];
    let swatchContainer = document.getElementById("swatches");

    for (let slider of sliders) {
        slider.addEventListener("input", updateColor);
        slider.addEventListener("change", updateColor);
    }

    save.addEventListener("click", saveColor);
    updateColor();
};



let updateColor = () => {
    let sliders = document.getElementsByClassName("slider");
    let r = sliders[0].value;
    let g = sliders[1].value;
    let b = sliders[2].value;

    let labels = document.getElementsByClassName("label");
    let colorBlock = document.getElementsByClassName("colorDemo")[0];

    colorBlock.style.backgroundColor = `rgb(${r},${g},${b})`;

    labels[0].innerHTML = "Rood " + r;
    labels[1].innerHTML = "Groen " + g;
    labels[2].innerHTML = "Blauw " + b;

    console.log(`De waarde van de rode slider is momenteel: ${r}`);
    console.log(`De waarde van de groene slider is momenteel: ${g}`);
    console.log(`De waarde van de blauwe slider is momenteel: ${b}`);
};

let saveColor = () => {
    let sliders = document.getElementsByClassName("slider");
    let r = sliders[0].value;
    let g = sliders[1].value;
    let b = sliders[2].value;

    let swatchContainer = document.getElementById("swatches");
    let swatch = document.createElement("div");
    swatch.className = "swatch";
    swatch.style.backgroundColor = `rgb(${r},${g},${b})`;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.className = "delete";
    deleteBtn.onclick = () => swatch.remove();

    swatch.onclick = () => {
        sliders[0].value = r;
        sliders[1].value = g;
        sliders[2].value = b;
        updateColor();
    };

    swatch.appendChild(deleteBtn);
    swatchContainer.appendChild(swatch);
};

window.addEventListener("load", setup);
