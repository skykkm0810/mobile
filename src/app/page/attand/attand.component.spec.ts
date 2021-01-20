import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttandComponent } from './attand.component';

describe('AttandComponent', () => {
  let component: AttandComponent;
  let fixture: ComponentFixture<AttandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
