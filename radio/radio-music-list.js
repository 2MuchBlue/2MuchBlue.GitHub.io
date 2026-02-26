
class RadioSong {
    constructor( path, trackName, artist, durationInSeconds, isGag = false ){
        this.path = path;
        this.trackName = trackName;
        this.artist = artist;
        this.duration = durationInSeconds;
        this.isGag = isGag; // if it is an "Ad" (there are none. these are just sillies between some songs)
    }
}

let songs = [
    new RadioSong("https://2muchblue.github.io/Audio/OutsideTheFoxElementSongFull.wav", "Outside the Fox Main Theme", "Blue", 37),
    new RadioSong("https://2muchblue.github.io/Audio/Crystal.wav", "Crystal Waves", "Blue", 96),
    new RadioSong("https://2muchblue.github.io/Audio/Room2DrumAndBulletGame.wav", "Boss 2 from Drum & Bass (a game", "Blue)", 36),
    new RadioSong("https://2muchblue.github.io/Audio/WarmDusk.wav", "Warm Dusk", "Blue", 42)
];