import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { SolicitacaoConsultaPage } from '../solicitacao-consulta/solicitacao-consulta';

@IonicPage()
@Component({
  selector: 'page-agendamento-consultas',
  templateUrl: 'agendamento-consultas.html',
})
export class AgendamentoConsultasPage {

  public consultas = [{nome: "CLÍNICO GERAL", id: 1}, {nome: "ORTOPEDISTA", id: 2}, {nome: "PEDIATRIA", id: 3}, 
  					  {nome: "REUMATOLOGISTA", id: 4}, {nome: "UROLOGISTA", id: 5} ];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  			  public view: ViewController, public modalCtrl: ModalController) {}

  fecharPagina(){
	  this.view.dismiss();
  }

  telaSolicitacao(consulta) {
    let profileModal = this.modalCtrl.create(SolicitacaoConsultaPage, { consulta: consulta });
    profileModal.present();
  }


}
