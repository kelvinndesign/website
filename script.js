const preload = document.querySelector("#preload");
const preloadLogo = document.querySelector("#preload-logo");
const primaryNav = document.querySelector(".primary-nav");
const hamburger = document.querySelector("#hamburger");

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        preloadLogo.classList.add('show');
        preloadLogo.classList.remove('hidden');
    })

    setTimeout(() => {
        preload.classList.add('hidden')
    }, 1000)
})

hamburger.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        hamburger.setAttribute("aria-expanded", true);
    } else {
        primaryNav.setAttribute("data-visible", false);
        hamburger.setAttribute("aria-expanded", false);
    }
});