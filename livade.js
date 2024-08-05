let openimagesfun = document.getElementById("images");
let opencupimages = document.getElementById("cupimages");

function openclick(){
    openimagesfun.classList.add("show-images");
}
function closeclick(){
    openimagesfun.classList.remove("show-images");
}

function cupimg(){
    opencupimages.classList.add("show-cupimages");
}
function cupimg1(){
    opencupimages.classList.remove("show-cupimages");
}