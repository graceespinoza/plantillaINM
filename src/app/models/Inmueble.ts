import { Usuario } from "./Usuario.model"

export interface Inmueble{
    id_inmueble: number,
    nombre: string,
    direccion:string,
    precio:number,
    estado: string,
    tipo_inmuble: string,
    usuarios:Usuario
    
}
