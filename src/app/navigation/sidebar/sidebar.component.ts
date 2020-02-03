import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {
  isDarkTheme: Observable<boolean>;
  @Output() sidenavClosed = new EventEmitter();

  constructor(
    private themeService: ThemeService
  ) { }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  sidenavClose() {
    this.sidenavClosed.emit();
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }
}
