import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CrudProvider } from "../../providers/crud/crud";
import { Usuario } from "../../modelos/usuario.model";

/**
 * Generated class for the PerfilPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  pageTitle:string = "Perfil";
  nombre:string;
  id:number;
  usuario:Usuario;

  constructor(public navCtrl: NavController, public params: NavParams, crudProvider:CrudProvider) {
    this.id = params.get("id");
    this.usuario = new Usuario(crudProvider);
    this.usuario.read(this.id).then((Usuario)=>{
      this.usuario = Usuario;
    });
  }

  ionViewDidLoad() {
    console.log(this.id);
  }



  goBack(){
    this.navCtrl.popToRoot();
  }

}
