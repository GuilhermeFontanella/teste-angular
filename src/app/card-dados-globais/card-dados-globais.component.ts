import { Component, OnInit } from '@angular/core';
import { DadosGlobais } from '../models/dados-globais.model';
import { CardDadosGlobaisService } from './card-dados-globais.service';

@Component({
  selector: 'app-card-dados-globais',
  templateUrl: './card-dados-globais.component.html',
  styleUrls: ['./card-dados-globais.component.css']
})
export class CardDadosGlobaisComponent implements OnInit {
  dado: DadosGlobais[] = []

  constructor(private service: CardDadosGlobaisService) { }

  ngOnInit(): void {
    this.getDadosGlobais();    
  }

  getDadosGlobais() {
    //this.service.getDadosGlobais().subscribe(result => {
    //  this.dado = result;  
    //});
    return this.dado = this.service.getDadosGlobais();
  }

}
