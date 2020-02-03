import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isDarkTheme: Observable<boolean>;
  @Output() sidenavToggle = new EventEmitter();

  isAuth: boolean = false;
  authSubscription: Subscription;

  constructor(
    private themeService: ThemeService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    console.log('this.isAuth : ', this.isAuth);
    this.isDarkTheme = this.themeService.isDarkTheme;
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
      console.log('AFTER : ', this.isAuth);
    })
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
    console.log('unsubscribed!!');
  }
}
