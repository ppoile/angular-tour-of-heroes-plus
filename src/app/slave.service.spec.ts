import { TestBed, inject } from '@angular/core/testing';

import { SlaveService } from './slave.service';

describe('SlaveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlaveService]
    });
  });

  it('should be created', inject([SlaveService], (service: SlaveService) => {
    expect(service).toBeTruthy();
  }));
});
