import { TestBed } from '@angular/core/testing';

import { VoyageurGuard } from './voyageur.guard';

describe('VoyageurGuard', () => {
  let guard: VoyageurGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VoyageurGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
