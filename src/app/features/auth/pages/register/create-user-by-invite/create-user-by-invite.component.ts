import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { ActivatedRoute ,Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterUserRequest } from '../../../models/register-user-request';
import { RegisterUserResponse } from '../../../models/register-user-response';
import { LoginRequest } from '../../../models/login-request.model';

@Component({
  selector: 'app-create-user-by-invite',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './create-user-by-invite.component.html',
  styleUrl: './create-user-by-invite.component.css'
})
export class CreateUserByInviteComponent {
  name = '';
  email = '';
  password = '';
  nameStore = '';
  tokenValid = '';

  registerUserByInviteForm!: FormGroup;


  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ){}

  registerUserInStoreByInvite(){
    const data: RegisterUserRequest ={
      name: this.name,
      email: this.email,
      password: this.password
    }
    this.authService.registerByInvite(data, this.tokenValid).subscribe({
      next: (res) => {
        this.toastr.success("Seja bem vindo", "Sucesso");
        this.loginUser();
      },
      error: (err) => {
        this.toastr.error("Erro de registro", "Error");
      },
    })
  }

  loginUser(){
    const dataLogin : LoginRequest ={
      email: this.email,
      password: this.password
    }
    this.authService.login(dataLogin).subscribe({
      next: (res) =>{
        this.authService.saveToken(res.token);
        this.router.navigate(['/application/dashboard'])
      }
    })
  }


  ngOnInit(): void{
    this.route.queryParams.subscribe(params => {
      this.nameStore = params['store'];
      this.tokenValid = params['invite'];
    })
    this.registerUserByInviteForm = this.fb.group({
      name: [''],
      email: [''],
      password: ['']
    })
  }

  onSubmit(){
    this.registerUserInStoreByInvite();
  }
}
