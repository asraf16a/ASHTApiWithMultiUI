import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryComponent } from './subcategory';

describe('Subcategory', () => {
  let component: SubcategoryComponent;
  let fixture: ComponentFixture<SubcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcategoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubcategoryComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
