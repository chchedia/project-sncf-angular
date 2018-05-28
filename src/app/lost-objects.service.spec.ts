import { TestBed, inject } from '@angular/core/testing';

import { LostObjectsService } from './lost-objects.service';

describe('LostObjectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LostObjectsService]
    });
  });

  it('should be created', inject([LostObjectsService], (service: LostObjectsService) => {
    expect(service).toBeTruthy();
  }));
});
