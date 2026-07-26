import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPriceList } from './product-price-list';

describe('ProductPriceList', () => {
  let component: ProductPriceList;
  let fixture: ComponentFixture<ProductPriceList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPriceList],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductPriceList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
