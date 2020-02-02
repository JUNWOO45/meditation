import { Component, OnInit } from '@angular/core';
import { BackgroundServiceService } from './background-service.service';
import { Observable } from 'rxjs';

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
    private background: BackgroundServiceService
  ) {
  }

  ngOnInit() {
    this.isDarkTheme = this.background.isDarkTheme;
  }
}
