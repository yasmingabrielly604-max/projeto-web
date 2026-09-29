// =========================================================
// MENU HAMBÚRGUER E DROPDOWN
// =========================================================

const navbar = document.querySelector(".navbar");
const menuToggle = document.querySelector(".menu-toggle");
const dropdown = document.querySelector(".dropdown");
const dropdownToggle = document.querySelector(".dropdown-toggle");

// =========================================================
// MENU HAMBÚRGUER
// =========================================================

if (navbar && menuToggle) {

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

}


// =========================================================
// DROPDOWN
// =========================================================

if (dropdown && dropdownToggle) {

    dropdownToggle.addEventListener("click", function () {

        const dropdownAberto =
            dropdown.classList.toggle("aberto");

        dropdownToggle.setAttribute(
            "aria-expanded",
            dropdownAberto
        );

    });

}


    // Fechar dropdown ao clicar fora

document.addEventListener("click", function (evento) {

    if (dropdown && dropdownToggle) {

        if (!dropdown.contains(evento.target)) {

            dropdown.classList.remove("aberto");

            dropdownToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }

});

}


// =========================================================
// FECHAR MENU AO CLICAR EM UM LINK
// =========================================================

const links = document.querySelectorAll(
    ".menu-links a"
);

links.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navbar && menuToggle) {

            navbar.classList.remove("menu-aberto");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Abrir menu"
            );

        }

    });

});


// =========================================================
// RESETAR MENU AO VOLTAR PARA DESKTOP
// =========================================================

window.addEventListener("resize", function () {

    if (window.innerWidth > 767) {

        if (navbar && menuToggle) {

            navbar.classList.remove("menu-aberto");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Abrir menu"
            );

        }

        if (dropdown && dropdownToggle) {

            dropdown.classList.remove("aberto");

            dropdownToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }

});
        }

        if (dropdown && dropdownToggle) {

            dropdown.classList.remove("aberto");

            dropdownToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }

});


// =========================================================
// TOAST
// =========================================================

const btnToast = document.getElementById("btn-toast");
const toast = document.getElementById("toast");

if (btnToast && toast) {

    btnToast.addEventListener("click", function () {

        toast.classList.add("mostrar");

        setTimeout(function () {

            toast.classList.remove("mostrar");

        }, 4000);

    });

}


// =========================================================
// MODAL
// =========================================================

const btnModal = document.getElementById("btn-modal");
const modal = document.getElementById("modal");
const modalFechar = document.getElementById("modal-fechar");
const modalCancelar = document.getElementById("modal-cancelar");
const modalConfirmar = document.getElementById("modal-confirmar");


// Abrir modal

function abrirModal() {

    if (modal) {

        modal.classList.add("aberto");

        document.body.style.overflow = "hidden";

    }

}


// Fechar modal

function fecharModal() {

    if (modal) {

        modal.classList.remove("aberto");

        document.body.style.overflow = "";

    }

}


// Botão abrir

if (btnModal) {

    btnModal.addEventListener(
        "click",
        abrirModal
    );

}


// Botão X

if (modalFechar) {

    modalFechar.addEventListener(
        "click",
        fecharModal
    );

}


// Botão cancelar

if (modalCancelar) {

    modalCancelar.addEventListener(
        "click",
        fecharModal
    );

}


// Botão confirmar

if (modalConfirmar) {

    modalConfirmar.addEventListener(
        "click",
        function () {

            fecharModal();

            if (toast) {

                toast.textContent =
                    "Sucesso! A ação foi confirmada.";

                toast.classList.add("mostrar");

                setTimeout(function () {

                    toast.classList.remove(
                        "mostrar"
                    );

                }, 4000);

            }

        }
    );

}


// =========================================================
// FECHAR MODAL CLICANDO FORA
// =========================================================

if (modal) {

    modal.addEventListener(
        "click",
        function (evento) {

            if (evento.target === modal) {

                fecharModal();

            }

        }
    );

}


// =========================================================
// FECHAR MODAL COM ESC
// =========================================================

document.addEventListener(
    "keydown",
    function (evento) {

        if (evento.key === "Escape") {

            fecharModal();

        }

    }
);
