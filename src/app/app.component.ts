import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthService } from './services/auth.service';
import { UsuarioModel } from './UsuarioModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usuario;

  title = 'SweetAlert2Login';

  constructor(private auth: AuthService){

    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Espere por favor...'
    });

    Swal.showLoading();

    this.usuario = new UsuarioModel();
    this.usuario.email ='sa@gmail.com';
    this.usuario.password = '06328s';
    console.log(this.usuario);

    this.auth.nuevoUsuario(this.usuario)
    .subscribe(resp => {
      console.log(resp);
      Swal.close();
    }, (err) => {
      console.log(err.error.error.message);
      Swal.close();
    });

   
  }
}
