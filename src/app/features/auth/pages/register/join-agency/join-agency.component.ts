import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-join-agency',
  imports: [RouterLink, ReactiveFormsModule, RouterModule],
  templateUrl: './join-agency.component.html',
  styleUrl: './join-agency.component.css'
})
export class JoinAgencyComponent {
  token = "";
  validToken!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ){}

  ngOnInit(): void{
    this.validToken = this.fb.group({
      token : ['']
    })
  }

  onSubmit(){
    console.log("teste de submit")
  }
}
