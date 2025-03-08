const open = document.querySelector(".open-sidebar-btn");
const closed = document.querySelector(".closed-sidebar-btn");
const container = document.querySelector(".container");

open.addEventListener("click", () => {
    container.style.display = "block";
});
closed.addEventListener("click", ()=>{
    container.style.display = "none";
});
