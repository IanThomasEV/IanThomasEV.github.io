const setup = () => {
    let start = new Date();
    let verjaardag = new Date('2006-04-21');


    let echteVerjaardag = new Date(verjaardag);


    verjaardag.setFullYear(start.getFullYear());

    if (verjaardag < start) {
        verjaardag.setFullYear(start.getFullYear() + 1);
    }


    let verschil = verjaardag.getTime() - start.getTime();
    let dagenTotVerjaardag = Math.ceil(verschil / (1000 * 60 * 60 * 24));


    let verschilLeeftijd = start.getTime() - echteVerjaardag.getTime();
    let aantalDagenGeleefd = Math.ceil(verschilLeeftijd / (1000 * 60 * 60 * 24));

    console.log("Start: " + start);
    console.log("Nog aantal dagen tot je verjaardag: " + dagenTotVerjaardag);
    console.log("U leeft al: " + aantalDagenGeleefd);
};

window.addEventListener("load", setup);
