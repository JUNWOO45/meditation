import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit, OnDestroy {
  isDarkTheme: Observable<boolean>;
  isAuth: boolean = false;
  authSubscription: Subscription;

  @Output() sidenavClosed = new EventEmitter();

  constructor(
    private themeService: ThemeService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    })
  }

  sidenavClose() {
    this.sidenavClosed.emit();
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
