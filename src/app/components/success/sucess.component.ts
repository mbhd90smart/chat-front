import { Component, Inject, OnInit } from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
    selector: 'success-dialog',
    templateUrl: './success.component.html',
    styleUrls: ['./success.component.scss']
})
export class MessageSucessBoxComponent implements OnInit {

    title:string;
    message:string;
    button:string;

    constructor(
        private dialogRef: MatDialogRef<MessageSucessBoxComponent>,
        @Inject(MAT_DIALOG_DATA) data) {

        this.title = data.title;

        this.message = data.message;

        this.button = data.button;
    }

    ngOnInit() {
        
    }
    
    close() {
        this.dialogRef.close();
    }
}