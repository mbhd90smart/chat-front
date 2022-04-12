import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AllModulesService } from 'src/app/all-modules.service';
import { MessageErrorBoxComponent } from 'src/app/components/error/error.component';
import { TokenStorageService } from 'src/app/services';
import { TranslateService } from '@ngx-translate/core';

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

  constructor(private translate:TranslateService, private dialog: MatDialog, protected tokenManager:TokenStorageService, protected readonly allModulesService: AllModulesService, private route: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(this.username, [Validators.required, Validators.email]),
      password: new FormControl(this.password, [Validators.required])
    });
    this.activeRoute.queryParams
      .subscribe(params => {
        if(params.username){
          this.form.controls["username"].setValue(params.username);
        }
      }
    );
  }

  public login(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.allModulesService.login(this.form.value).subscribe((data:any)=>{
      this.saveToken(data);
    }, error=>{
      this.loading = false;
      this.failed();
    });
  }

  saveToken(data){    
    console.log(data);
    this.tokenManager.saveToken(data.token);
    this.tokenManager.saveUser(data.user);
    this.loading = false;
    this.route.navigateByUrl("/chat/chat-main");
  }
  
  failed(){
    const dialog = this.dialog.open(MessageErrorBoxComponent, {
      disableClose:true,
      autoFocus:true,
      data:{ 
        title: this.translate.instant('error_title'), 
        message: this.translate.instant('login_failed'), 
        button: this.translate.instant('ok')
      }
    });
    dialog.afterClosed().subscribe((data)=>{
      //remove when service is working
      this.saveToken({
        token:"sqsdfsqdfsqdf1521dsqf2qdsf02d0sqd0fqdfq1d5fqds1fq0dsf",
        user:{
          id:"sfdsfdsqf0dsqf0dsqf0dsf",
          name:"Name",
          username:"email@test.com",
          email:"email@test.com",
          phone:"Phone number",
          profileImage:"sfdsfdsqf0dsqf0dsqf0dsf",
        }
      });
      //en remove
    })
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
