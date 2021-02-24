import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDietaryComponent } from './add-dietary.component';

describe('AddDietaryComponent', () => {
  let component: AddDietaryComponent;
  let fixture: ComponentFixture<AddDietaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDietaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDietaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
