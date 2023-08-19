import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CleaningServicesComponent } from './components/cleaning-services/cleaning-services.component';
import { ValueComponent } from './components/value/value.component';
import { OurComponent } from './components/our/our.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { BestCleanComponent } from './components/best-clean/best-clean.component';
import { SwiperModule } from 'swiper/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SafePipe } from './shared/pipes/safe.pipe';
import { UrlPrefixPipe } from './shared/pipes/url-prefix.pipe';
import { HomeImagesComponent } from './components/home-images/home-images.component';
import { HomeVideosComponent } from './components/home-videos/home-videos.component';
import { StoriesComponent } from './components/stories/stories.component';
import { ImageComponent } from './shared/components/image/image.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { BarRatingModule } from "ngx-bar-rating";
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    CleaningServicesComponent,
    ValueComponent,
    OurComponent,
    FooterComponent,
    HeaderComponent,
    BestCleanComponent,
    SafePipe,
    UrlPrefixPipe,
    HomeImagesComponent,
    HomeVideosComponent,
    StoriesComponent,
    ImageComponent,
    ReviewsComponent,
    ContactUsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    HttpClientModule,
    LazyLoadImageModule,
    BarRatingModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    AngularSvgIconModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
