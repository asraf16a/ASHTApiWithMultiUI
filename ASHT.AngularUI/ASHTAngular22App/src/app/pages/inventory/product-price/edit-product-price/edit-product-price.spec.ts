import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductPrice } from './edit-product-price';

describe('EditProductPrice', () => {
  let component: EditProductPrice;
  let fixture: ComponentFixture<EditProductPrice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditProductPrice],
    }).compileComponents();

    fixture = TestBed.createComponent(EditProductPrice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
