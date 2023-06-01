import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InmuebleService } from 'src/app/Service/inmueble.service';
import { Inmueble } from 'src/app/models/Inmueble';
import { TokenService } from 'src/app/Service/token.service';
@Component({
  selector: 'app-inmueble',
  templateUrl: './inmueble.component.html',
  styleUrls: ['./inmueble.component.css']
})
export class InmuebleComponent {

  inmuebleSeleccionado!:Inmueble;
  inmuebleIdSeleccionado!:number;
  isAdmin: boolean =false;

  constructor(
    private inmuebleSer: InmuebleService,
    private router:Router,
    private tokenService: TokenService

    ){}
    obtenerInmueble(inmueble: Inmueble){
      this.inmuebleSeleccionado = inmueble;
    }
    obtenerInmuebleId(inmueble: Inmueble){
      localStorage.setItem('idInmueble', inmueble.id_inmueble!.toString() ) //ojo
      this.router.navigate(['inmueble/editar']);
    }
    inmuebles: Inmueble[] = [];
    ngOnInit(){
      if(this.tokenService.isAdmin() ||  this.tokenService.isMod()){
        this.isAdmin = this.tokenService.isAdmin();
          this.inmuebleSer.listar().subscribe({
            next:(data: Inmueble[]) =>{
              this.inmuebles =data.filter((inmueble: Inmueble) =>inmueble.estado);
            },
            error:(error)=>{
              console.log(`OCURRIO UN ERROR AL TRAER LOS INMUEBLES ${error.estado}`);
              this.tokenService.logout();
              window.location.replace('/');
            },complete: () => {},
          });
        }else{
          this.router.navigate(['/unauthorize']);
        }
      }
      delete(id: number){
        this.inmuebleSer.eliminar(id).subscribe({
          next: (data: Inmueble[]) =>{
            this.inmuebles =data.filter((inmueble:Inmueble) =>inmueble.estado);
          },   error: (error) => {
            console.log(`Ocurrió un error al eliminar el inmueble ${error.estado}`);
          },
          complete: () => {},
        });
      }
      onInmuebleGuardado(inmueble: Inmueble) {
        this.inmuebles.push(inmueble);
      }
}
