const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesbtn = document.querySelector(".YES_BTN");
const nobtn = document.querySelector(".NO_BTN");

yesbtn.addEventListener("click", ()=>{
    question.innerHTML = "¡TE AMO TAMBIEN!";
    gif.src = "../img/loveGIF.gif";
});

nobtn.addEventListener("mouseover", ()=> {
    const noBTNReact = nobtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBTNReact.width;
    const maxY = window.innerHeight - noBTNReact.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    nobtn.style.left = randomX + 'px';
    nobtn.style.top = randomY + 'px';

});