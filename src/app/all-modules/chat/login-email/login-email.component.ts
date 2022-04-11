import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AllModulesService } from 'src/app/all-modules.service';

@Component({
  selector: 'app-login-email',
  templateUrl: './login-email.component.html',
  styleUrls: ['./login-email.component.css']
})
export class LoginEmailComponent implements OnInit {
  public form: FormGroup;
  public username = '';
  public password = '';
  public loading:boolean = false;
  submitted = false;

  constructor(protected readonly allModulesService: AllModulesService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(this.username, [Validators.required, Validators.email]),
      password: new FormControl(this.password, [Validators.required])
    });
  }

  public login(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.allModulesService.login(this.form.value).subscribe((data:any)=>{
      this.loading = false;
      console.log(data);
    }, error=>{
      this.loading = false;
      console.log(error);
    });
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
