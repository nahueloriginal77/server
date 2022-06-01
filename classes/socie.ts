export class tutor{
    public Nombre:string;
    public Apellido:string;

    public constructor(Nombre:string,Apellido:string){
        this.Nombre=Nombre;
        this.Apellido=Apellido;

    }

}
export class socie{
    public Nombre:string;
    public Apellido:string;
    public Dni:string;
    public Tutor:string;

    
    public constructor(Nombre:string,Apellido:string,Dni:string,Tutor:string){
        this.Nombre=Nombre;
        this.Apellido=Apellido;
        this.Dni=Dni;
        this.Tutor=Tutor;
}
}
export class domicilio{
    public direccion:string;
    public localidad:string;


    
    public constructor(direccion:string,localidad:string){
        this.direccion=direccion;
        this.localidad=localidad;
    }
}