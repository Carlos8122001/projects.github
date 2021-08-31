
/*Indicador de la clase activo*/ 

window.addEventListener('load', () =>{
    const enlaces = document.querySelectorAll('#enlaces a');
    enlaces.forEach((elemento) => {
        elemento.addEventListener('click',(evento)=>{
            enlaces.forEach((enlaces) => enlaces.classList.remove('active')); 
            evento.target.classList.add('active');

        });
    } )
})

/*Menu responsive*/

const enlaces = document.getElementsByClassName("enlaces")[0];
const menu__contenedor = document.getElementsByClassName("menu__contenedor")[0];
const menu__icon = document.getElementById("menu__icon");
let abierto = false;

const toggleMenu = () =>{
    enlaces.classList.toggle("desplazamiento");
    enlaces.style.transition = "transform 0.7s ease-in-out";
}

menu__contenedor.addEventListener("click",function(){
 toggleMenu();
 if(document.querySelector(".enlaces.desplazamiento")){
     abierto = true;
 }else{
     abierto = false;
 }

})

window.addEventListener("click",function(e){
    this.console.log(e.target);
    if(abierto){
        if(e.target !== menu__icon){
            toggleMenu();
            abierto = false;
        }
    }
    
})

window.addEventListener("resize",function(){
    if(screen.width > 768){

        if(abierto){
            toggleMenu();
            enlaces.style.transition = "none";
            abierto = false;
        }

    }
})

/* Animaciones*/

window.sr = ScrollReveal();

sr.reveal('.home__picture', {
  duration: 1800,
  origin: "top",
});

sr.reveal('.home__texto', {
    duration:1800,
    origin: "top",
  });




