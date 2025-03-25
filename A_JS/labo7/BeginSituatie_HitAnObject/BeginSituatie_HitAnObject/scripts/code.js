let IMAGE_COUNT = 5, IMAGE_SIZE = 48, IMAGE_PATH_PREFIX = "images/", IMAGE_PATH_SUFFIX = ".png";
let score = 0, isGameOver = false, currentImage = null, image = null, speelveld = null, scoreText = null;

const setup = () => {
    image = document.getElementsByTagName("img")[0];
    speelveld = document.getElementsByTagName("div")[0];
    scoreText = document.createElement("div");
    document.getElementsByName("btnPlay")[0].addEventListener("click", startGame);
}

const startGame = () => {
    score = 0;
    isGameOver = false;
    moveIt();
    image.addEventListener("click", clicked);
    speelveld.addEventListener("click", fieldClick);
}

const moveIt = () => {
    let left = Math.floor(Math.random() * (speelveld.clientWidth - image.offsetWidth));
    let top = Math.floor(Math.random() * (speelveld.clientHeight - image.offsetHeight));
    image.style.position = "absolute";
    image.style.left = left + "px";
    image.style.top = top + "px";
}

const clicked = () => {
    if (image.src.slice(-5) === "0" + IMAGE_PATH_SUFFIX) {
        isGameOver = true;
        window.alert("Je bent verloren!");
        resetGame();
    } else {
        score++;
        scoreText.textContent = "Score: " + score;
        if (!scoreText.parentNode) speelveld.appendChild(scoreText);
        imageChange();
        moveIt();
    }
}

const imageChange = () => {
    image.src = IMAGE_PATH_PREFIX + Math.floor(Math.random() * IMAGE_COUNT) + IMAGE_PATH_SUFFIX;
}

const fieldClick = () => {
    if (image.src.slice(-5) === "0" + IMAGE_PATH_SUFFIX) {
        imageChange();
        moveIt();
    }
}

const resetGame = () => {
    speelveld.removeEventListener("click", fieldClick);
    image.removeEventListener("click", clicked);
    if (scoreText.parentNode) scoreText.remove();
}

window.addEventListener("load", setup);
