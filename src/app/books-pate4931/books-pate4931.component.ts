import { Component, Input } from '@angular/core';
import { myBooks } from '../pate4931Interface';

@Component({
  selector: 'app-books-pate4931',
  templateUrl: './books-pate4931.component.html',
  styleUrl: './books-pate4931.component.css'
})
export class BooksPate4931Component {
  @Input() myBooks: myBooks[] = [];
  displayedColumns: string[] = ['title', 'author', 'published'];

  constructor() { }

  ngOnInit(): void {
  }
}
