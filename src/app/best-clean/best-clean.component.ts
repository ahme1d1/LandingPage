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

  fullSliderConfig: any = {
    spaceBetween: 16,
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    }
  };
  SecondSliderConfig: any = {
    spaceBetween: 16,
    slidesPerView: 1,
    breakpoints: {
      // when window width is >= 320px
      390: {
        slidesPerView: 1,
        spaceBetween: 8,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    }
  };
}
