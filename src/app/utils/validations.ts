import { AbstractControl } from '@angular/forms';


export class Validations {

    static match(a: any, b:any) {
        console.log(a);
        console.log(b);
        return null;
    }

    static requiredTrue(control: AbstractControl) {
        if (control.value == true) {
          return { urlValid: true };
        }
        return null;
    }
}