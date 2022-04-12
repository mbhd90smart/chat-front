import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { TranslateService } from "@ngx-translate/core";
import { AllModulesService } from "src/app/all-modules.service";

@Component({
    selector: 'message-dialog',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss']
})
export class MessageInfoBoxComponent implements OnInit {

    title:string;

    message:string;

    constructor(
        private dialogRef: MatDialogRef<MessageInfoBoxComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any, 
        private translate:TranslateService, 
        protected readonly allModulesService: AllModulesService) {

        this.title = data.title;
        this.message = data.message;
    }
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    
    close() {
        this.dialogRef.close();
    }
}