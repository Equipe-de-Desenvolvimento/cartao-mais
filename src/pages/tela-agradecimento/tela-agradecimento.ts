import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { LocaisAtendimentoPage } from '../locais-atendimento/locais-atendimento';

@IonicPage()
@Component({
  selector: 'page-tela-agradecimento',
  templateUrl: 'tela-agradecimento.html',
})
export class TelaAgradecimentoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
                public nav: Nav) {
  }

  public verDescontos() {
    
    this.nav.push(LocaisAtendimentoPage);
  }

}
