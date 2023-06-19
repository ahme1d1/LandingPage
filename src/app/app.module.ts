import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CleaningServicesComponent } from './cleaning-services/cleaning-services.component';
import { BuildingServicesComponent } from './building-services/building-services.component';
import { LaundryServicesComponent } from './laundry-services/laundry-services.component';
import { ValueComponent } from './value/value.component';
import { OurComponent } from './our/our.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { BestCleanComponent } from './best-clean/best-clean.component';
import { SwiperModule } from 'swiper/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SafePipe } from './pipes/safe.pipe';
import { UrlPrefixPipe } from './pipes/url-prefix.pipe';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    CleaningServicesComponent,
    BuildingServicesComponent,
    LaundryServicesComponent,
    ValueComponent,
    OurComponent,
    FooterComponent,
    HeaderComponent,
    BestCleanComponent,
    SafePipe,
    UrlPrefixPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
