import { CRUD } from "../interfaces/crud.interface";
import { CrudProvider } from "../providers/crud/crud";

export class Usuario implements CRUD {
    id: number = null;
    name: string = null;
    surname: string = null;
    imagen?: any;
    location?: string;  

    constructor(public crudProvider: CrudProvider){
    }

    create(){
        let usuario = {
           id: this.id,
           name: this.name,
           surname: this.surname,
           imagen: this.imagen,
           location: this.location
        };
        return this.crudProvider.create(usuario,'usuario');
    }
    read(){
        return this.crudProvider.readAll('usuario');
    }
    update(){}
    delete(){} 
}