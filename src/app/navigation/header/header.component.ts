import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter();
  constructor(private background: ThemeService) { }

  ngOnInit() {
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
  toggleDarkTheme(checked: boolean) {
    this.background.setDarkTheme(checked);
  }
}
