import { Component , Input, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import SwiperCore, { Navigation, Pagination ,SwiperOptions, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Pagination, Autoplay ]);

@Component({
  selector: 'app-best-clean',
  templateUrl: './best-clean.component.html',
  styleUrls: ['./best-clean.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class BestCleanComponent {
  @Input() sliderElements!: any[];
  @Input() sliderTitle!: any;
  @Input() sliderTitleAr!: any;
  @Input() fontColor!: any;

  constructor(private translateService: TranslateService) {}

  swiperConfig: SwiperOptions = {
    spaceBetween: 0,
    slidesPerView: 1,
    navigation: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    loop: true
  };

  get currentLang(): string {
    return this.translateService.getDefaultLang();
  }
}
