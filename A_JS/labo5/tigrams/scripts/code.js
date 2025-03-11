const setup = () => {
    let submit = document.getElementById('submit');
    let ul = document.getElementById('list');
    let input = document.getElementById('input');

    const tigramGenerator = () => {
        let input = document.getElementById('input').value;
        for (let i = 0; i < input.length - 2; i++) {
            let tigramOuput = input.slice(i, i + 3);
            ul.innerHTML += `<li>${tigramOuput}</li>`;
        }
    }
    submit.addEventListener('click', tigramGenerator);
}
window.addEventListener("load", setup);
