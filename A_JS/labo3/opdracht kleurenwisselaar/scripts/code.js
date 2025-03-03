const setup = () => {
    let button = document.getElementsByTagName('button');
    for(let i = 0; i<button.length; i++){
        button[i].addEventListener('click', (e) => {
            let huidigeKleur = e.target.style.backgroundColor;
            if(huidigeKleur === "" || huidigeKleur === "white") {
                button[i].style.backgroundColor = 'darkred';
                button[i].style.fontWeight = 'bold';
                button[i].style.color= 'white';
            }
            else{
                button[i].style.backgroundColor = null;
                button[i].style.fontWeight = null;
                button[i].style.color= null;
            }
        })
    }
}

window.addEventListener("load", setup);