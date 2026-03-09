const menuBtn = document.getElementById("menuBtn");
const reserveBtn = document.getElementById("reserveBtn");
const kontaktBtn = document.getElementById("kontaktBtn")

const menuModal = document.getElementById("menuModal");
const reserveModal = document.getElementById("reserveModal");
const kontaktModal = document.getElementById("kontaktModal")

const closeBtns = document.querySelectorAll(".closeBtn");


// åpne menu
menuBtn.onclick = function(){
    menuModal.style.display = "flex";
}

// åpne reserver
reserveBtn.onclick = function(){
    reserveModal.style.display = "flex";
}
// åpne kontakt
kontaktBtn.onclick = function(){
    kontaktModal.style.display = "flex";
}


// lukk med x
closeBtns.forEach(btn => {
    btn.onclick = function(){
        btn.parentElement.parentElement.style.display = "none";
    }
});


// klikk utenfor modal
window.onclick = function(event){

    if(event.target == menuModal){
        menuModal.style.display = "none";
    }

    if(event.target == reserveModal){
        reserveModal.style.display = "none";
    }

    if(event.target == kontaktModal){
        kontaktModal.style.display = "none";
    }

}