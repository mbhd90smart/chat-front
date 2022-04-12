import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AllModulesService } from 'src/app/all-modules.service';
import { MessageErrorBoxComponent } from 'src/app/components/error/error.component';
import { MessageSucessBoxComponent } from 'src/app/components/success/sucess.component';

@Component({
  selector: 'app-forgotpassword-email',
  templateUrl: './forgotpassword-email.component.html',
  styleUrls: ['./forgotpassword-email.component.css']
})
export class ForgotpasswordEmailComponent implements OnInit {
  public form: FormGroup;
  public form1: FormGroup;
  public username = '';
  public code = '';
  public password = '';
  public loading:boolean = false;
  submitted = false;
  submitted1 = false;
  otp_sent:boolean = false;

  constructor(private translate:TranslateService, private dialog: MatDialog, protected readonly allModulesService: AllModulesService, private route: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(this.username, [Validators.required, Validators.email])
    }); 
    this.form1 = new FormGroup({
      username: new FormControl(this.username, [Validators.required, Validators.email]),
      password: new FormControl(this.password, [Validators.required, Validators.minLength(6)]),
      code: new FormControl(this.code, [Validators.required]),
    });
  }
  public savecode(): void {
    this.submitted1 = true;
    if (this.form1.invalid) {
      return;
    }
    this.loading = true;
    this.allModulesService.passcode(this.form1.value).subscribe((data:any)=>{
      this.loading = false;
      this.passwordChanged();
    }, error=>{
      this.loading = false;
      this.failed(this.translate.instant('recovery_failed'), true);
    });
  }

  public recovery(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.allModulesService.login(this.form.value).subscribe((data:any)=>{
      console.log(data);
      this.loading = false;
      this.otpSent();
    }, error=>{
      this.loading = false;
      this.failed(this.translate.instant('recovery_failed'), false);
    });
  }
  
  failed(message:string, finish:boolean){
    const dialog = this.dialog.open(MessageErrorBoxComponent, {
      disableClose:true,
      autoFocus:true,
      data:{ 
        title: this.translate.instant('error_title'), 
        message: message, 
        button: this.translate.instant('ok')
      }
    });
    dialog.afterClosed().subscribe((data)=>{
      //remove when service is working
      if(finish){
        this.passwordChanged();
      }else{
        this.otpSent();
      }
      //en remove
    })
  }

  passwordChanged(){      
    const dialog = this.dialog.open(MessageSucessBoxComponent, {
      disableClose:true,
      autoFocus:true,
      data:{ 
        title: '', 
        message: this.translate.instant("password_recovey_success"), 
        button: this.translate.instant('ok')
      }
    });
    dialog.afterClosed().subscribe((data)=>{
      this.route.navigateByUrl("/chat/login-email?username="+this.form1.controls["username"].value);
    })
  }

  otpSent(){      
    const dialog = this.dialog.open(MessageSucessBoxComponent, {
      disableClose:true,
      autoFocus:true,
      data:{ 
        title: '', 
        message: this.translate.instant("otp_sent"), 
        button: this.translate.instant('ok')
      }
    });
    dialog.afterClosed().subscribe((data)=>{
      this.otp_sent = true;
      this.form1.controls["username"].setValue(this.form.controls["username"].value);
    })
  }
}
