import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inmueble } from '../models/Inmueble';
const jwt = localStorage.getItem('auth-token');

const baseUrl: string = 'http://localhost:8080/api';
const headers = new HttpHeaders({
  'Authorization': `Bearer ${jwt}`
});
@Injectable({
  providedIn: 'root'
})
export class InmuebleService {

  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<Inmueble[]>(`${baseUrl}/inmueble`, {headers});
  }
  eliminar(id:number){
    return this.http.put<Inmueble[]>(`${baseUrl}/inmueble/eliminar/${id}`,null, {headers});
  }  
  crearNuevoUsuario(inmueble: Inmueble){
    return this.http.post<Inmueble>(`${baseUrl}/inmueble`, inmueble,  {headers});
  }

  obtenerUnUsuario(id: number){
    return this.http.get<Inmueble>(`${baseUrl}/inmueble/${id}`,  {headers});
  }
  updateUsuario(id:number ,inmueble: Inmueble){
    return this.http.put<Inmueble>(`${baseUrl}/inmueble/editar/${id}`, inmueble,  {headers});
  }
 

}
