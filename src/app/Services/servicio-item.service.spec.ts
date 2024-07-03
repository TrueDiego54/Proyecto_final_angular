import { TestBed } from '@angular/core/testing';

import { ServicioItemService } from './servicio-item.service';

describe('ServicioItemService', () => {
  let service: ServicioItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
