import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductPrice } from './add-product-price';

describe('AddProductPrice', () => {
  let component: AddProductPrice;
  let fixture: ComponentFixture<AddProductPrice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProductPrice],
    }).compileComponents();

    fixture = TestBed.createComponent(AddProductPrice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
