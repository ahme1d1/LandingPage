import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { AppService } from './app.service';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: any;
  stories : any
  constructor(
    private appService: AppService,
    private titleService: Title,
    private renderer: Renderer2,
    private translateService: TranslateService,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  ngOnInit(): void {
    this.initializeApp()
    this.loadData();
    this.appService.getUserStories().subscribe(
      (res) => {

        this.stories = res.data;
      },
      (error) => {
        console.error('Error fetching Instagram stories:', error);
      }
    );
    this.appService.getUserReels().subscribe((res) => {
      this.stories = res.data;
    })
  }

  loadData() {
    this.appService.getData().subscribe((res) => {
      this.data = res.data;
      const lang = this.translateService.getDefaultLang();
      this.titleService.setTitle(lang === 'ar' ? res.data.footer_title_ar : res.data.footer_title);
      this.setFavicon(`${environment.url}${res.data.logo_path}`);
    });
  }

  setFavicon(faviconPath: string) {
    const link: HTMLLinkElement = this.renderer.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = faviconPath;

    const head: HTMLHeadElement = document.head;
    head.appendChild(link);
  }

  private initializeApp(): void {
    const lang = localStorage.getItem('lang') || 'en';
    this.translateService.setDefaultLang(lang);
    // this.document.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }
}
