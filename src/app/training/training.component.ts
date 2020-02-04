import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.less']
})
export class TrainingComponent {
  rainAudio = '../../assets/rain.mp3';
  beachAudio = '../../assets/beach.mp3';
  commuterTrainAudio = '../../assets/commuter_train.mp3';

  @ViewChild('rain', null) private clickedRain: ElementRef;
  @ViewChild('beach', null) private clickedBeach: ElementRef;
  @ViewChild('commuterTrain', null) private clickedCommuterTrain: ElementRef;

  constructor(private renderer: Renderer2) { }

  onClickRain() {
    this.clickedRain.nativeElement.paused ?
    this.clickedRain.nativeElement.play() :
    this.clickedRain.nativeElement.pause()
  }

  onClickBeach() {
    this.clickedBeach.nativeElement.paused ?
    this.clickedBeach.nativeElement.play() :
    this.clickedBeach.nativeElement.pause()
  }

  onClickCommuterTrain() {
    console.log('train')
    this.clickedCommuterTrain.nativeElement.paused ?
    this.clickedCommuterTrain.nativeElement.play() :
    this.clickedCommuterTrain.nativeElement.pause()
  }
}
