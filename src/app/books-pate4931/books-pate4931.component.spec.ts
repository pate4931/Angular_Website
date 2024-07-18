import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksPate4931Component } from './books-pate4931.component';

describe('BooksPate4931Component', () => {
  let component: BooksPate4931Component;
  let fixture: ComponentFixture<BooksPate4931Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksPate4931Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BooksPate4931Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
