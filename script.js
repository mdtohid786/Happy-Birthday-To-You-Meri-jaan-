// Envelope Open Animation

const envelope = document.getElementById("envelope");
const invite = document.getElementById("invite");

envelope.addEventListener("click", function () {

    envelope.classList.add("open");

    setTimeout(() => {
        document.querySelector(".envelope-section").style.display = "none";
        invite.classList.remove("hidden");
    }, 1000);

});


// Scratch Card

const cover = document.getElementById("cover");

cover.addEventListener("click", function () {
    cover.style.opacity = "0";
    cover.style.pointerEvents = "none";
});


// Music Button

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.onclick = function(){

if(playing){
music.pause();
playing=false;
musicBtn.innerHTML="🎵";
}else{
music.play();
playing=true;
musicBtn.innerHTML="⏸";
}

};
