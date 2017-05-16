import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Injectable()
export class Crud {
  
  fullData:any[];

  constructor(public storage:Storage) {
    console.log('Hello TaskProvider Provider');
  }

  create(data:any,param:string){
    return this.storage.get(param).then((results) => {
      this.fullData = results ? results:[];
      this.fullData.push(data);
      return this.storage.set(param, this.fullData);
    })
  }

  readAll(param:string){
    return this.storage.get(param);
  }

  read(data:any,param:string){
    // return this.storage.get(param);
  }

  update(data:any,param:string){
    //creamos 
  }

  delete(data:any,param:string){
    //creamos 
  }

//   getData():Promise<string>{
//     return this.storage.get("tasks");
//   };
  
//   saveData(data:any){
//     return this.storage.get("tasks").then((results) => {
//       this.tasks = results ? JSON.parse(results):[];
//       this.tasks.push(data);
//       return this.storage.set("tasks", JSON.stringify(this.tasks));
//   });
    
//   }

}
