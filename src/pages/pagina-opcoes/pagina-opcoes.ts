import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { TelaLoginPage } from '../tela-login/tela-login'
import { TelaCadastroPage } from '../tela-cadastro/tela-cadastro';

@IonicPage()
@Component({
  selector: 'page-pagina-opcoes',
  templateUrl: 'pagina-opcoes.html',
})
export class PaginaOpcoesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public nav: Nav) {
  }

  public telaLogin() {
  	this.nav.push(TelaLoginPage);
  }


  public naoSouCliente() {
  	this.nav.push(TelaCadastroPage);
  }
}
