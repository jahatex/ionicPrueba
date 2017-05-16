import { CRUD } from "../interfaces/crud.interface";

export class Usuario implements CRUD {
    id: number;
    name: string;
    surname: string;
    imagen?: any;
    location?: string;

    constructor(id,name,surname,imagen?,location?){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.imagen = (imagen!=undefined) ? imagen : null;
        this.location = (location!=undefined) ? location : null;
    }

    create(){}
    read(){}
    update(){}
    delete(){} 
}