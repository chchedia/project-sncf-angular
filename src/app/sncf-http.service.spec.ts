import { TestBed, inject } from '@angular/core/testing';

import { SncfHttpService } from './sncf-http.service';

describe('SncfHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SncfHttpService]
    });
  });

  it('should be created', inject([SncfHttpService], (service: SncfHttpService) => {
    expect(service).toBeTruthy();
  }));
});
