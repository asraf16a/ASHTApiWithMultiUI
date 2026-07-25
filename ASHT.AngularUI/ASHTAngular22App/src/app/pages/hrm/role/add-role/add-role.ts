import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleService } from '../../../../shared/services/role-service';
import { Role } from '../../../../shared/models/role';

@Component({
  selector: 'app-add-role',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule

  ],
  templateUrl: './add-role.html',
  styleUrl: './add-role.css'
})
export class AddRoleComponent {

  roleForm!: FormGroup;

  constructor(
    private roleService: RoleService,
    private fb: FormBuilder,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.buildform();
    this.cdr.detectChanges();
  }

  buildform(): void {

    this.roleForm = this.fb.group({

      roleName: ['', Validators.required],

      description: ['', Validators.required],

      isActive: [true],

      isDeleted: [false]

    });
  }

  save() {

    if (this.roleForm.invalid) {

      this.roleForm.markAllAsTouched();

      return;

    }

    console.log(this.roleForm.value);

    alert('Role Saved Successfully');

  }

  cancel() {

    this.router.navigate(['/roles']);

  }

}