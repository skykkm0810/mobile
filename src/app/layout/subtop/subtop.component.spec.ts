import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtopComponent } from './subtop.component';

describe('SubtopComponent', () => {
  let component: SubtopComponent;
  let fixture: ComponentFixture<SubtopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
