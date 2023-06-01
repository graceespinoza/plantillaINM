import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InmuebleService } from 'src/app/Service/inmueble.service';
import { TokenService } from 'src/app/Service/token.service';
import { Inmueble } from 'src/app/models/Inmueble';

@Component({
  selector: 'app-list-reserva',
  templateUrl: './list-reserva.component.html',
  styleUrls: ['./list-reserva.component.css']
})
export class ListReservaComponent {
  inmuebleSeleccionado!: Inmueble;
  inmuebleIdSeleccionado!: number;
  
  isMod:boolean =false;
  // usuarios: Observable<Usuario[]> = new Observable<Usuario[]>();
  constructor(
    private inmuebleService: InmuebleService,
    private router: Router,
    private tokenService: TokenService
  ) {}

  //funcion lista para ser exportada
  obtenerReserva(inmueble: Inmueble) {
    
    this.inmuebleSeleccionado = inmueble;
  
  }
  obtenerReservaId(inmueble: Inmueble) {
    localStorage.setItem('idInmueble', inmueble.id_inmueble!.toString());
    this.router.navigate(['reserva']);
  }
  inmuebles: Inmueble[] = [];
  ngOnInit() {
    if (this.tokenService.isMod() ) {
      this.isMod = this.tokenService.isMod(); //Cambia el valor de admin para usarlo en el html
      this.inmuebleService.listar().subscribe({
        next: (data: Inmueble[]) => {
          this.inmuebles = data.filter((inmueble: Inmueble) => inmueble.estado);
        },
        error: (error) => {
          console.log(`Ocurrió un error al traer los reserva ${error.estado}`);
          this.tokenService.logout();
          window.location.replace('/reserva');
        },
        complete: () => {},
      });
    }else{
      this.router.navigate(['/unauthorize']);
    }
  }
 
  onUsuarioGuardado(inmueble: Inmueble) {
    this.inmuebles.push(inmueble);
  }
}
