import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Complete2Component } from './complete2.component';

describe('Complete2Component', () => {
  let component: Complete2Component;
  let fixture: ComponentFixture<Complete2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Complete2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Complete2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
