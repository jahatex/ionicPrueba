import { CRUD } from "../interfaces/crud.interface";

export class Portfolio implements CRUD {
    id: number;
    idU: number;    
    image: any;
    name: string;
    descripcion?: string;

    constructor(id,idU,image,name,descripcion?){
        this.id = id;
        this.idU = idU;
        this.image = image;
        this.name = name;
        this.name = (descripcion!=undefined) ? descripcion : null;
    }

    create(){}
    read(){}
    update(){}
    delete(){} 
}