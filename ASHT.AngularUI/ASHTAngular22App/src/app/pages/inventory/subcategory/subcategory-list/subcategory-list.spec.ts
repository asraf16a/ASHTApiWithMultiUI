import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryListComponent } from './subcategory-list';

describe('SubcategoryList', () => {
  let component: SubcategoryListComponent;
  let fixture: ComponentFixture<SubcategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcategoryListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubcategoryListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
