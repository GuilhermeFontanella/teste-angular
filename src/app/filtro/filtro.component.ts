import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Responsavel } from '../models/responsavel.model';
import { PipelinesService } from '../pipelines/pipelines.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {
  @Output() clear = new EventEmitter();

  filtro: string = "FILTRO";

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

  formulario!: FormGroup;

  constructor(
    
  ) { }

  ngOnInit(): void {
    
  }

  filtrar(object: Responsavel[]) {
    object.forEach((e) => {
      let nivel = e.nivel;
      let nomes = e.nome;
      console.log(`Nível: ${nivel} - Nome: [${nomes}]`);
    }); 
  }

  limparCampos(event: any) {
    this.clear.emit(event);
  }


}
