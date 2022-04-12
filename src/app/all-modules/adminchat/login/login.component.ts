import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllModulesService } from 'src/app/all-modules.service';
import { TokenAdminStorageService } from 'src/app/services';
import { FunctioninvokeService } from '../functioninvoke.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  public form: FormGroup;
  public username = '';
  public password = '';
  public loading:boolean = false;
  submitted = false;

  constructor(protected tokenManager:TokenAdminStorageService, protected readonly allModulesService: AllModulesService, private functionInvoke: FunctioninvokeService, private route: Router) { }

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
      console.log(data);
      this.tokenManager.saveToken(data.token);
      this.tokenManager.saveUser(data.user);
      this.loading = false;
      this.route.navigateByUrl("/admin/dashboard");
    }, error=>{
      this.loading = false;
      console.log(error);
    });
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
  
  firstComponentFunction() {
    this.functionInvoke.onLoginComponentButtonClick();
  }


}
