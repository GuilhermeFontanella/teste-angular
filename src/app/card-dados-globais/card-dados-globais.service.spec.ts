import { TestBed } from '@angular/core/testing';

import { CardDadosGlobaisService } from './card-dados-globais.service';

describe('CardDadosGlobaisService', () => {
  let service: CardDadosGlobaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardDadosGlobaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
