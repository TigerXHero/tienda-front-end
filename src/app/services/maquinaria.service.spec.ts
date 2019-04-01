import { TestBed, inject } from '@angular/core/testing';

import { MaquinariaService } from './maquinaria.service';

describe('MaquinariaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaquinariaService]
    });
  });

  it('should be created', inject([MaquinariaService], (service: MaquinariaService) => {
    expect(service).toBeTruthy();
  }));
});
