import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './view/lista-productos/lista-productos.component';
import { UserListComponent } from './view/user-list/user-list.component';
import { LoginComponent } from './view/login/login.component';

const routes: Routes = [
  { path: 'product', component: ListaProductosComponent },
  { path: 'user', component: UserListComponent },
  { path: '', component: LoginComponent }, // Ruta por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }