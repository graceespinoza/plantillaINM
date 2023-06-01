import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Inmueble } from 'src/app/models/Inmueble';
@Component({
  selector: 'app-modal-confirma',
  templateUrl: './modal-confirma.component.html',
  styleUrls: ['./modal-confirma.component.css']
})
export class ModalConfirmaComponent {
  @Input() idIdmuebleoAEliminar!: Inmueble;
  @Output() eliminarInmueble = new EventEmitter<number>();
  eliminarInmuebleConfirmado() {
    this.eliminarInmueble.emit(this.idIdmuebleoAEliminar.id_inmueble);
}
}