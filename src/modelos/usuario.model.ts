import { CRUD } from "../interfaces/crud.interface";
import { CrudProvider } from "../providers/crud/crud";

export class Usuario implements CRUD {
    id: number = null;
    name: string = null;
    surname: string = null;
    description?:string = null;
    imagen?: any;
    location?: string;  

    constructor(public crudProvider: CrudProvider){
    }

    create(){
        let usuario = {
           id: this.id,
           name: this.name,
           surname: this.surname,
           description: this.description,
           imagen: this.imagen,
           location: this.location
        };
        return this.crudProvider.create(usuario,'usuario');
    }
    readAll(){
        return this.crudProvider.readAll('usuario');
    }
    read(id:number){
        return this.crudProvider.read(id,'usuario');
    }
    update(){}
    delete(){} 
}