import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcategoryListComponent } from './subcategory-list/subcategory-list';
import { AddSubcategoryComponent } from './add-subcategory/add-subcategory';
import { EditSubcategoryComponent } from './edit-subcategory/edit-subcategory';

@Component({
  selector: 'app-subcategory',
  standalone: true,
  imports: [
    CommonModule,
    SubcategoryListComponent,
    AddSubcategoryComponent,
    EditSubcategoryComponent
  ],
  templateUrl: './subcategory.html',
  styleUrl: './subcategory.css'
})
export class SubcategoryComponent {

  currentPage: 'list' | 'add' | 'edit' = 'list';

  selectedSubcategoryId = 0;

  addSubcategory() {
    this.currentPage = 'add';
  }

  editSubcategory(id: number) {
    this.selectedSubcategoryId = id;
    this.currentPage = 'edit';
  }

  backToList() {
    this.currentPage = 'list';
  }

}