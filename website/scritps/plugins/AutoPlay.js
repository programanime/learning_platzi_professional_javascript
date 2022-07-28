export function AutoPlay(){

}

AutoPlay.prototype.some = function(){

}

AutoPlay.prototype.run  = function(player){
    player.media.muted = true;
    player.media.autoplay = true;
}