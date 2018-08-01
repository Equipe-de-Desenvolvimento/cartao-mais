import { Component } from '@angular/core';
import { SolicitacaoExamePage } from '../solicitacao-exame/solicitacao-exame';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-agendamento-exames',
  templateUrl: 'agendamento-exames.html',
})
export class AgendamentoExamesPage {

  txtExame: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
  		      public view: ViewController, public modalCtrl: ModalController) {
  }

  fecharPagina(){
	  this.view.dismiss();
  }

  abrirTelaSolicitacao(){
    if (this.txtExame != "") {
    	let profileModal = this.modalCtrl.create(SolicitacaoExamePage, { exame: this.txtExame });
      profileModal.present();
    }
  }

}
