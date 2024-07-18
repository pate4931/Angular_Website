import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPate4931Component } from './footer-patel4931.component';

describe('FooterPate4931Component', () => {
  let component: FooterPate4931Component;
  let fixture: ComponentFixture<FooterPate4931Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterPate4931Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterPate4931Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
