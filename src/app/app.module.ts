import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './view/side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ListaProductosComponent } from './view/lista-productos/lista-productos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormProductComponent } from './view/form-product/form-product.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteProductComponent } from './view/delete-product/delete-product.component';
import { ConfirmacionComponent } from './view/confirmacion/confirmacion.component';
import { UserListComponent } from './view/user-list/user-list.component';
import { UserFormComponent } from './view/user-form/user-form.component';
import { AddUserComponent } from './view/add-user/add-user.component';
import { EditUserDialogComponent } from './edit-user-dialog/edit-user-dialog.component';
import { LoginComponent } from './view/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ListaProductosComponent,
    FormProductComponent,
    DeleteProductComponent,
    ConfirmacionComponent,
    UserListComponent,
    UserFormComponent,
    AddUserComponent,
    EditUserDialogComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }