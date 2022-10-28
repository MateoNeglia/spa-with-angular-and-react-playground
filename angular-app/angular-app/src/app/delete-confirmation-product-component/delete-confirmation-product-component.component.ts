import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProductDialogData } from '../app.component';

@Component({
  selector: 'app-delete-confirmation-product-component',
  templateUrl: './delete-confirmation-product-component.component.html',
  styleUrls: ['./delete-confirmation-product-component.component.css']
})
export class DeleteConfirmationProductComponentComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteConfirmationProductComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductDialogData,
  ) { }

  ngOnInit(): void {
    console.log('data is', this.data.product);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteProduct() {
    return this.data.isDeletingProduct = true;
  }

}
