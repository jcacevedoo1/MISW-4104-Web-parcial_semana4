import { inject, TestBed } from '@angular/core/testing';

import { VehiculosService } from './vehiculos.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('VehiculosService', () => {
  let service: VehiculosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
     providers: [VehiculosService]
    });
  });

  it('should be created', inject([VehiculosService], (service: VehiculosService) => {
    expect(service).toBeTruthy();
  }));
});
