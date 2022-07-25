export function MediaPlayer(idMedia, idPlayButton, idMuteButton){
    this.media = document.querySelector(idMedia);
    this.playButton = document.querySelector(idPlayButton);
    this.muteButton = document.querySelector(idMuteButton);

    this.playButton.onclick = () => {
      this.play();
    }
    this.muteButton.onclick = () => {
      this.mute();
    };
   
  }

  MediaPlayer.prototype.play = function(){
    if (this.media.paused) {
      this.media.play();
      this.playButton.textContent = "Pause";
    } else {
      this.media.pause();
      this.playButton.textContent = "Play";
    }
  }

  MediaPlayer.prototype.mute = function(){
    if (this.media.muted) {
      this.media.muted = false;
      this.muteButton.textContent = "Mute";
    } else {
      this.media.muted = true;
      this.muteButton.textContent = "Unmute";
    }
}