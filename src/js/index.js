import '../scss/main.scss';

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const image=document.querySelector("#protect");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click",() => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))


    image.addEventListener("click",()=>{
        var testV = 1;
        var pass1 = prompt('Strona dostępna jest wyłącznie dla klientów. Proszę podaj hasło by przejść dalej.',' ');
        while (testV < 2) {
            if (pass1.toLowerCase() == "tost") {
                open('prepare.html');
                break;
            } 
            testV+=1;
            var pass1 = prompt('Odmowa dostępu, hasło jest nieprawidłowe. Wpisz hasło ponownie.','Password');
        }
        if (pass1.toLowerCase()!="password" & testV ==3) history.go(-1);
        return " ";
    } )
    