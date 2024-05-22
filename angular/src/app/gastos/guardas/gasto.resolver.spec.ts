import { TestBed } from '@angular/core/testing';

import { GastoResolver } from './gasto.resolver';

describe('GastoResolver', () => {
  let resolver: GastoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GastoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
