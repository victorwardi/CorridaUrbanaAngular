import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Corrida Urbana Angular';

  activePage = 'home';

  onNavigate(feature: string) {
    this.activePage = feature;
  }

}
