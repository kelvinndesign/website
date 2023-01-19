const primaryNav = document.querySelector(".primary-nav");
const hamburger = document.querySelector("#hamburger");

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