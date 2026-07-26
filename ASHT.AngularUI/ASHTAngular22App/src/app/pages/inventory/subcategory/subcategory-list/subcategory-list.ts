import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SubCategoryService } from '../../../../shared/services/sub-category-service';
import { SubCategory } from '../../../../shared/models/sub-category';

@Component({
  selector: 'app-subcategory-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './subcategory-list.html',
  styleUrl: './subcategory-list.css'
})
export class SubcategoryListComponent implements OnInit {

  @Output() addClicked = new EventEmitter<void>();
  @Output() editClicked = new EventEmitter<number>();

  searchText = '';
  subcategories: SubCategory[] = [];

  constructor(
    private subCategoryService: SubCategoryService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadSubcategories();
  }

  loadSubcategories(): void {

    this.subCategoryService.getAllSubCategoryList().subscribe({

      next: (data: SubCategory[]) => {
        this.subcategories = data;
        this.cdr.detectChanges();
      },

      error: (err) => {
        console.error(err);
        this.subcategories = [];
      }

    });

  }

  get totalSubcategories(): number {
    return this.subcategories.length;
  }

  addSubcategory(): void {
    this.addClicked.emit();
  }

  editSubcategory(subcategory: SubCategory): void {
    this.editClicked.emit(subcategory.id);
  }

  deleteSubcategory(subcategory: SubCategory): void {
    console.log('Delete', subcategory);
  }

}