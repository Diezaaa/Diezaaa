let open_btn = document.getElementById("menu_btn")
let menu = document.getElementById("mobile_nav")
let close_btn = document.getElementById("close_btn")
const menu_style = `
    position: absolute;
    border-radius: 50px;
    width: calc(100vw - 20px);
    height: calc(100vh - 20px);
    background-color: rgba(61, 61, 61, 0.5);
    backdrop-filter: blur(22px);
    -webkit-backdrop-filter: blur(22px);
    font-size: 2.2rem;
    color: white;
    font-family: "Orbitron", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;`

open_btn.addEventListener("click", () => {
    if (open_btn.getAttribute("class") === "closed") {
        menu.style.transition = "all 1s"
        menu.style.cssText = menu_style
    }
})

close_btn.addEventListener("click", () => {
    menu.style.display = "none"

})