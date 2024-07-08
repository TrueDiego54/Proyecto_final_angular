import { Categoria } from "./categoria"

export class ItemVenta {
    id_item: Number =0
    public get_id_item(): Number {
        return this.id_item
    }
    public set_id_item(value: Number) {
        this.id_item = value
    }
    nombre: string = ''
    public get_nombre(): string  {
        return this.nombre
    }
    public set_nombre(value: string ) {
        this.nombre = value
    }
    descripcion: string =''
        public get_descripcion(): string {
        return this.descripcion
    }
    public set_descripcion(value: string ) {
        this.descripcion = value
    }
    precio: number =0
    public get_precio(): number {
        return this.precio
    }
    public set_precio(value: number ) {
        this.precio = value
    }
    categoria!: Categoria 
    public get_categoria(): Categoria {
        return this.categoria
    }
    public set_categoria(value: Categoria) {
        this.categoria = value
    }
}
