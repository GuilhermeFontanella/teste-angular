import { Injectable } from '@angular/core';
import { Responsavel } from '../models/responsavel.model';

@Injectable({
  providedIn: 'root'
})
export class FiltroService {

  responsaveis: Array<Responsavel> = [ 
    {
      nivel: 3,
      nome: [
        "Aviões do Forró",
        "Chiclete com Banana",
        "Araketu",
        "É o tchan"
      ]
    },
    {
      nivel: 2,
      nome: [
        "Tom Jobim",
        "Elis Regina",
        "Chico Buarque",
        "Djavan"
      ],
    },
    {
      nivel: 1,
      nome: [
        "Pink Floyd",
        "Queen",
        "Red Hot Chilli Pepers",
        "Iron Maiden"
      ],
    }
  ];

  constructor() { }

  getResponsaveis() {
    return this.responsaveis;
  }

}
