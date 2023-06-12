import { Component , Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as Headroom from 'headroom.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() navbarIcons!: any[];
  @Input() navbarColor!: any;

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.initHeadRoom();
  }

  initHeadRoom() {
    let myElement: any = document.querySelector('header');
    const headroom = new Headroom(myElement, {
      offset: 50,
      classes: {
        // when element is initialised
        initial: 'theHeader--fixed',
        // when scrolling up
        pinned: 'theHeader--pinned',
        // when scrolling down
        unpinned: 'theHeader--unpinned',
        // when above offset
        top: 'theHeader--top',
        // when below offset
        notTop: 'theHeader--not-top',
        // when at bottom of scoll area
        bottom: 'theHeader--bottom',
        // when not at bottom of scroll area
        notBottom: 'theHeader--not-bottom',
        // when frozen method has been called
        frozen: 'theHeader--frozen',
      },
    });
    headroom.init();
  }

  changeLangage(lang: string) {
    localStorage.setItem('lang', lang);
    window.location.reload();
  }

  get currentLang(): string {
    return this.translateService.getDefaultLang();
  }

}
