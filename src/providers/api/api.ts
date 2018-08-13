import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiProvider {
  
  public api: string = "http://stgclinica.ddns.net/cartaomais/webservice/";

  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');
  }

  public autenticarUsuario(user, senha){
    let metodo =  "autenticarusuario?";
    // user é o CPF e a senha é o numero do contrato
  	let parametros = "user=" + user + "&pw=" + senha;
  	
  	let req = this.api + metodo + parametros;

  	return this.http.get(req).map((res) => { 
  		return res.json(); 
  	});
  }

  public solicitarConsulta(dados){
    let metodo =  "solicitarConsulta?";

    let parametros = "paciente_id=" + dados.paciente_id + "&data=" + dados.data + "&consulta=" + dados.consulta + "&";

    if(Array.isArray(dados.turno)){
      parametros += "manha=" + ( (dados.turno.indexOf('m') === -1) ? "f" : "t") + "&";
      parametros += "tarde=" + ( (dados.turno.indexOf('t') === -1) ? "f" : "t") + "&";
      parametros += "noite=" + ( (dados.turno.indexOf('n') === -1) ? "f" : "t") + "&";
    }
    else{
      parametros += "manha=f&tarde=f&noite=f&";
    }
    
    let req = this.api + metodo + parametros;

    return this.http.get(req).map((res) => { 
      return res.json(); 
    });
  }

  public solicitarExame(dados){
    let metodo =  "solicitarExame?";

    let parametros = "paciente_id=" + dados.paciente_id + "&data=" + dados.data + "&exame=" + dados.exame + "&";
    
    if(Array.isArray(dados.turno)){
      parametros += "manha=" + ( (dados.turno.indexOf('m') === -1) ? "f" : "t") + "&";
      parametros += "tarde=" + ( (dados.turno.indexOf('t') === -1) ? "f" : "t") + "&";
      parametros += "noite=" + ( (dados.turno.indexOf('n') === -1) ? "f" : "t") + "&";
    }
    else{
      parametros += "manha=f&tarde=f&noite=f&";
    }
    
    let req = this.api + metodo + parametros;

    return this.http.get(req).map((res) => { 
      return res.json(); 
    });
  }

  public listarParceiros(){
    let metodo =  "listarprocedimentosparceiros?";
    
    let req = this.api + metodo;
    
    console.log(req);

    return this.http.get(req).map((res) => { 
      return res.json(); 
    });
  }
}
