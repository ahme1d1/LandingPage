import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import SwiperCore, { Pagination ,SwiperOptions, Autoplay } from 'swiper';
SwiperCore.use([ Pagination, Autoplay ]);

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
    pagination: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
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

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
  }

  get currentLang(): string {
    return this.translateService.getDefaultLang();
  }

}
