import { Categoria } from "./categoria"

export class ItemVenta {
    id_item:Number | null | undefined
    nombre:string | null | undefined
    descripcion:string | null | undefined
    precio:number | null | undefined
    categoria!: Categoria 
}
