const setup = () => {

    let sentance = "Gisteren zat de jongen op de stop en at de helft van de appel";
    let oorspronkelijk = "de";
    let vervanging  ="het";
    while(sentance.indexOf(oorspronkelijk) !== -1){

        let voor = sentance.substring(0, sentance.indexOf(oorspronkelijk));
        let na = sentance.substring(sentance.indexOf(oorspronkelijk)+oorspronkelijk.length, sentance.length);
        sentance = voor + vervanging + na;
        console.log(sentance);

    }

}
window.addEventListener("load", setup);