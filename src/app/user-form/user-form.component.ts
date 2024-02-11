import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styles: [`
  form {
    display: flex;
    flex-direction: column;
    gap:20px;
  }
  .form-field {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }`]
})
export class UserFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private userService: UserServiceService) { }
  public userForm: FormGroup<any> = this.fb.group({
    name: ['', Validators.required],
    firstName: ['', Validators.required]
  });

  ngOnInit() {
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      
      this.userService.addUser(this.userForm.value)
      console.log(this.userService.getUsers());
    }
    
  }

}
