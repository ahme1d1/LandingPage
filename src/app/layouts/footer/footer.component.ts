import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() footerLogoPath!: any;
  @Input() footerTitle!: any;
  @Input() footerDescription!: any;
  @Input() footerTitleAr!: any;
  @Input() footerDescriptionAr!: any;
  @Input() footerIcons!: any;
  @Input() fontColor!: any;
  
  constructor(private translateService: TranslateService) {}

  get currentLang(): string {
    return this.translateService.getDefaultLang();
  }

}
