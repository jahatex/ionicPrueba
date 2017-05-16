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

  usuario:Usuario;
  usuarios:Usuario[]=[];
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

  // verPerfil(){
  //   this.navCtrl.push(PerfilPage,{id:this.usuario.id});
  // }
}
