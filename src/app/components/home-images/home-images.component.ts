import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home-images',
  templateUrl: './home-images.component.html',
  styleUrls: ['./home-images.component.scss']
})
export class HomeImagesComponent implements OnInit {
  @Input() images!: any[];
  @Input() firstSectionTitle: any;
  @Input() firstSectionTitleAr: any;
  @Input() firstSectionDescription: any;
  @Input() firstSectionDescriptionAr: any;

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
  }

  get currentLang(): string {
    return this.translateService.getDefaultLang();
  }

}
