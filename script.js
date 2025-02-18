function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    menu.style.maxHeight = menu.style.maxHeight === "0px" || menu.style.maxHeight === "" ? "200px" : "0px";
}
