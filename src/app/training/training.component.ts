import { Component, OnInit, ViewChild, ElementRef, Renderer2, DoCheck } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.less']
})
export class TrainingComponent {
  rainAudio = '../../assets/rain.mp3';
  summerBeachAudio = '../../assets/summer_beach.mp3';
  commuterTrainAudio = '../../assets/commuter_train.mp3';
  hairCutAudio = '../../assets/haircut.mp3';
  winterWaveAudio = '../../assets/winter_wave.mp3';
  morningBirdsAudio = '../../assets/morning_birds.mp3';
  woodWithAxeAudio = '../../assets/wood_with_axe.mp3';
  campfireAudio = '../../assets/campfire.mp3';
  babblingStreamAudio = '../../assets/babbling_stream.mp3';
  tentAudio = '../../assets/tent.mp3';
  thunderAudio = '../../assets/thunder.mp3';

  rainVolume: number = 50;
  summerBeachVolume: number = 50;
  commuterTrainVolume: number = 50;
  hairCutVolume: number = 50;
  winterWaveVolume: number = 50;
  morningBirdsVolume: number = 50;
  woodWithAxeVolume: number = 50;
  campfireVolume: number = 50;
  babblingStreamVolume: number = 50;
  tentVolume: number = 50;
  thunderVolume: number = 50;


  @ViewChild('rain', { static: true }) public clickedRain: ElementRef;
  @ViewChild('beach', { static: true }) public clickedBeach: ElementRef;
  @ViewChild('commuterTrain', { static: true }) public clickedCommuterTrain: ElementRef;
  @ViewChild('hairCut', { static: true }) public clickedHairCut: ElementRef;
  @ViewChild('winterWave', { static: true }) public clickedWinterWave: ElementRef;
  @ViewChild('morningBirds', { static: true }) public clickedMorningBirds: ElementRef;
  @ViewChild('woodWithAxe', { static: true }) public clickedWoodWithAxe: ElementRef;
  @ViewChild('campfire', { static: true }) public clickedCampfire: ElementRef;
  @ViewChild('babblingStream', { static: true }) public clickedBabblingStream: ElementRef;
  @ViewChild('tent', { static: true }) public clickedTent: ElementRef;
  @ViewChild('thunder', { static: true }) public clickedThunder: ElementRef;

  constructor(private renderer: Renderer2) { }

  onClickRain() {
    this.clickedRain.nativeElement.paused ?
    this.clickedRain.nativeElement.play() :
    this.clickedRain.nativeElement.pause();
  }

  onClickBeach() {
    this.clickedBeach.nativeElement.paused ?
    this.clickedBeach.nativeElement.play() :
    this.clickedBeach.nativeElement.pause();
  }

  onClickCommuterTrain() {
    this.clickedCommuterTrain.nativeElement.paused ?
    this.clickedCommuterTrain.nativeElement.play() :
    this.clickedCommuterTrain.nativeElement.pause();
  }
  onClickHairCut() {
    this.clickedHairCut.nativeElement.paused ?
    this.clickedHairCut.nativeElement.play() :
    this.clickedHairCut.nativeElement.pause();
  }
  onClickWinterWave() {
    this.clickedWinterWave.nativeElement.paused ?
    this.clickedWinterWave.nativeElement.play() :
    this.clickedWinterWave.nativeElement.pause();
  }
  onClickMorningBirds() {
    this.clickedMorningBirds.nativeElement.paused ?
    this.clickedMorningBirds.nativeElement.play() :
    this.clickedMorningBirds.nativeElement.pause();
  }
  onClickedWoodWithAxe() {
    this.clickedWoodWithAxe.nativeElement.paused ?
    this.clickedWoodWithAxe.nativeElement.play() :
    this.clickedWoodWithAxe.nativeElement.pause();
  }
  onClickedCampfire() {
    this.clickedCampfire.nativeElement.paused ?
    this.clickedCampfire.nativeElement.play() :
    this.clickedCampfire.nativeElement.pause();
  }
  onClickedBabblingStream() {
    this.clickedBabblingStream.nativeElement.paused ?
    this.clickedBabblingStream.nativeElement.play() :
    this.clickedBabblingStream.nativeElement.pause();
  }
  onClickedTent() {
    this.clickedTent.nativeElement.paused ?
    this.clickedTent.nativeElement.play() :
    this.clickedTent.nativeElement.pause();
  }
  onClickedThunder() {
    this.clickedThunder.nativeElement.paused ?
    this.clickedThunder.nativeElement.play() :
    this.clickedThunder.nativeElement.pause();
  }
}
