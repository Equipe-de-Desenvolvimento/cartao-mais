import { Component } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { Storage  } from '@ionic/storage';
import { PaginaOpcoesPage } from '../pagina-opcoes/pagina-opcoes';
import { TelaPrincipalPage } from '../tela-principal/tela-principal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public nav: Nav, public storage: Storage) {
  	storage.get('usuario_id').then((usuario_id) => {

      	if (usuario_id != null && usuario_id !== undefined) { // Caso ja tenha algum login no LOCAL STORAGE, ele ja acessa a tela principal

      		storage.get('usuario').then((usuario) => {
      			if (usuario != null && usuario !== undefined) {
			        /* Redirecionando para a Tele Principal */
		          	this.nav.setRoot(TelaPrincipalPage);
		        }
		    });

	    }

    });
  }

  public carregarPaginaOpcoes(){
  	this.nav.setRoot(PaginaOpcoesPage);
  }

}
