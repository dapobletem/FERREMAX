export class producto {
    constructor(
        public id_producto: number,
        public codigo_producto: string,
        public nombre: string,
        public descripcion: string,
        public id_marca: number,
        public id_categoria: number,
        public stock: string,
        public imagen: string,
        public precio:string,
    ) {}
}