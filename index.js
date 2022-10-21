const A = document.querySelector('#boom');
const S = document.querySelector('#sounds_clap');
const W = document.querySelector('#sounds_hihat');
const D = document.querySelector('#sounds_kick');
const Z = document.querySelector('#sounds_openhat');
const X = document.querySelector('#sounds_ride');
const J = document.querySelector('#sounds_snare');
const K = document.querySelector('#sounds_tink');
const L = document.querySelector('#sounds_tom');



A.addEventListener('click',()=>{
    const audio = document.createElement('audio');
    audio.setAttribute('src',"./Music/boom.wav");
    audio.play();
})
S.addEventListener('click',()=>{
    const audio = document.createElement('audio');
    audio.src="./Music/sounds_clap.wav";
    audio.play();

})
W.addEventListener('click',()=>{
    const audio = document.createElement('audio');
    audio.src="./Music/sounds_hihat.wav";
    audio.play();

})
D.addEventListener('click',()=>{
    const audio = document.createElement('audio');
    audio.src="./Music/sounds_kick.wav";
    audio.play();
})
Z.addEventListener('click',()=>{
    const audio = document.createElement('audio');
    audio.src="./Music/sounds_openhat.wav";
    audio.play();
})
X.addEventListener('click',()=>{
    const audio = document.createElement('audio');
    audio.src="./Music/sounds_ride.wav";
    audio.play();
})
J.addEventListener('click',()=>{
    const audio = document.createElement('audio');
    audio.src="./Music/sounds_snare.wav";
    audio.play();
})
K.addEventListener('click',()=>{
    const audio = document.createElement('audio');
    audio.src="./Music/sounds_tink.wav";
    audio.play();

})
L.addEventListener('click',()=>{
    const audio = document.createElement('audio');
    audio.src="./Music/sounds_tom.wav";
    audio.play();

})