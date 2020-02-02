import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  isDarkTheme: Observable<boolean>;
  @Output() sidenavToggle = new EventEmitter();
  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }
}
