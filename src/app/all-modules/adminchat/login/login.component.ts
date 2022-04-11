import { Component, OnInit } from '@angular/core';
import { FunctioninvokeService } from '../functioninvoke.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private functionInvoke: FunctioninvokeService) {}

  ngOnInit(): void {}
  firstComponentFunction() {
    this.functionInvoke.onLoginComponentButtonClick();
  }
}
