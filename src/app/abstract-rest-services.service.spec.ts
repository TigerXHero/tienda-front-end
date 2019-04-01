import { TestBed, inject } from '@angular/core/testing';

import { AbstractRestServicesService } from './abstract-rest-services.service';

describe('AbstractRestServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbstractRestServicesService]
    });
  });

  it('should be created', inject([AbstractRestServicesService], (service: AbstractRestServicesService) => {
    expect(service).toBeTruthy();
  }));
});
