import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosGlobaisComponent } from './dados-globais.component';

describe('DadosGlobaisComponent', () => {
  let component: DadosGlobaisComponent;
  let fixture: ComponentFixture<DadosGlobaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosGlobaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosGlobaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
