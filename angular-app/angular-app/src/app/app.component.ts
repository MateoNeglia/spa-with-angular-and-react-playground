import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { singleSpaPropsSubject } from 'src/single-spa/single-spa-props';
import { dbConnectionService } from 'src/app/db-connection.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DeleteConfirmationComponentComponent } from './delete-confirmation-component/delete-confirmation-component.component';
import { DeleteConfirmationProductComponentComponent } from './delete-confirmation-product-component/delete-confirmation-product-component.component';
import { EditFieldComponent } from './edit-field/edit-field.component';

export interface User {
  id: number,
  address: string,
  name: string,
  lastName: string,
  email: string
}

export interface Products {
  id: number,
  name: string,
  price: number,
  description: string
}

export interface DialogData {
  userDataArray: User[];
  user: User;
}

export interface ProductDialogData {
  product: Products;
  isDeletingProduct: boolean;
}

let ELEMENT_DATA: User[];



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {


  title = 'Administration Tools';
  singleSpaProps$ = singleSpaPropsSubject.asObservable();
  reactComunication: boolean = false;
  isDisplayingProducts: boolean = false;
  displayedColumns: string[] = ['id', 'name', 'lastname', 'address', 'email', 'delMod'];
  dataSource:Array<User> = [];
  productArray:Array<Products> = [];
  checkoutProductsArray:Array<any> = [];
  donations: Number = 0;
  greyhoundRescued = 0;
  
  constructor( private dbService: dbConnectionService, private _snackBar: MatSnackBar, public dialog: MatDialog) {}

  ngOnInit() {
    window.addEventListener('dataSent', () => {     
          this.showConfirmationDialog('Received Product Data from REACT');     
          this.reactComunication = true;
          this.singleSpaProps$.subscribe(
            (response) => {                  
              if(response.customProp?.products) {
                this.productArray = response.customProp?.products;
              }
          console.log('we have a live one', response);
        }
      )
    });

    window.addEventListener('deleteProduct', () => {
      this.singleSpaProps$.subscribe(
        (response) => {
          response.customProp?.product ? this.deleteProduct(response.customProp?.product) : null;
          
        }
      )      
    })

    console.log('here is some from angular:', this.singleSpaProps$);

    this.callUsersDb();
  } 
  
  toggleProductsDisplay() {    
    this.isDisplayingProducts = !this.isDisplayingProducts;
  }
  
  productCheckout(product: any) {
    this.checkoutProductsArray.push(product);
    let parsedProducts = JSON.stringify(this.checkoutProductsArray);
    sessionStorage.setItem('purchasedProducts', parsedProducts);
    location.href = 'http://localhost:9000/chart-list';
  }

  addProductToChart(product: any) {    
    this.checkoutProductsArray.push(product);
    let parsedProducts = JSON.stringify(this.checkoutProductsArray);
    sessionStorage.setItem('purchasedProducts', parsedProducts);   
    window.dispatchEvent(new Event('dataHandle')); 
    this.showConfirmationDialog('Product added to chart');
  }

  callUsersDb() {
    this.dbService.getDBData().subscribe(
         (response: any) => {
           console.log(response);    
            ELEMENT_DATA =  response; 
            this.dataSource = ELEMENT_DATA;
         }
       )
  }

  sendDataToReact() {
    this.singleSpaProps$.forEach((prop) => {
      if(prop?.customProp?.users.length === 0) {
        prop.customProp.users = this.dataSource
      }            
    })
    window.dispatchEvent(new Event('dispatchToReact'));
    this.showConfirmationDialog('User Data to REACT!');
  }

  showConfirmationDialog(message: string) {
    this._snackBar.open(message, 'Close', {
      duration: 2000
    });
  }

  deleteUser(userData: any) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponentComponent, {
      width: '300px',
      data: {userDataArray: this.dataSource, user: userData},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("the result coming is: ", result);
      result? this.dataSource = result : this.dataSource = this.dataSource;
    })
  }

  deleteProduct(productData: any) {
    let isDeletingProductDefault = false;
    const dialogRef = this.dialog.open(DeleteConfirmationProductComponentComponent, {
      width: '320px',
      data: {product: productData, isDeletingProduct: isDeletingProductDefault},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("Is deleting this product?: ", result);
      result? window.dispatchEvent(new Event('isDeleting')) : null ; 
    })
  }

  editUser(userData: any) {
    const dialogRef = this.dialog.open(EditFieldComponent, {
      width: '300px',
      data: {user: userData},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("the result coming is: ", result);      
    })

  }

}
