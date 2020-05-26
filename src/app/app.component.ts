import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatTabGroup} from '@angular/material/tabs';
import {TabType} from './tab';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dnd1';
  movies = ['Heat', 'Xanadu', 'Reds', 'Harold & Maude'];
  tabs = [ new TabType('tab 1', 'I like eggs'),
    new TabType('tab 2', 'It is late at night'),
    new TabType('tab 3', 'Third time is kinda a charm')
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  dropped(event: CdkDragDrop<any>, t: MatTabGroup): void {
    const arr = t._tabs.toArray();
    moveItemInArray(arr, event.previousIndex, event.currentIndex);
    t._tabs.reset(arr);
  }

  dropTab(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tabs, event.previousIndex, event.currentIndex);
  }

  dropOld(event) {
    console.log(`drop method`);
    console.log(event);
  }
}
