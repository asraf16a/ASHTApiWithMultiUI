import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCategoryComponent } from './edit-category';

describe('EditCategory', () => {
  let component: EditCategoryComponent;
  let fixture: ComponentFixture<EditCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCategoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditCategoryComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
