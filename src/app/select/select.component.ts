import { Component, Input,  OnInit } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() responsavel: any;
  @Input() formGroup!: FormGroup;
  @Input() controlName: string = '';

  nomes: string = '';

  constructor() { }

  ngOnInit(): void {
    this.nomes = this.responsavel.nome;
  }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

  selectChangeHandler(event: any) {
    console.log(event.target.value);  
  }
}
