import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import SwiperCore, { Navigation, Pagination ,SwiperOptions, Autoplay, EffectCoverflow, Thumbs } from 'swiper';
SwiperCore.use([Navigation, Pagination, Autoplay, EffectCoverflow, Thumbs ]);

@Component({
  selector: 'app-best-clean',
  templateUrl: './best-clean.component.html',
  styleUrls: ['./best-clean.component.scss'],
})
export class BestCleanComponent {
  @Input() sliderElements!: any[];
  @Input() sliderTitle!: any;
  @Input() sliderTitleAr!: any;
  @Input() fontColor!: any;
  thumbsSwiper: any;
  constructor(private translateService: TranslateService) {}

  // swiperConfig: SwiperOptions = {
  //   slidesPerView: 1,
  //   spaceBetween: 10,
  //   navigation: true,
  //   // autoplay: {
  //   //   delay: 2000,
  //   //   disableOnInteraction: false
  //   // },
  //   effect: 'coverflow',
  //   coverflowEffect: {
  //     rotate: 50,
  //     stretch: 0,
  //     depth: 100,
  //     modifier: 1,
  //     slideShadows: false,
  //   },
  //   breakpoints: {
  //     320: {
  //       slidesPerView: 1,
  //       spaceBetween: 10,
  //     },
  //     720: {
  //       slidesPerView: 2,
  //       spaceBetween: 20,
  //     },
  //     992: {
  //       slidesPerView: 3,
  //       spaceBetween: 20,
  //     },
  //     1200: {
  //       slidesPerView: 3,
  //       spaceBetween: 20,
  //     },
  //   },
  // };



  swiperConfig: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 10,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
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
        slidesPerView: 4,
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
