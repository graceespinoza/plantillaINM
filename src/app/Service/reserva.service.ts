import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reserva } from '../models/Reserva';
const jwt = localStorage.getItem('auth-token');
const baseUrl: string = 'http://localhost:8080/api';
const headers = new HttpHeaders({
  'Authorization': `Bearer ${jwt}`
});
@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(
    private http:HttpClient
  ) { }
  listar(){
    return this.http.get<Reserva[]>(`${baseUrl}/reserva`, {headers});
  }
  eliminar(id:number){
    return this.http.put<Reserva[]>(`${baseUrl}/reserva/eliminar/${id}`,null, {headers});
  }  
  crearNuevoReserva(reserva: Reserva){
    return this.http.post<Reserva>(`${baseUrl}/reserva`, reserva,  {headers});
  }

  obtenerUnReserva(id: number){
    return this.http.get<Reserva>(`${baseUrl}/reserva/${id}`,  {headers});
  }
  updateReserva(id:number ,reserva: Reserva){
    return this.http.put<Reserva>(`${baseUrl}/reserva/editar/${id}`, reserva,  {headers});
  }
 
}
