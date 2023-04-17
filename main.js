//Menu hamburguesa
const line1__bars = document.querySelector(".line1__bars-menu"),
  line2__bars = document.querySelector(".line2__bars-menu"),
  line3__bars = document.querySelector(".line3__bars-menu"),
  nav = document.querySelector(".menu-responsive"),
  backMenu = document.querySelector(".back-menu"),
  logo = document.getElementById("menu-logo"),
  menuEnlaces = document.querySelector(".menu-enlaces"),
  cruz = document.querySelector(".menu-cruz");

document.querySelector(".bars__menu").addEventListener("click", animateBars);

function animateBars() {
  /* line1__bars.classList.toggle("activeline1__bars-menu");
  line2__bars.classList.toggle("activeline2__bars-menu");
  line3__bars.classList.toggle("activeline3__bars-menu"); */
}

document.querySelector(".bars__menu").addEventListener("click", abrirMenu);

function abrirMenu() {
  if (window.innerWidth <= 600) {
    nav.style.right = "0px";
    nav.style.backgroundColor = "white";
    backMenu.style.display = "block";
    logo.style.color = "transparent";
    menuEnlaces.style.color = "black";
  }
}

document.querySelector(".back-menu").addEventListener("click", cerrarMenu);
menuEnlaces.addEventListener("click", cerrarMenu);
cruz.addEventListener("click", cerrarMenu);

function cerrarMenu() {
  if (window.innerWidth <= 600) {
    nav.style.right = "-100%";
    backMenu.style.display = "none";
    logo.style.color = "white";

  }
}

//Onscroll barra de navegacion y ScrollTop button
window.onscroll = function () { myFunction() };

function myFunction() {
  if ((document.body.scrollTop > 150 || document.documentElement.scrollTop > 150)) {
    document.getElementById("menu").style.backgroundColor = "white";
    document.getElementById("menu").style.color = "black";
    document.getElementById("menu").style.boxShadow = "1px 1px 1px 1px rgb(240, 239, 239)";
    document.getElementById("menu-enlaces").style.color = "black";
    document.querySelector(".subirPagina-contenedor").classList.add("mostrar");
  } else {
    document.getElementById("menu").style.backgroundColor = "transparent";
    document.getElementById("menu").style.color = "white";
    document.getElementById("menu-enlaces").style.color = "white";
    document.getElementById("menu").style.boxShadow = "none";
    document.querySelector(".subirPagina-contenedor").classList.remove("mostrar");
  }
}

document.querySelector(".subirPagina-boton").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

//ScrollReaveal JS Library
ScrollReveal({ distance: '60px' });
ScrollReveal().reveal('.main2-nailart',
  {
    origin: 'top',
    duration: 1000,
    easing: 'ease-in-out',
  });

ScrollReveal().reveal('.main2-kappingel',
  {
    origin: 'top',
    duration: 1000,
    easing: 'ease-in-out',
  });

ScrollReveal().reveal('.main2-softgel',
  {
    origin: 'top',
    duration: 1000,
    easing: 'ease-in-out',
  });

ScrollReveal().reveal('.main3-precios--nailart', {
  rotate: {
    x: 20,
    z: 20
  },
  duration: 1000
});
ScrollReveal().reveal('.main3-precios--kappingel', {
  rotate: {
    x: 20,
    z: 20
  },
  duration: 1000
});

ScrollReveal().reveal('.main3-precios--softgel', {
  rotate: {
    x: 20,
    z: 20
  },
  duration: 1000
});

ScrollReveal().reveal('.main3-precios--formaPago', { easing: 'ease-in' });

//Cargar mas