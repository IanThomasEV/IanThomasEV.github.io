const setup = () => {
    loadMovies();
}

let likeButtons = [];
let unlikeButtons = [];
let likedMovies = [];
let likeMovieList = [];
const loadMovies = () => {
    movies.forEach(movie => {
        let movieDiv = createElementWithClassName("div", "movie");
        //   console.log(movieDiv);

        let titleH1 = createElementWithClassNameAndText("h1", "title", movie.title);
        // console.log(movie.title);
        let image = createElementWithClassName("img", "image");
        image.setAttribute("src", "./" + movie.imageUrl);
        //     console.log(movie.imageUrl);

        let discriptionP = createElementWithClassNameAndText("p", "description", movie.description);
        //      console.log(movie.description);

        let buttons = createElementWithClassName("div", "buttons");
        let like = createElementWithClassName("i", "fas fa-thumbs-up movie");
        like.addEventListener("click", movieLike);
        likeButtons.push(like);
        likeMovieList.push(movie.title
        );
        console.log("Liked movie list: " +likeMovieList);
        console.log(likeButtons);
        let disLike = createElementWithClassName("i", "fas fa-thumbs-down movie");
        disLike.addEventListener("click", movieDisLike);
        unlikeButtons.push(disLike);
        buttons.appendChild(like);
        buttons.appendChild(disLike);


        movieDiv.appendChild(titleH1);
        movieDiv.appendChild(buttons);
        movieDiv.appendChild(image);
        movieDiv.appendChild(discriptionP);
        //    console.log(movieDiv);
        let movieListDiv = document.getElementById("movielist");
        movieListDiv.appendChild(movieDiv);
    })
}

const movieLike = () => {
    const likeButton = event.target;
    likeButton.style.color = "green";
    likeButton.removeEventListener("click", movieLike);
    let like = document.getElementById("like");
    number = Number(like.innerHTML);
    number += 1;
    like.innerText = number;
    likeButton.addEventListener("click", movieUnlike);
    const index = likeButtons.indexOf(likeButton);
    const unLikeButton = unlikeButtons[index];
    unLikeButton.removeEventListener("click", movieDisLike);
    likedMovie(index);
}

const movieUnDisLike = () => {
    const likeButton = event.target;
    likeButton.style.color = "black";
    const index = unlikeButtons.indexOf(likeButton);
    const unLikeButton = likeButtons[index];
    unLikeButton.addEventListener("click", movieLike);
    let dislike = document.getElementById("dislike");
    number = Number(dislike.innerHTML);
    number -= 1;
    dislike.innerText = number;
    likeButton.removeEventListener("click", movieUnDisLike);
    likeButton.addEventListener("click", movieDisLike);

}
const movieDisLike = () => {
    const likeButton = event.target;
    likeButton.style.color = "red";
    likeButton.removeEventListener("click", movieDisLike);
    likeButton.addEventListener("click", movieUnDisLike);
    let dislike = document.getElementById("dislike");
    number = Number(dislike.innerHTML);
    number += 1;
    dislike.innerText = number;
    const index = unlikeButtons.indexOf(likeButton);
    const unLikeButton = likeButtons[index];
    unLikeButton.removeEventListener("click", movieLike);
}
const createElementWithClassName = (element, className) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
}

const createElementWithClassNameAndText = (element, className, text) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    e.appendChild(document.createTextNode(text));
    return e;
}
const likedMovie = (index) => {
    const movieTitle = movies[index].title;

    let isAlreadyLiked = false;
    for (let i = 0; i < likedMovies.length; i++) {
        if (likedMovies[i] === movieTitle) {
            console.log("Al aanwezig - STOP");
            isAlreadyLiked = true;
        }
    }

    if (!isAlreadyLiked) {
        let likeContainer = document.getElementById("likebarmovies");
        let movieItem = createElementWithClassName("div", "likedMovieL");
        let description = createElementWithClassNameAndText("p", "descriptionL", movieTitle);
        let deletion = createElementWithClassName("i", "fas fa-trash");
        const removeContainer = () => {
            console.log("DESCI:" + description.innerHTML);
            let indexParam = -1;
            for (let i = 0; i < movies.length; i++) {
                if (movies[i].title === movieTitle && indexParam === -1) {
                    indexParam = i;
                }
            }

            if (indexParam !== -1) {
                unlikeWithParameter(likeButtons[indexParam]);
                likeContainer.removeChild(movieItem);
            }


        }
        deletion.addEventListener("click", removeContainer);

        movieItem.appendChild(description);
        movieItem.appendChild(deletion);
        likeContainer.appendChild(movieItem);
        likedMovies.push(movieTitle);

        console.log("Toegevoegd:", movieTitle);
    }

    console.log("Huidige likedMovies:", likedMovies);


};
const unlikeWithParameter = (button) => {
    console.log("Button" + button);
    const likeButton = button;
    const index = likeButtons.indexOf(likeButton);
    const movieTitle = movies[index].title;
    likeButton.addEventListener("click", movieLike);
    likeButton.style.color = "black";
    likeButton.removeEventListener("click", movieUnlike);

    const unLikeButton = unlikeButtons[index];
    unLikeButton.addEventListener("click", movieDisLike);

    let like = document.getElementById("like");
    let number = Number(like.innerHTML);
    number -= 1;
    like.innerText = number;

    const i = likedMovies.indexOf(movieTitle);
    if (i !== -1) {
        likedMovies.splice(i, 1);
    }
}

const movieUnlike = () => {

    const likeButton = event.target;
    likeButton.style.color = "black";
    const index = likeButtons.indexOf(likeButton);
    const unLikeButton = unlikeButtons[index];
    unLikeButton.addEventListener("click", movieDisLike);
    let like = document.getElementById("like");
    number = Number(like.innerHTML);
    number -= 1;
    like.innerText = number;
    likeButton.removeEventListener("click", movieUnlike);
    likeButton.addEventListener("click", movieLike);

    const movieTitle = movies[index].title;


    const likeContainer = document.getElementById("likebarmovies");
    const likedItems = likeContainer.getElementsByClassName("likedMovieL");

    for (let i = 0; i < likedItems.length; i++) {
        const description = likedItems[i].querySelector("p.descriptionL");
        if (description && description.textContent === movieTitle) {
            likeContainer.removeChild(likedItems[i]);
        }
    }

    for (let i = 0; i < likedMovies.length; i++) {
        if (likedMovies[i] === movieTitle) {
            likedMovies.splice(i, 1);
        }
    }

}

window.addEventListener("load", setup);