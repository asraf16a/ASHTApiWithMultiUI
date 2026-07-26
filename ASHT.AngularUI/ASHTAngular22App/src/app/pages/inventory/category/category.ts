import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryListComponent } from './category-list/category-list';
import { AddCategoryComponent } from './add-category/add-category';
import { EditCategoryComponent } from './edit-category/edit-category';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    CommonModule,
    CategoryListComponent,
    AddCategoryComponent,
    EditCategoryComponent
  ],
  templateUrl: './category.html',
  styleUrl: './category.css'
})
export class CategoryComponent {

  currentPage: 'list' | 'add' | 'edit' = 'list';

  selectedCategoryId = 0;

  addCategory() {
    this.currentPage = 'add';
  }

  editCategory(id: number) {
    this.selectedCategoryId = id;
    this.currentPage = 'edit';
  }

  backToList() {
    this.currentPage = 'list';
  }

}