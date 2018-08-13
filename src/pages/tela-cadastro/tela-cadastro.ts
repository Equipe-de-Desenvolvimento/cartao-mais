import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, ViewController } from 'ionic-angular';
// import { TelaAgradecimentoPage } from '../tela-agradecimento/tela-agradecimento';


@IonicPage()
@Component({
  selector: 'page-tela-cadastro',
  templateUrl: 'tela-cadastro.html',
})
export class TelaCadastroPage {
  dados = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public nav: Nav, public view: ViewController) {
  }

  fecharPagina(){
    this.view.dismiss();
  }

  public enviarFormulario() {
    console.log('');
  }

  public mostrarTelaAgradecimento(){
  	this.nav.setRoot('TelaAgradecimentoPage');
  }

}
