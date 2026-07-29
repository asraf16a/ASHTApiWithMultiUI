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

  save(): void {

  if (this.roleForm.invalid) {
    this.roleForm.markAllAsTouched();
    return;
  }

  const formValue = this.roleForm.value;

  const role: Role = {
    id: 0,
    roleName: formValue.roleName,
    description: formValue.description,
    isActive: formValue.isActive,
    isDeleted: false
  };

  this.roleService.createRole(role).subscribe({
    next: () => {
      alert('Role Saved Successfully');
      this.roleForm.reset({
        isActive: true
      });
    },
    error: (err) => {
      console.error(err);
      alert('Failed to save role.');
    }
  });
}

  cancel() {

    this.router.navigate(['/roles']);

  }

}