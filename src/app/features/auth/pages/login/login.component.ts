import { Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../models/login-request.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  email = '';
  password = '';


  isLoading = false;
  errorMessage = "";
  loginForm!: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  login(){
    const data: LoginRequest = {
      email: this.email,
      password: this.password
    }
    this.authService.login(data).subscribe({
      next: (res) => {
        this.authService.saveToken(res.token);
        this.toastr.success("Logado com sucesso!", "Sucesso");
        this.router.navigateByUrl('/application/dashboard');
      },
      error: (err) => {
        this.toastr.error("Login invalido!", "Erro")
      }
    })
  }

 ngOnInit(): void {
    this.loginForm = this.fb.group({
    email : ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
  console.log(this.isLoading);
 }

  onSubmit(){
    this.login();
  }
  
}