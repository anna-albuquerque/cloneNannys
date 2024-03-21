import { TestBed } from '@angular/core/testing';

import { CuidadorService } from './cuidador.service';

describe('CuidadorService', () => {
  let service: CuidadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuidadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
