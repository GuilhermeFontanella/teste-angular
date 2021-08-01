import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dados-globais',
  templateUrl: './dados-globais.component.html',
  styleUrls: ['./dados-globais.component.css']
})
export class DadosGlobaisComponent implements OnInit {
  @Input() dado: any;

  constructor() { }

  ngOnInit(): void { }
}
