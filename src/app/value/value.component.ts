import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss']
})
export class ValueComponent {
  @Input() lastSectionTitle!: any;
  @Input() lastSectionDescription!: any;
  @Input() lastSectionTitleAr!: any;
  @Input() lastSectionDescriptionAr!: any;
  @Input() fontColor!: any;
  
  constructor(private translateService: TranslateService) {}

  get currentLang(): string {
    return this.translateService.getDefaultLang();
  }

}
