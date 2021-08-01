import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pipelines',
  templateUrl: './pipelines.component.html',
  styleUrls: ['./pipelines.component.css']
})
export class PipelinesComponent implements OnInit {
  @Output() submit = new EventEmitter();

  constructor(
    
  ) { }

  ngOnInit(): void {
  }

  cadastrar(event: any) {
    this.submit.emit();
    window.alert("Oferta Cadastrada com Sucesso!");
  };

  cadastrarCustomizado(event: any) {
    this.submit.emit();
    window.alert("Oferta Customizada Cadastrada com Sucesso!");
  };

}
