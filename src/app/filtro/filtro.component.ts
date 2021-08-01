import { Component, EventEmitter, OnInit, Output, ViewChild, Input } from '@angular/core';
import { Responsavel } from '../models/responsavel.model';
import { FiltroService } from './filtro.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {
  @Output() clear = new EventEmitter();  
  
  responsaveis: Responsavel[] = [];
  filtro: string = "FILTRO";

  constructor(
    private service: FiltroService,
  ) { }

  ngOnInit(): void {
    this.responsaveis = this.service.getResponsaveis();
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
