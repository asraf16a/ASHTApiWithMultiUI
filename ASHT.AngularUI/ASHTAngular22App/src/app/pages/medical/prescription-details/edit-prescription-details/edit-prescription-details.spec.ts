import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPrescriptionDetails } from './edit-prescription-details';

describe('EditPrescriptionDetails', () => {
  let component: EditPrescriptionDetails;
  let fixture: ComponentFixture<EditPrescriptionDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPrescriptionDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(EditPrescriptionDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
