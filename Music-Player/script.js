let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
// Volume elements
const volumeSlider = document.getElementById("volume");
const volumeIcon = document.getElementById("volumeIcon");
const volumeBtn = document.getElementById("volumeBtn");
let lastNonZeroVolume = 0.7; // fallback if none saved

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

// Initialize volume from storage or default
try{
    const saved = localStorage.getItem('playerVolume');
    if(saved !== null){
        const v = Math.min(1, Math.max(0, parseFloat(saved)));
        song.volume = isNaN(v) ? 0.7 : v;
    }else{
        song.volume = 0.7;
    }
}catch(e){ song.volume = 0.7; }
lastNonZeroVolume = song.volume > 0 ? song.volume : 0.7;
if(volumeSlider){ volumeSlider.value = Math.round(song.volume * 100); }
updateVolumeIcon(song.volume);

function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.replace("fa-pause", "fa-play");

    }else{
        song.play();
        ctrlIcon.classList.replace("fa-play", "fa-pause");
    }
}

if(song.play()){
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.replace("fa-play", "fa-pause");
}

// Volume handling
function updateVolumeIcon(vol){
    if(!volumeIcon) return;
    volumeIcon.classList.remove('fa-volume-xmark','fa-volume-low','fa-volume-high');
    if(vol === 0){
        volumeIcon.classList.add('fa-volume-xmark');
    }else if(vol < 0.35){
        volumeIcon.classList.add('fa-volume-low');
    }else{
        volumeIcon.classList.add('fa-volume-high');
    }
}

function setVolumeFromSlider(val){
    const v = Math.min(100, Math.max(0, Number(val)))/100;
    song.volume = v;
    if(v > 0){ lastNonZeroVolume = v; }
    try{ localStorage.setItem('playerVolume', String(song.volume)); }catch(e){}
    updateVolumeIcon(song.volume);
}

if(volumeSlider){
    volumeSlider.addEventListener('input', (e)=> setVolumeFromSlider(e.target.value));
}

function toggleMute(){
    if(song.volume > 0){
        lastNonZeroVolume = song.volume;
        song.volume = 0;
        if(volumeSlider) volumeSlider.value = 0;
    }else{
        song.volume = lastNonZeroVolume || 0.7;
        if(volumeSlider) volumeSlider.value = Math.round(song.volume*100);
    }
    try{ localStorage.setItem('playerVolume', String(song.volume)); }catch(e){}
    updateVolumeIcon(song.volume);
}

if(volumeBtn){ volumeBtn.addEventListener('click', toggleMute); }