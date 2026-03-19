import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule ,FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CommonModule } from '@angular/common';

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
    private fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.registerStoreForm = this.fb.group({
      name: ['', [Validators.required]],
      slug: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9-]+$/)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(){
    console.log("enviado")
    console.log(this.registerStoreForm);
  }

}
