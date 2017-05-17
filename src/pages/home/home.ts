import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Usuario } from "../../modelos/usuario.model";
import { CrudProvider } from "../../providers/crud/crud";
import { PerfilPage } from "../perfil/perfil";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  titulo:string = "Perfiles";
  usuario:Usuario;
  usuarios:Usuario[]=[];
  idUsuarioLogeado:number = 1;
  constructor(public navCtrl: NavController,crudProvider: CrudProvider ) {
    this.usuario = new Usuario(crudProvider);
    this.usuario.readAll().then((Usuarios)=>{
      this.usuarios = Usuarios;
    });
  }

  save(){
    this.usuario.create().then((result)=>{
      //console.log(result);
      if(result){
        console.log(result);
        //this.tasks = JSON.parse(result);  
        //this.tasks = result;
      }          
    }).catch((error)=>{
      console.log(error);
    });
  }

   verPerfil(id:number){
     console.log(id);
     this.navCtrl.push(PerfilPage,{id:id});
   }
}
