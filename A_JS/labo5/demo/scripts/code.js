const imageChange = () => {
    let image = document.getElementById('img');  // Gebruik de juiste ID
    image.src = "https://scontent-bru2-1.xx.fbcdn.net/v/t39.30808-6/457506574_823946173203519_4592721586136160389_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yURJZwVlwt8Q7kNvgGlRUFI&_nc_oc=AdiWOXbwpgMQuT2foRdr7DXkjmMKzh8p7xb_0m74AvSPC5SJwLKAc-MhTAFyqpJROLTkQOOKjz5d3_uYTmRQ5OI8&_nc_zt=23&_nc_ht=scontent-bru2-1.xx&_nc_gid=AAyOayHNFaVFYfWDEPO_cST&oh=00_AYHiPoLcF7Tac93z2a19S3xqo7AgUvXnZe8SJrHp_fQr9Q&oe=67D5EDD0";
};

const setup = () => {
    let image = document.getElementById('img'); // Zorg ervoor dat de juiste ID wordt gebruikt
    image.addEventListener("mouseover", imageChange);
};

window.addEventListener("load", setup);
