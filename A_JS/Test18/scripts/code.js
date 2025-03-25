const setup = () => {
   // let statusKip = document.getElementById("inpStatusKip");
    let statusKip = document.getElementsByName("statusKip")[0];
    console.log(statusKip.value);
    let img = document.getElementById("img");
    let note = document.getElementById("note");
    let letter = document.getElementById("txtLetter");
    let aantal  =document.getElementById("aantal");

    const changeImage = () => {
        if (statusKip.value === "Met een ei") {
            img.src = "../images/with-egg.png";
            note.innerHTML = "Hierboven, een kip met een ei";
            console.log(img.src);
            console.log(note.value);

        } else {
            img.src = "C:\Users\IT\Desktop\Github\IanThomasEV.github.io\A_JS\Test18\images\without-egg.png";
            note.innerHTML = "Hierboven, een kip zonder een ei";
            console.log("niets")
        }

    }


    const telAantalKeer = () => {
        let count = 0;
        for (let i = 0; note.length; i++) {
            if(note.value.substring(i, i+1) == txtLetter.value) {
                count++;
            }
        }
        aantal.innerHTML = "Letter " + letter.value + " komt " + count + " aantal keren voor";
    }

    statusKip.addEventListener("select", changeImage);
    statusKip.addEventListener("change", changeImage);
    letter.addEventListener("change", telAantalKeer);

}
window.addEventListener("load", setup);