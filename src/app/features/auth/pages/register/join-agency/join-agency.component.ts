import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InviteService } from '../../../services/invite/invite.service';

@Component({
  selector: 'app-join-agency',
  imports: [RouterLink, ReactiveFormsModule, RouterModule],
  templateUrl: './join-agency.component.html',
  styleUrl: './join-agency.component.css'
})
export class JoinAgencyComponent {
  token = "";
  validToken!: FormGroup;
  errorMessage = "";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private inviteService: InviteService
  ){}


  validTokenInApi(){
    const tokenValue = this.token;
    this.inviteService.getValidToken(tokenValue).subscribe({
      next: (res) => {
        const storeByToken = res.store.name;
        this.toastr.success("Token valido", "Sucesso");
        this.router.navigate(['/auth/register/create-user-by-invite'], {queryParams: {store: storeByToken, invite: tokenValue}});
      },
      error: (err) => {
        this.toastr.error("Token invalido", "Erro");
      }
    });
  }

  ngOnInit(): void{
    this.validToken = this.fb.group({
      token : ['']
    })
  }

  onSubmit(){
    this.validTokenInApi();
    console.log("teste de submit")
    console.log(this.token);
  }
}
