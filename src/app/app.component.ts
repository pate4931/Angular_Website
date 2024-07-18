
import { Component, OnInit } from '@angular/core';

import { a2Personal, myBooks, campusData } from './pate4931Interface';
import * as data from '../assets/data/Assignment02.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'A2pate4931';

  pate4931Personal: a2Personal = (data as any).a2Personal;
  pate4931Books: myBooks[] = (data as any).myBooks;
  pate4931Campus: campusData[] = (data as any).campusData;
}
