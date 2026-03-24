import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from "@angular/router";
import { RegisterUserRequest } from '../../../models/register-user-request';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterUserResponse } from '../../../models/register-user-response';
import { LoginRequest } from '../../../models/login-request.model';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-create-user',
  imports: [RouterLink, ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {

  name = '';
  email = '';
  password = '';

  registerUserForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private userServices: UserService
  ){}

  registerUser(){
    const data: RegisterUserRequest = {
      name: this.name,
      email: this.email,
      password: this.password
    }

    console.log("Enviando para API: " + data);
    
    this.authService.register(data).subscribe({
      next: (res: RegisterUserResponse) => {
        console.log("Registro realizado com sucesso ", res);
        this.userServices.setOwnerPublicId(res.publicId);
        this.loginUser();
      },
      error(err) {
        console.log("Erro de Registro: ", err.message)
      },
    })

  }

  loginUser() {
      const dataLogin : LoginRequest = {
        email: this.email,
        password: this.password
      }
      console.log(dataLogin);
      this.authService.login(dataLogin).subscribe({
      next : (res) => {
        this.authService.saveToken(res.token);
        this.router.navigateByUrl('/auth/register/create-agency');
      }
    })
  }


  ngOnInit(): void{
    this.registerUserForm = this.fb.group({
      name : [''],
      email : [''],
      password : ['']
    })
  }

  onSubmit(){
    console.log("Form enviado")
  }

}
