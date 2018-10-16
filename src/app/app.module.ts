import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsComponent } from './calendar/events/events.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { MainComponent } from './ui/main/main.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { PostComponent } from './post/post.component';
import { AdsComponent } from './ads/ads.component';
import { WidgetCalendarComponent } from './calendar/widget-calendar/widget-calendar.component';


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    MainComponent,
    ReviewsComponent,
    PostComponent,
    AdsComponent,
    WidgetCalendarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
