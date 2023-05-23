import { Component , Input, ViewEncapsulation } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y   } from 'swiper';


// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y ]);

@Component({
  selector: 'app-best-clean',
  templateUrl: './best-clean.component.html',
  styleUrls: ['./best-clean.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class BestCleanComponent {
  @Input() sliderElements!: any[];
  @Input() sliderTitle!: any;
}
