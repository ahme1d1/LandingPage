import { Component, OnInit, Renderer2 } from '@angular/core';
import { AppService } from './app.service';
import { Title } from '@angular/platform-browser';

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
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.appService.getData().subscribe((res) => {
      this.data = res.data;
      this.titleService.setTitle(res.data.footer_title);
      this.setFavicon(`https://back-landing.genral.net/${res.data.footer_logo_path}`);
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
}
