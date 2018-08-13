import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-lista-procedimentos',
  templateUrl: 'lista-procedimentos.html',
})
export class ListaProcedimentosPage {
  dados: any;
  lista_proc: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, ) {
  	this.dados = navParams.get('dados');
  	this.lista_proc = navParams.get('dados');
  }

  fecharPagina(){
	  this.view.dismiss();
  }

  filtrarProcedimentos(ev: any){
  	let val = ev.target.value;

    var result = new Array();

  	if (val.length != '0') {
  		for (var i = 0; i < this.dados.procedimentos.length; i++) {

  			if (this.dados.procedimentos[i].procedimento.indexOf(val) > -1 ) {
  				result.push(this.dados.procedimentos[i]);
  			}
  		}
    }

    // this.lista_proc.procedimentos = result;
  }
}
