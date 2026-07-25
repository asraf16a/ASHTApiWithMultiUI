import { Component, OnInit,Input, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserTypeService } from '../../../../shared/services/user-type';
import { UserType } from '../../../../shared/models/user-type';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './edit-user.html',
  styleUrl: './edit-user.css'
})
export class EditUserComponent implements OnInit {

   @Input() userIdInput!: number;
  userForm!: FormGroup;

  userId = 0;
  userTypes:UserType[] = [ ];

  constructor(
    private userTypeService:UserTypeService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private cdr:ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.userId = Number(this.route.snapshot.paramMap.get('id'));

    this.userForm = this.fb.group({

      username: ['', Validators.required],

      password: [''],

      confirmPassword: [''],

      userTypeId: [null, Validators.required],

      isActive: [true]

    });

    // Demo Data
    // Replace with API Call

    this.userForm.patchValue({

      username: 'admin',

      userTypeId: 1,

      isActive: true

    });

  }
  loadUserTypes(): void {
  
      this.userTypeService.getAllUserTypes().subscribe({
  
        next: (userTypes:UserType[]) => {
  
          this.userTypes = userTypes;
          this.cdr.detectChanges();
        },
  
        error: (err) => {
          console.error(err);
        }
  
      });
  
    }
  

  update(): void {

    if (this.userForm.invalid) {

      this.userForm.markAllAsTouched();

      return;

    }

    console.log(this.userForm.value);

    alert('User Updated Successfully');

  }

  cancel(): void {

    this.router.navigate(['/users']);

  }

}