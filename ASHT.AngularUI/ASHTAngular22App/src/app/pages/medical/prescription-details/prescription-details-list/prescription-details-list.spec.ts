import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionDetailsList } from './prescription-details-list';

describe('PrescriptionDetailsList', () => {
  let component: PrescriptionDetailsList;
  let fixture: ComponentFixture<PrescriptionDetailsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrescriptionDetailsList],
    }).compileComponents();

    fixture = TestBed.createComponent(PrescriptionDetailsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
