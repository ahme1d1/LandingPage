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
import { HttpClientModule } from '@angular/common/http';

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
    BestCleanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
