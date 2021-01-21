import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedMedicineComponent } from './feed-medicine.component';

describe('FeedMedicineComponent', () => {
  let component: FeedMedicineComponent;
  let fixture: ComponentFixture<FeedMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedMedicineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
