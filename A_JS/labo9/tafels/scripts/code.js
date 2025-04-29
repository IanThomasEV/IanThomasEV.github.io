const setup = () => {
    let go = document.getElementById("btnSubmit");
    go.addEventListener("click", () => {
        let number = document.getElementById("inpGetal").value;
        newTable(number);
    });
    initializeStart(localStorage.getItem("Storage"));
}

const newTable = (number, save = true, timestamp = null) => {
    let baseNumber = number;
    if (isNaN(baseNumber)) {
        window.alert("Please enter a number");
        return false;
    } else {
        console.log("its a number " + baseNumber);
        let output = document.getElementById("output");
        if (baseNumber === false || baseNumber === "") return; // prevent empty or invalid input

        let nieuweDatum = new Date();
        let tijd = timestamp || `${nieuweDatum.getHours()}:${nieuweDatum.getMinutes()}:${nieuweDatum.getSeconds()}`;

        if (save) {
            saveToStorage(baseNumber, tijd);
        }
        console.log(baseNumber);
        let table = createElement("table");
        let thead = createElementWithText("thead", "Tafel van " + baseNumber + " aangemaakt op: " + tijd);
        table.appendChild(thead);
        for (let i = 0; i <= 10; i++) {
            let tr = createElement("tr");
            let td = createElementWithText("td", baseNumber + " x " + i + " = " + baseNumber * i);
            tr.appendChild(td);
            table.appendChild(tr);
        }

        output.appendChild(table);
        document.getElementById("inpGetal").value = "";
    }
}

const createElement = (element) => {
    let e = document.createElement(element);
    return e;
}

const createElementWithText = (element, text) => {
    let e = document.createElement(element);
    e.appendChild(document.createTextNode(text));
    return e;
}

const saveToStorage = (number, timestamp) => {
    let stored = localStorage.getItem("Storage");
    let numbers = stored ? JSON.parse(stored) : [];
    numbers.push({ number, timestamp });
    localStorage.setItem("Storage", JSON.stringify(numbers)); // Save the updated array to localStorage
}

const initializeStart = (start) => {
    let numbers = start ? JSON.parse(start) : [];
    for (let i = 0; i < numbers.length; i++) {
        newTable(numbers[i].number, false, numbers[i].timestamp); // Pass the timestamp
        console.log("INIT:" + numbers[i].number);
    }
}

window.addEventListener("load", setup);
