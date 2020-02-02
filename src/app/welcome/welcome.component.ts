import { Component, OnInit } from '@angular/core';
import { BackgroundServiceService } from '../background-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent {

  constructor(
    private background: BackgroundServiceService
  ) { }

  toggleDarkTheme(checked: boolean) {
    this.background.setDarkTheme(checked);
  }
}
