import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineTopComponent } from './medicine-top.component';

describe('MedicineTopComponent', () => {
  let component: MedicineTopComponent;
  let fixture: ComponentFixture<MedicineTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
