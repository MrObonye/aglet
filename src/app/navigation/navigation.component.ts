import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild('nav', { static: false }) navList: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  toggle() {
    if (this.navList.nativeElement.classList.contains('active')) {
      this.navList.nativeElement.classList.remove('active');
    } else {
      this.navList.nativeElement.classList.add('active')
    }

  }
}
