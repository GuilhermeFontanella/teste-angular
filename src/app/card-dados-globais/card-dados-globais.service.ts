import { Injectable } from '@angular/core';
import { DadosGlobais } from '../models/dados-globais.model';
/*
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
*/

@Injectable({
  providedIn: 'root'
})
export class CardDadosGlobaisService {

  //baseUrl = "http://servidor:port/database"

  dadosGlobais: Array<DadosGlobais> = [
    {
      titulo: "TOTAL RECEITA OBTIDA",
      valor: 190980.74
    },
    {
      titulo: "TOTAL RECEITA ATUAL",
      valor: 10053638.70
    },
    {
      titulo: "TOTAL RECEITA INCREMENTAL",
      valor: 1257936.98
    },
    {
      titulo: "TOTAL RECEITA PONTUAL",
      valor: 15695788.26
    },
    {
      titulo: "TOTAL TAXA INSTALAÇÃO",
      valor: 48053.99
    },
    {
      titulo: "TOTAL FÍSICO INCREMENTAL",
      valor: 1111590639.00
    },
    {
      titulo: "TOTAL RECEITA CONTRATADA",
      valor: 16989180.83
    },
    
  ];

  constructor(
    //private http: HttpClient
  ) { }

  getDadosGlobais() {
    return this.dadosGlobais;
  }

  /*
  getDadosGlobais(): Observable<DadosGlobais[]> {
    return this.http.get<DadosGlobais[]>(baseUrl);
  }
  */
}
