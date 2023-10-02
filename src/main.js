function Darkmode() {
    const buttom= document.querySelector(".btn")
    const body= document.body
    buttom.addEventListener("click", () => {
        body.classList.toggle("dark")
 
    })

}

window.addEventListener('load', function () {
    setTimeout(function () {
        let loader = document.querySelector('.container');
        
        loader.classList.add("hidden") // Oculta el loader
    }, 2000); // 2000 milisegundos (2 segundos)
});

Darkmode()