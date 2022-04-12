import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { AllModulesService } from 'src/app/all-modules.service';
import { MessageErrorBoxComponent } from 'src/app/components/error/error.component';
import { MessageInfoBoxComponent } from 'src/app/components/message/message.component';
import Validations from 'src/app/utils/validations';

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
  public acceptTerms:boolean = false;
  public loading:boolean = false;
  submitted = false;

  constructor(private translate:TranslateService, private dialog: MatDialog, protected readonly allModulesService: AllModulesService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstname: new FormControl(this.firstname, []),
      lastname: new FormControl(this.lastname, [Validators.required]),
      username: new FormControl(this.username, [Validators.required, Validators.email]),
      password: new FormControl(this.password, [Validators.required]),
      confirmPassword: new FormControl(this.confirmPassword, [Validators.required, Validations.match("password")]),
      acceptTerms: new FormControl(this.acceptTerms, [Validators.requiredTrue])
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
      
      this.dialog.open(MessageErrorBoxComponent, {
        disableClose:true,
        autoFocus:true,
        width: '500px',
        data:{ 
          title: this.translate.instant('Signup_failed_title'), 
          message: this.translate.instant('Signup_failed_message'), 
          button: this.translate.instant('ok')
        }
      });
    });
  }

  openTermns(){
      
    this.dialog.open(MessageInfoBoxComponent, {
      disableClose:true,
      autoFocus:true,
      width: '500px',
      data:{ 
        title: this.translate.instant('term_cond'), 
        message: this.translate.instant('term_cond_description'), 
        button: this.translate.instant('cancel')
      }
    });

  }
}
