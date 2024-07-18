import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPate4931Component } from './header-pate4931.component';

describe('HeaderPate4931Component', () => {
  let component: HeaderPate4931Component;
  let fixture: ComponentFixture<HeaderPate4931Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderPate4931Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderPate4931Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
