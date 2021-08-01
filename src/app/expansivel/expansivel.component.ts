import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expansivel',
  templateUrl: './expansivel.component.html',
  styleUrls: ['./expansivel.component.css']
})
export class ExpansivelComponent implements OnInit {
  panelOpenState = false;
  panel: string = "FILTRO AVANÇADO"
  panelOpen: string = "Painel Expandido"

  constructor() { }

  ngOnInit(): void { }

  event(event: MouseEvent) {
    if(this.panelOpenState === false) {
      this.panelOpenState = true;
    } else if (this.panelOpenState === true) {
      this.panelOpenState = false;
    };
  }
}
