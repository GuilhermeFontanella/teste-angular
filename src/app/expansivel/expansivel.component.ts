import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-expansivel',
  templateUrl: './expansivel.component.html',
  styleUrls: ['./expansivel.component.css']
})
export class ExpansivelComponent implements OnInit {
  

  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {    
  }



}
