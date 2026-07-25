import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-role',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './edit-role.html',
  styleUrl: './edit-role.css'
})
export class EditRoleComponent implements OnInit {

   @Input() roleIdInput!: number;
  roleForm!: FormGroup;

  roleId = 0;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.roleId = Number(this.route.snapshot.paramMap.get('id'));

    this.roleForm = this.fb.group({

      roleName: ['', Validators.required],

      description: [''],

      isActive: [true],

      isDeleted: [false]

    });

    // Demo Data
    // Replace with API Call

    this.roleForm.patchValue({

      roleName: 'Admin',

      description: 'Full system access',

      isActive: true,

      isDeleted: false

    });

  }

  update(): void {

    if (this.roleForm.invalid) {

      this.roleForm.markAllAsTouched();

      return;

    }

    console.log(this.roleForm.value);

    alert('Role Updated Successfully');

  }

  cancel(): void {

    this.router.navigate(['/roles']);

  }

}