import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrescriptionDetails } from './add-prescription-details';

describe('AddPrescriptionDetails', () => {
  let component: AddPrescriptionDetails;
  let fixture: ComponentFixture<AddPrescriptionDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPrescriptionDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(AddPrescriptionDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
