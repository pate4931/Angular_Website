import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusPate4931Component } from './campus-pate4931.component';

describe('CampusPate4931Component', () => {
  let component: CampusPate4931Component;
  let fixture: ComponentFixture<CampusPate4931Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CampusPate4931Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampusPate4931Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
