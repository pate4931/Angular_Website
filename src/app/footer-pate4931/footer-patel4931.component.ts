import { Component, Input } from '@angular/core';
import { a2Personal } from '../pate4931Interface';
import * as data from '../../assets/data/Assignment02.json';

@Component({
  selector: 'app-footer-pate4931',
  templateUrl: './footer-pate4931.component.html',
  styleUrl: './footer-pate4931.component.css'
})
export class FooterPate4931Component {
  pate4931Personal: a2Personal = (data as any).a2Personal;
}
