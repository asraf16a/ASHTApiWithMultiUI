
import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserTypeService } from '../../../../shared/services/user-type';
import { UserType } from '../../../../shared/models/user-type';
import { UserService } from '../../../../shared/services/user-service';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
    
  ],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css'
})
export class AddUserComponent {

  userForm!: FormGroup;

  userTypes:UserType[] = [ ];

  constructor(
    private userService:UserService,
    private userTypeService:UserTypeService,
    private fb: FormBuilder,
    private router: Router,
    private cdr:ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.buildform();
    this.loadUserTypes();
    this.cdr.detectChanges();
  }

  buildform():void{

    this.userForm = this.fb.group({

      username: ['', Validators.required],

      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],

      confirmPassword: ['', Validators.required],

      userTypeId: [null, Validators.required],

      isActive: [true]

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

  save(): void {

  if (this.userForm.invalid) {
    this.userForm.markAllAsTouched();
    return;
  }

  const formValue = this.userForm.value;

  const user: User = {
    id: 0,
    username: formValue.username,
    userTypeId: formValue.userTypeId,
    isActive: formValue.isActive,
    isDeleted: false,
    password:formValue.password,
    passwordSalt:formValue.confirmPassword,
    createdDate: new Date().toISOString(),
    modifiedDate: new Date().toISOString()
  };

  this.userService.createUser(user).subscribe({
    next: () => alert('User Saved Successfully'),
    error: (err) => console.error(err)
  });

}
  cancel() {

    this.router.navigate(['/users']);

  }

}
