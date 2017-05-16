export interface CRUD {
    create(): any;
    read(id:number): any;
    update(): any;
    delete(): any;  
}