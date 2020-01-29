import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {

  @Output() sidenavClosed = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sidenavClose() {
    this.sidenavClosed.emit();
  }
}
