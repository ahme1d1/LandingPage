import { Component, Input, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination ,SwiperOptions, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Pagination, Autoplay ]);

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  @Input() stories!: any[];
  @Input() fontColor!: any;

  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    // navigation: true,
    pagination: true,
    // centeredSlides: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      720: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
