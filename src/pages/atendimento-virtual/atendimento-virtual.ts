import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-atendimento-virtual',
  templateUrl: 'atendimento-virtual.html',
})
export class AtendimentoVirtualPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
  }

  fecharPagina(){
	this.view.dismiss();
  }

}
