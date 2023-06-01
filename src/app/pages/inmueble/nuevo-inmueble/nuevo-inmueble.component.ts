import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InmuebleService } from 'src/app/Service/inmueble.service';
import { Inmueble } from 'src/app/models/Inmueble';
import { Usuario } from 'src/app/models/Usuario.model';

@Component({
  selector: 'app-nuevo-inmueble',
  templateUrl: './nuevo-inmueble.component.html',
  styleUrls: ['./nuevo-inmueble.component.css']
})
export class NuevoInmuebleComponent implements OnInit {

  @Output() inmuebleGuardado = new EventEmitter<Inmueble>();

  formin!: FormGroup;
  constructor (
    private inmuebleServicie: InmuebleService,
    private formBuilder: FormBuilder
  ){}
  toJson(value: any){
    return JSON.stringify(value);
  }

  ngOnInit(): void {
  this.formin = this.formBuilder.group({
    nombre: ['', Validators.required],
    direccion: ['', Validators.required],
    precio: ['', Validators.required],
    estado: ['', Validators.required],
    tipo_inmuble: ['', Validators.required],
    usuarios: ['', Validators.required],
  
  });
}
usuario:Usuario[]=[];
guardar(){
  if(this.formin.valid){
    const inmueble:  Inmueble = {
      nombre: this.formin.value.nombre,
      direccion: this.formin.value.direccion,
      precio: this.formin.value.precio,
      estado: this.formin.value.estado,
      tipo_inmuble: this.formin.value.tipo_inmuble,
      id_inmueble: this.formin.value.id_inmueble,
      usuarios:this.formin.value.Usuario
    };
    this.inmuebleServicie.crearNuevoUsuario(inmueble).subscribe({
      next:() => {
        this.inmuebleGuardado.emit(inmueble);
        alert('Inmueble Creado');
      },
      error:()=>{
        alert("Ocurrio un error en el servidor");
      },
      complete:()=>{
        this.formin.reset();
      }
    });

  }else{
    alert("Debe completar todos los campos");
  }
}
emitirEventoInmuebleGuardado(inmueble: Inmueble) {
  this.inmuebleGuardado.emit(inmueble);
}
}