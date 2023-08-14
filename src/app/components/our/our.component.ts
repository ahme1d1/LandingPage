import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-our',
  templateUrl: './our.component.html',
  styleUrls: ['./our.component.scss']
})
export class OurComponent {
  @Input() leftSectionTitle!: any;
  @Input() leftSectionDescription!: any;
  @Input() rightSectionTitle!: any;
  @Input() rightSectionDescripiton!: any;
  @Input() leftSectionTitleAr!: any;
  @Input() leftSectionDescriptionAr!: any;
  @Input() rightSectionTitleAr!: any;
  @Input() rightSectionDescripitonAr!: any;
  @Input() fontColor!: any;
  
  constructor(private translateService: TranslateService) {}

  get currentLang(): string {
    return this.translateService.getDefaultLang();
  }

}
