import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import SwiperCore, { SwiperOptions, Autoplay} from 'swiper';
SwiperCore.use([ Autoplay]);

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  @Input() reviews!: any[];

  swiperConfig: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 10,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      720: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  };

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    console.log(this.reviews)
  }

  get currentLang(): string {
    return this.translateService.getDefaultLang();
  }

}
