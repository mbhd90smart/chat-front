import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root',
})
export class FunctioninvokeService {
  invokeFirstComponentFunction = new EventEmitter();
  invokeLoginComponentFunction = new EventEmitter();
  invoketoggle = new EventEmitter();
  subsVar: Subscription;

  constructor() {}

  onFirstComponentButtonClick() {
    this.invokeFirstComponentFunction.emit();
  }
  onLoginComponentButtonClick() {
    this.invokeLoginComponentFunction.emit();
  }
  toggleClick() {
    this.invoketoggle.emit();
  }
}
