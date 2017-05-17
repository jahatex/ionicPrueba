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

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {

  pageTitle:string = "Perfil de ";
  id:number;
  usuario:Usuario;

  constructor(public navCtrl: NavController, public params: NavParams, crudProvider:CrudProvider) {
    this.id = params.get("id");
    console.log("constructor "+this.id);
    this.usuario = new Usuario(crudProvider);
    this.usuario.read(this.id).then((Usuario)=>{
      this.usuario = Usuario;
    });
  }

  ionViewDidLoad() {
    this.pageTitle = this.pageTitle + this.usuario.name;
    console.log("ionViewDidLoad "+this.id);
  }

  goBack(){
    this.navCtrl.popToRoot();
  }

}
