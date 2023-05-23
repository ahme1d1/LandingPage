import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cleaning-services',
  templateUrl: './cleaning-services.component.html',
  styleUrls: ['./cleaning-services.component.scss']
})
export class CleaningServicesComponent {
  @Input() services!: any[];
}
