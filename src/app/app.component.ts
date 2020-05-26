import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dnd1';
  movies = ['Heat', 'Xanadu', 'Reds', 'Harold & Maude'];

  drop(event) {
    console.log(`drop method`);
    console.log(event);
  }
}
