import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './ui/header/header.component';
import {FooterComponent} from './ui/footer/footer.component';
import {NavbarComponent} from './ui/navbar/navbar.component';
import {ReviewsComponent} from './reviews/reviews.component';
import {PostWidgetComponent} from './post/post-widget/post-widget.component';
import {AdsComponent} from './ads/ads.component';
import {WidgetCalendarComponent} from './calendar/widget-calendar/widget-calendar.component';
import {HomeComponent} from './ui/home/home.component';
import {CalendarComponent} from './calendar/calendar.component';
import {PostComponent} from './post/post.component';
import {PostListComponent} from './post/post-list/post-list.component';
import {CacheRegistrationService} from './cache/cache-registration.service';
import {UriCachingInterceptor} from './cache/cache.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'calendario', component: CalendarComponent},
  {path: 'calendario/:uf', component: CalendarComponent},
  {path: 'post', component: PostListComponent},
  {path: 'post/:id', component: PostComponent},

];

@NgModule({
  declarations: [
    AppComponent,
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
    PostListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CacheRegistrationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UriCachingInterceptor,
      multi: true
    }
],
bootstrap: [AppComponent]
})

export class AppModule {
}
