const menuBtn = document.querySelector("#menub")
const menu = document.querySelector("#menu")

menuBtn.onclick = () => {
    if (menu.className === "hide") {
        document.querySelector('#menu').className = "show";
    }
    else {
        menu.className === "show"
        document.querySelector('#menu').className = "hide";

    }
}
const body = document.querySelector("body");
const modeBtn = document.querySelector("#mode");
const hero = document.querySelector(".photo")
const left = document.querySelector('.left')
modeBtn.addEventListener("click", () => {
    if
        (body.classList.toggle("dark")) {
        hero.style.backgroundImage = "url('https://i.ytimg.com/vi/FN0AWuHMNEI/maxresdefault.jpg')"
        body.style.transition = '.5s';
        localStorage.setItem('mode', 'dark');
        left.style.backgroundColor = 'black'

        
    }

    else {
        hero.style.backgroundImage = "url('https://www.shoppingaddict.fr/blogs/media/articles/pandora/stvalentin/saint-valentin-pandora.jpg')"
        localStorage.setItem('mode', 'light')
    }
})
if (localStorage.getItem('mode') === null) {
    localStorage.setItem('mode', 'light')
} else {
    if (localStorage.getItem('mode') === 'light') {
        hero.style.backgroundImage = "url('https://www.shoppingaddict.fr/blogs/media/articles/pandora/stvalentin/saint-valentin-pandora.jpg')"
        body.className = 'light';
        left.style.backgroundColor = 'white'

       
    } else {
        hero.style.backgroundImage = "url('https://i.ytimg.com/vi/FN0AWuHMNEI/maxresdefault.jpg')"
        body.style.transition = '.5s';
        body.className = 'dark';
        left.style.backgroundColor = 'black'
    }
}