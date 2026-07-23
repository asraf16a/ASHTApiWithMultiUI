
import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserTypeService } from '../../../../shared/services/user-type';
import { UserType } from '../../../../shared/models/user-type';

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

  save() {

    if (this.userForm.invalid) {

      this.userForm.markAllAsTouched();

      return;

    }

    console.log(this.userForm.value);

    alert('User Saved Successfully');

  }

  cancel() {

    this.router.navigate(['/users']);

  }

}
