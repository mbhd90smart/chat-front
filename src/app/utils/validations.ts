import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export default class Validation {
    static match(matchingControlName: string): ValidatorFn {
        return (control:AbstractControl) : ValidationErrors | null => {
                if(control.parent == null){
                    return;
                }
                const matchingControl = control.parent.controls[matchingControlName];
                if (control.errors && !control.errors.mustMatch) {
                    // return if another validator has already found an error on the matchingControl
                    return;
                }
                // set error on matchingControl if validation fails
                if (control.value !== matchingControl.value) {
                    return { mustMatch: true };
                } else {
                    return null;
                }
        }
    }
}