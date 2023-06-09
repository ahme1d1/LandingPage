import { Component, Input, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import SwiperCore, { Navigation, Pagination ,SwiperOptions, Autoplay, EffectCoverflow } from 'swiper';
SwiperCore.use([Navigation, Pagination, Autoplay, EffectCoverflow ]);

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
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    },
    loop: true,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
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

  pauseAllVideos() {
    const iframes = Array.from(document.querySelectorAll('iframe'));
    iframes.forEach((iframe: HTMLIFrameElement) => {
      // iframe.contentWindow?.postMessage( '{"event":"command", "func":"pauseVideo", "args":""}', '*');

      // const videoSrc = iframe.src;
      // iframe.src = videoSrc; // Reload the video source to pause it
    });
  }

  get currentLang(): string {
    return this.translateService.getDefaultLang();
  }
}
