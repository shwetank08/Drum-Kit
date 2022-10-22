const A = document.querySelector('#boom');
const S = document.querySelector('#sounds_clap');
const W = document.querySelector('#sounds_hihat');
const D = document.querySelector('#sounds_kick');
const F = document.querySelector('#sounds_openhat');
const G = document.querySelector('#sounds_ride');
const H = document.querySelector('#sounds_snare');
const J = document.querySelector('#sounds_tink');
const K = document.querySelector('#sounds_tom');

let pressed = false;


window.addEventListener('keypress',(e)=>{
    if(e.key.toUpperCase() === 'A'){
        let song = document.createElement('audio');
        song.src = "./Music/boom.wav";
        song.currentTime = 0;
        song.play();
        A.classList.remove('key');
        A.classList.add('playing');
    }
    else if(e.key.toUpperCase() === 'S'){
        const audio = document.createElement('audio');
        audio.src="./Music/sounds_clap.wav";
        audio.play();
        S.classList.remove('key');
        S.classList.add('playing');
    }else if(e.key.toUpperCase() === 'W'){
        const audio = document.createElement('audio');
        audio.src="./Music/sounds_hihat.wav";
        audio.play();
        W.classList.remove('key');
        W.classList.add('playing');
    }else if(e.key.toUpperCase() === 'D'){
        const audio = document.createElement('audio');
        audio.src="./Music/sounds_kick.wav";
        audio.play();
        D.classList.remove('key');
        D.classList.add('playing');
    }else if(e.key.toUpperCase() === 'F'){
        const audio = document.createElement('audio');
        audio.src="./Music/sounds_openhat.wav";
        audio.play();
        F.classList.remove('key');
        F.classList.add('playing');
    }else if(e.key.toUpperCase() === 'G'){
        const audio = document.createElement('audio');
        audio.src="./Music/sounds_ride.wav";
        audio.play();
        G.classList.remove('key');
        G.classList.add('playing');
    }else if(e.key.toUpperCase() === 'H'){
        const audio = document.createElement('audio');
        audio.src="./Music/sounds_snare.wav";
        audio.play();
        H.classList.remove('key');
        H.classList.add('playing');
    }else if(e.key.toUpperCase() === 'J'){
        const audio = document.createElement('audio');
        audio.src="./Music/sounds_tink.wav";
        audio.play();
        J.classList.remove('key');
        J.classList.add('playing');
    }else if(e.key.toUpperCase() === 'K'){
        const audio = document.createElement('audio');
        audio.src="./Music/sounds_tom.wav";
        audio.play();
        K.classList.remove('key');
        K.classList.add('playing');
    }
})

window.addEventListener('keyup',(e)=>{
    if(e.key.toUpperCase() === 'A'){
        if(A.classList.contains('playing')){
            console.log("Inside playing condition");
            A.classList.remove('playing');
            A.classList.add('key');
        }
    }
    else if(e.key.toUpperCase() === 'S'){
        if(S.classList.contains('playing')){
            console.log("Inside playing condition");
            S.classList.remove('playing');
            S.classList.add('key');
        }
    }else if(e.key.toUpperCase() === 'W'){
        if(W.classList.contains('playing')){
            console.log("Inside playing condition");
            W.classList.remove('playing');
            W.classList.add('key');
        }
    }else if(e.key.toUpperCase() === 'D'){
        if(D.classList.contains('playing')){
            console.log("Inside playing condition");
            D.classList.remove('playing');
            D.classList.add('key');
        }
    }else if(e.key.toUpperCase() === 'F'){
        if(F.classList.contains('playing')){
            console.log("Inside playing condition");
            F.classList.remove('playing');
            F.classList.add('key');
        }
    }else if(e.key.toUpperCase() === 'G'){
        if(G.classList.contains('playing')){
            console.log("Inside playing condition");
            G.classList.remove('playing');
            G.classList.add('key');
        }
    }else if(e.key.toUpperCase() === 'H'){
        if(H.classList.contains('playing')){
            console.log("Inside playing condition");
            H.classList.remove('playing');
            H.classList.add('key');
        }
    }else if(e.key.toUpperCase() === 'J'){
        if(J.classList.contains('playing')){
            console.log("Inside playing condition");
            J.classList.remove('playing');
            J.classList.add('key');
        }
    }else if(e.key.toUpperCase() === 'K'){
        if(K.classList.contains('playing')){
            console.log("Inside playing condition");
            K.classList.remove('playing');
            K.classList.add('key');
        }
    }
})

