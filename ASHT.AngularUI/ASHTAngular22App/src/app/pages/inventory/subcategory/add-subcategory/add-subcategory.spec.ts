import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubcategoryComponent } from './add-subcategory';

describe('AddSubcategory', () => {
  let component: AddSubcategoryComponent;
  let fixture: ComponentFixture<AddSubcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSubcategoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddSubcategoryComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
