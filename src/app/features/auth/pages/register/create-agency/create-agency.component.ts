import { Component } from '@angular/core';
import { Router, RouterModule } from "@angular/router";
import { ReactiveFormsModule ,FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { RegisterStoreRequest } from '../../../models/register-store-request';
import { StoreService } from '../../../services/store/store.service';

@Component({
  selector: 'app-create-agency',
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './create-agency.component.html',
  styleUrl: './create-agency.component.css'
})
export class CreateAgencyComponent {
  nameStore: string = "vitrina-cars"; 
  name = '';
  slug = '';
  email = '';
  registerStoreForm!: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private storeService: StoreService,
    private router : Router
  ){}
  
  registerAgency(){
    const token = localStorage.getItem('token')
    const data: RegisterStoreRequest = {
      name: this.name,
      email: this.email,
      slug: this.slug
    }

    this.storeService.register(data, token!).subscribe({
      next: () => {
        console.log("Registro de Store feito ");
        this.router.navigateByUrl('/application/dashboard')

      },error(err){
        console.log("Erro ao criar store ", err.message);
      }
    })
    console.log(data);
    console.log(token)
  }
  
  ngOnInit(): void {
    this.registerStoreForm = this.fb.group({
      name: ['', [Validators.required]],
      slug: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9-]+$/)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(){
    this.registerAgency();
  }

}
