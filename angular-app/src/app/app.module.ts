import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select'; 
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { DeleteConfirmationComponentComponent } from './delete-confirmation-component/delete-confirmation-component.component';
import { DeleteConfirmationProductComponentComponent } from './delete-confirmation-product-component/delete-confirmation-product-component.component';
import { EditFieldComponent } from './edit-field/edit-field.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponentComponent,
    DeleteConfirmationComponentComponent,
    DeleteConfirmationProductComponentComponent,
    EditFieldComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatDividerModule,
    MatCardModule,
    MatSnackBarModule,
    HttpClientModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatDialogModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
