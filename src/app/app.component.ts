import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  title = 'meditation';
  shouldRun = true;
  isDarkTheme: Observable<boolean>;

  constructor(
    private themeService: ThemeService
  ) {
  }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }
}
