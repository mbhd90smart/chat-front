import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AllModulesService } from 'src/app/all-modules.service';
import { Validations } from 'src/app/utils/validations';

@Component({
  selector: 'app-signup-email',
  templateUrl: './signup-email.component.html',
  styleUrls: ['./signup-email.component.css']
})
export class SignupEmailComponent implements OnInit {
  public form: FormGroup;
  public firstname = '';
  public lastname = '';
  public username = '';
  public confirmPassword = '';
  public password = '';
  public acceptTerms:boolean = true;
  public loading:boolean = false;
  submitted = false;


  constructor(protected readonly allModulesService: AllModulesService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstname: new FormControl(this.firstname, []),
      lastname: new FormControl(this.lastname, [Validators.required]),
      username: new FormControl(this.username, [Validators.required, Validators.email]),
      password: new FormControl(this.password, [Validators.required]),
      confirmPassword: new FormControl(this.confirmPassword, [Validators.required]),
      acceptTerms: new FormControl(this.acceptTerms, [Validators.required])
    });
  }


  public register(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.allModulesService.register(this.form.value).subscribe((data:any)=>{
      this.loading = false;
      console.log(data);
    }, error=>{
      this.loading = false;
      console.log(error);
    });
  }
}
