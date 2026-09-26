// =========================================================
// MENU HAMBÚRGUER E DROPDOWN
// =========================================================


// Seleciona o cabeçalho
const navbar = document.querySelector(".navbar");

// Seleciona o botão hambúrguer
const menuToggle = document.querySelector(".menu-toggle");

// Seleciona o menu principal
const menuLinks = document.querySelector(".menu-links");

// Seleciona o dropdown
const dropdown = document.querySelector(".dropdown");

// Seleciona o botão do dropdown
const dropdownToggle = document.querySelector(".dropdown-toggle");


// =========================================================
// MENU HAMBÚRGUER
// =========================================================

menuToggle.addEventListener("click", function () {

    const menuAberto =
        navbar.classList.toggle("menu-aberto");

    menuToggle.setAttribute(
        "aria-expanded",
        menuAberto
    );

    menuToggle.setAttribute(
        "aria-label",
        menuAberto
            ? "Fechar menu"
            : "Abrir menu"
    );

});


// =========================================================
// DROPDOWN
// =========================================================

dropdownToggle.addEventListener("click", function () {

    const dropdownAberto =
        dropdown.classList.toggle("aberto");

    dropdownToggle.setAttribute(
        "aria-expanded",
        dropdownAberto
    );

});


// =========================================================
// FECHAR DROPDOWN AO CLICAR FORA
// =========================================================

document.addEventListener("click", function (evento) {

    if (!dropdown.contains(evento.target)) {

        dropdown.classList.remove("aberto");

        dropdownToggle.setAttribute(
            "aria-expanded",
            "false"
        );
    }

});


// =========================================================
// FECHAR MENU AO CLICAR EM UM LINK
// =========================================================

const links = document.querySelectorAll(
    ".menu-links a"
);

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("menu-aberto");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Abrir menu"
        );

    });

});


// =========================================================
// RESETAR MENU AO VOLTAR PARA DESKTOP
// =========================================================

window.addEventListener("resize", function () {

    if (window.innerWidth > 767) {

        navbar.classList.remove("menu-aberto");

        dropdown.classList.remove("aberto");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        dropdownToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Abrir menu"
        );
    }

});
