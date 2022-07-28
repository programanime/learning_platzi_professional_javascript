import {MediaPlayer} from "./player.js";
import {AutoPlay} from "./plugins/AutoPlay.js";

const player = new MediaPlayer(
    ".movie", 
    "#playButton", 
    "#muteButton", 
    [ new AutoPlay() ]
);
var nombre = "daniel";