import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.less']
})
export class TrainingComponent implements OnInit {
  currentVideo = '../../assets/beach.mp4';
  currentAudio = '../../assets/beach.mp3';

  rainVideo = '../../assets/rain.mp4';
  beachVideo = '../../assets/beach.mp4';

  rainAudio = '../../assets/rain.mp3';
  beachAudio = '../../assets/beach.mp3';
  constructor() { }

  ngOnInit() {
  }

  rain(audio) {
    this.currentVideo = this.rainVideo;
    this.currentAudio = this.rainAudio;
    audio.load();
    audio.play();
  }

  beach(audio) {
    this.currentVideo = this.beachVideo;
    this.currentAudio = this.beachAudio;
    audio.load();
    audio.play();
  }

  stop(audio) {
    audio.pause();
  }

  replay(audio) {
    audio.play();
  }
}
