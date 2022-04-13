const bar = document.getElementById('bar');
const off = document.getElementById('off');
const nav = document.getElementById('navbar');
const popup = document.getElementById('popup');

if (bar) {
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}

if (off) {
    off.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}
function openPopup(){
    popup.classList.add("open-Popup");
}
function closePopup(){
    popup.classList.remove("open-Popup");
}