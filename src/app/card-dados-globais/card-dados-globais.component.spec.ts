import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDadosGlobaisComponent } from './card-dados-globais.component';

describe('CardDadosGlobaisComponent', () => {
  let component: CardDadosGlobaisComponent;
  let fixture: ComponentFixture<CardDadosGlobaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDadosGlobaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDadosGlobaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
