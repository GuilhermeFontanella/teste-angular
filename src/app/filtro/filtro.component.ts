import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Responsavel } from '../models/responsavel.model';
import { FiltroService } from './filtro.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {
  @Output() clear = new EventEmitter();  
  
  responsaveis: Responsavel[] = [];
  filtro: string = "FILTRO";
  filtroButton: string = "Filtrar";
  limparButton: string = "Limpar"
  inputResponsaveis!: FormGroup;

  constructor(
    private service: FiltroService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getResponsaveis();

    this.inputResponsaveis = this.fb.group({
      selectResponsaveis: ['']
    });

  }

  getResponsaveis() {
    //this.service.getResponsaveis().subscribe(result => {
    //  this.responsaveis = result;  
    //});
    return this.responsaveis = this.service.getResponsaveis();
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
