import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cleaning-services',
  templateUrl: './cleaning-services.component.html',
  styleUrls: ['./cleaning-services.component.scss']
})
export class CleaningServicesComponent {
  @Input() services!: any[];
  @Input() fontColor!: any;

  constructor(private translateService: TranslateService) {}

  get currentLang(): string {
    return this.translateService.getDefaultLang();
  }

}
