import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './view/lista-productos/lista-productos.component';
import { UserListComponent } from './view/user-list/user-list.component';
import { LoginComponent } from './view/login/login.component';
import { VentasComponent } from './view/ventas/ventas.component';
import { AuthGuard } from './auth.guard'; // Importa el Auth Guard

const routes: Routes = [
  { path: 'product', component: ListaProductosComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'sales', component: VentasComponent, canActivate: [AuthGuard] },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
