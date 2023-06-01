import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InmuebleService } from 'src/app/Service/inmueble.service';
import { TokenService } from 'src/app/Service/token.service';
import { Inmueble } from 'src/app/models/Inmueble';
import { Usuario } from 'src/app/models/Usuario.model';

@Component({
  selector: 'app-editar-inmueble',
  templateUrl: './editar-inmueble.component.html',
  styleUrls: ['./editar-inmueble.component.css']
})
export class EditarInmuebleComponent {
  inmueble!: Inmueble;
  forms!: FormGroup;
  usuarios: Usuario[] =[];
  @Input() idInmuebleEditar!: Inmueble;
  id_inmueble = localStorage.getItem('idInmueble');

  constructor(
    private inmuebleService: InmuebleService,
    private formBuilder: FormBuilder,
    private router: Router,
    private tokenSer: TokenService
  ) { }
  readonlyMode: boolean = true;
  ngOnInit() {
    if (this.tokenSer.isAdmin()) {
      this.forms = this.formBuilder.group({
        nombre: ['', Validators.required],
        direccion: ['', Validators.required],
        precio: ['', Validators.required],
        estado: ['', Validators.required],
        tipo_inmuble: ['', Validators.required],
        usuarios: ['', Validators.required],
      });
      this.inmuebleService.obtenerUnUsuario(+this.id_inmueble!).subscribe({
        next: (data) => {
          this.inmueble = data;
        },
        error: (error) => {
          console.log(`Ocurrió un error al traer el usuario ${error.status}`);
        },
        complete: () => {
          this.forms.patchValue({
            nombre:this.inmueble.nombre,
            direccion:this.inmueble.direccion,
            precio:this.inmueble.precio,
            estado:this.inmueble.estado,
            tipo_inmuble:this.inmueble.tipo_inmuble,
            usuarios:this.inmueble.usuarios
          });
        }
      });
      }else{
        this.router.navigate(['/unauthorize']);

      }
  }
  volver(){
    localStorage.removeItem('idImueble');
    this.router.navigate(['inmueble'])
  }
  guardar() {
    if (this.forms.valid) {
      const inmueble: Inmueble = {
       id_inmueble: this.inmueble.id_inmueble,
       nombre: this.forms.value.nombre,
       direccion: this.forms.value.direccion,
       precio: this.forms.value.precio,
       estado:this.forms.value.estado,
       tipo_inmuble:this.forms.value.tipo_inmuble,
            usuarios:this.forms.value.usuarios
      };
      this.inmuebleService
        .updateUsuario(inmueble.id_inmueble!, inmueble)
        .subscribe({
          next:(data) => {
            this.inmueble = data;
            alert('Se actualizo con exito');
            this.router.navigate(['inmueble']);
          },
          error: (error) => { console.log(`Ocurrió un error al actualizar el usuario ${error.status}`); },
          complete: () => {
            localStorage.removeItem('idInmueble');
           }
        });
    } else {
      alert('Debe completar todos los campos');
    }
  }
}
