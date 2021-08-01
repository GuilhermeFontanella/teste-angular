import { Component, Input,  OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() responsavel: any;
  @Input() formulario: any;

  nomes: string = '';

  select = new FormControl('')

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.nomes = this.responsavel.nome;

    this.formulario = this.formBuilder.group({
      nivel: [this.nomes],
    });
  }

  selectChangeHandler(event: any) {
    console.log(event.target.value);  
  }

}
