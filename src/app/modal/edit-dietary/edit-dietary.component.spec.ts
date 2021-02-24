import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDietaryComponent } from './edit-dietary.component';

describe('EditDietaryComponent', () => {
  let component: EditDietaryComponent;
  let fixture: ComponentFixture<EditDietaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDietaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDietaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
