import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../app.component';

@Component({
  selector: 'app-edit-field',
  templateUrl: './edit-field.component.html',
  styleUrls: ['./edit-field.component.css']
})
export class EditFieldComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditFieldComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }

  editUser() {
    return this.data;
  }

}
