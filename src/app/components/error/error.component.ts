import { Component, Inject, OnInit } from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
    selector: 'error-dialog',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss']
})
export class MessageErrorBoxComponent implements OnInit {

    title:string;
    message:string;
    button:string;

    constructor(
        private dialogRef: MatDialogRef<MessageErrorBoxComponent>,
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