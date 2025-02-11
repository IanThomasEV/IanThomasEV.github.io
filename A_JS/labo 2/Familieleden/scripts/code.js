const setup = () => {
        let family = ['Ian', 'Georgia', 'Roman','Freddie', 'Adrian', 'Serah'];
        console.log(family.length);
        console.log(family[0]);
        console.log(family[2]);
        console.log(family[4]);
       //Met een functie
    // family.push(prompt('Geef nog een extra naam'));
    VoegNaamToe(family);
        console.log(family);

        console.log(family.join());

}

const VoegNaamToe = (array) =>{
    array.push(prompt('Geef nog een extra naam'))
}
window.addEventListener("load", setup);