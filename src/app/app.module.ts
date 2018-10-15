import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { EventsComponent } from './events/events.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { MainComponent } from './ui/main/main.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { EventsHomeListComponent } from './events/events-home-list/events-home-list.component';
import { PostComponent } from './news/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    EventsComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    MainComponent,
    ReviewsComponent,
    EventsHomeListComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
