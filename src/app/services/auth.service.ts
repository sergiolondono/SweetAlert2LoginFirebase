import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../UsuarioModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apiKey = 'AIzaSyDS0wtT1n7j9u0ox5me5GXwLUQieILRK5E';

  // Crear nuevo usuario
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // Autenticar usuario
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) { }

  logout(){}

  login(usuario: UsuarioModel){}

  nuevoUsuario(usuario: UsuarioModel){

    console.log(usuario);
    // const authData = {
    //   email: usuario.email,
    //   password: usuario.password,
    //   returnSecureToken: true
    // };

    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}signUp?key=${this.apiKey}`,
      authData
    );

  }
}
