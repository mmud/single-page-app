window.onload = () =>{
var bar = document.querySelector(".fa-bars");
var times = document.querySelector(".fa-times");
var menu = document.getElementById("menu")

if(bar != null){
    bar.addEventListener("click", ()=>{
        menu.classList.add("active");
    })
}

if(times !=null){
    times.addEventListener("click", ()=>{
        menu.classList.remove("active");
    })
    }
}
