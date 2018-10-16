import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsComponent } from './calendar/events/events.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { PostWidgetComponent } from './post/post-widget/post-widget.component';
import { AdsComponent } from './ads/ads.component';
import { WidgetCalendarComponent } from './calendar/widget-calendar/widget-calendar.component';
import { HomeComponent } from './ui/home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import {PostComponent} from './post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ReviewsComponent,
    PostWidgetComponent,
    PostComponent,
    AdsComponent,
    WidgetCalendarComponent,
    HomeComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
