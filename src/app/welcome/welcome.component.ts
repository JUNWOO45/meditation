import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent {

  constructor(
    private background: ThemeService
  ) { }

  toggleDarkTheme(checked: boolean) {
    this.background.setDarkTheme(checked);
  }
}
