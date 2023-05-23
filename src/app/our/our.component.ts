import { Component, Input } from '@angular/core';

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

}
