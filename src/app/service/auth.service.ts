import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  // Aquí puedes implementar tu lógica de autenticación
  isLoggedIn(): boolean {
    // Por ejemplo, verifica si hay un token en el local storage
    return !!localStorage.getItem('authToken');
  }

  // Método para cerrar sesión
  logout() {
    localStorage.removeItem('authToken');
  }
}
