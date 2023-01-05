import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../app.component';

@Component({
  selector: 'app-delete-confirmation-component',
  templateUrl: './delete-confirmation-component.component.html',
  styleUrls: ['./delete-confirmation-component.component.css']
})
export class DeleteConfirmationComponentComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteConfirmationComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteUser() {
    return this.data.userDataArray.filter(data => data != this.data.user);
  }

}
