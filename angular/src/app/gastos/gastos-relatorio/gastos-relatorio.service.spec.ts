import { TestBed } from '@angular/core/testing';

import { GastosRelatorioService } from './gastos-relatorio.service';

describe('GastosRelatorioService', () => {
  let service: GastosRelatorioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GastosRelatorioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
