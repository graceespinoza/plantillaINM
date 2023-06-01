import { Inmueble } from "./Inmueble";

export interface Reserva{
    id_reserva?:string,
    estado?:string,
    tipo?:string,
    hora?:string,
    fecha?:Date,
    inmueble?:Inmueble
}