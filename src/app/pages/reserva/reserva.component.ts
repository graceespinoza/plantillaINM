import { Component,Output, EventEmitter } from '@angular/core';
import { ReservaService } from 'src/app/Service/reserva.service';
import { Reserva } from 'src/app/models/Reserva';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Service/token.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent {
  @Output() reservaGuardado = new EventEmitter<Reserva>();

  reservaSeleccionado!: Reserva;
  reservaIdSeleccionado!: number;
  
  form!: FormGroup;
  
  isMod:boolean =false;
  // usuarios: Observable<Usuario[]> = new Observable<Usuario[]>();
  constructor(
    private reservaService: ReservaService,
    private router: Router,
    private formBuilder: FormBuilder,

    private tokenService: TokenService
  ) {}

  //funcion lista para ser exportada
  obtenerReserva(reserva: Reserva) {
    this.reservaSeleccionado = reserva;
  }
  obtenerReservaId(reserva: Reserva) {
    localStorage.setItem('idReserva', reserva.id_reserva!.toString());
    this.router.navigate(['reserva/list']);
  }
  reservas: Reserva[] = [];
  ngOnInit() {
  // TODO document why this method 'ngOnInit' is empty

    this.form = this.formBuilder.group({
      estado: ['', Validators.required],
      tipo: ['', Validators.required],
      hora: ['', Validators.required],
      fecha: ['', Validators.required],
      inmueble: ['', Validators.required],
   
    });
  }
  guardar() {
    if (this.form.valid) {
      const reserva: Reserva = {
        estado: this.form.value.estado,
        tipo: this.form.value.tipo,
        hora: this.form.value.hora,
        fecha: this.form.value.fecha,
        inmueble: this.form.value.inmueble,
      };
      this.reservaService.crearNuevoReserva(reserva).subscribe({
        next:() => {
          this.reservaGuardado.emit(reserva);
          alert('Reserva creado');
        },
        error:()=>{
          alert('Ocurrió un error en el servidor');
        },
        complete:() => {
          this.form.reset();
        }
      });
    } else {
      alert('Debe completar todos los campos');
    }
  }
  emitirEventoReservaGuardado(reserva: Reserva) {
    this.reservaGuardado.emit(reserva);
  }
}

