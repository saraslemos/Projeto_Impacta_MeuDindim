import { TestBed } from '@angular/core/testing';

import { GastosNovoService } from './gastos-novo.service';

describe('GastosNovoService', () => {
  let service: GastosNovoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GastosNovoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
