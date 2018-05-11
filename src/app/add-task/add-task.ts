export class AddTask{
    /*
    public nombre:string;
    public edad:number;

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    */

    // De esta manera se inicializa la propiedad y le asigna un valor que le llega por aprametro. 
   constructor(
        public nombreTarea:string,
        public proyecto:string,
        public fechaLimite:Date,
        public comentarios:string
    ){

   }
}