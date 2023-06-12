import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { AppService } from './app.service';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: any;
  constructor(
    private appService: AppService,
    private titleService: Title,
    private renderer: Renderer2,
    private translateService: TranslateService,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  ngOnInit(): void {
    this.loadData();
    this.initializeApp()
  }

  loadData() {
    this.appService.getData().subscribe((res) => {
      this.data = res.data;
      this.titleService.setTitle(res.data.footer_title);
      this.setFavicon(`https://test.back-landing.genral.net/${res.data.footer_logo_path}`);
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
