const trackHolder = document.getElementById("trackHolder");
const volSliderElement = document.getElementById("volSlider");
const activeTrackAudioElement = document.getElementById("activeTrackAudioElement");
const activeTrackTitleElement = document.getElementById("activeTrackTitleElement")

let nextUpTracks = [];
nextUpTracks.push(...songs); // add all from the song list

let activeSongCursor = 0;

document.body.addEventListener("click", init, {once : true} );

function init(){
    let shouldBeCurrentSong = getSongAtTime(nextUpTracks);
    activeSongCursor = shouldBeCurrentSong.index;

    updateElementTracks();

    activeTrackAudioElement.play();
}

function createTrackElement(trackName = "unnamed track", artist = "Blue"){
    let trackDiv = document.createElement("div");
    trackDiv.classList = "track";
    trackDiv.innerHTML = `
        <span>${trackName} by ${artist}</span>
    `;
    return trackDiv;
}

function updateElementTracks(){
    trackHolder.innerHTML = ""; // clears list

    activeTrackAudioElement.volume = volSliderElement.value; // sets volume in case it was screwed with unintentanally
    
    activeTrackAudioElement.src = nextUpTracks[activeSongCursor].path; // sets the new song to be played.
    
    if(nextUpTracks[activeSongCursor].isGag === true){
        activeTrackTitleElement.innerText = `Brought to You By ${nextUpTracks[activeSongCursor].artist}!`;
    }else{
        activeTrackTitleElement.innerText = `Current Song: ${nextUpTracks[activeSongCursor].trackName} by ${nextUpTracks[activeSongCursor].artist}`;
    }
    
    for(let i = 0; i < nextUpTracks.length; i++){
        let j = (activeSongCursor + i) % nextUpTracks.length;
        trackHolder.appendChild(createTrackElement(nextUpTracks[j].trackName, nextUpTracks[j].artist));
    }
    trackHolder.children[0].classList += " selected";
}

volSliderElement.oninput = (e) => {
    activeTrackAudioElement.volume = volSliderElement.value;
};

activeTrackAudioElement.onended = (e) => {
    init();
};

function calculateTotalProgramLengthOfSongList(songList = songs){
    let totalLength = 0;
    for(let i = 0; i < songList.length; i++){
        totalLength += songList[i].duration;
    }
    return totalLength;
}

function getSongAtTime(songList = songs, seconds = new Date().getTime() * 0.001){
    let totalProgramLength = calculateTotalProgramLengthOfSongList(songList);
    let totalLength = 0;
    for(let i = 0; i < songList.length + 1; i++){
        if(totalLength >= seconds % totalProgramLength){
            return {song: songList[i - 1], time: seconds, index : i - 1};
        }
        if(i > songList.length){ return null; }
        totalLength += songList[i].duration;
    }
    return null;
}