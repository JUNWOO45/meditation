import { TestBed } from '@angular/core/testing';

import { BackgroundServiceService } from './background-service.service';

describe('BackgroundServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackgroundServiceService = TestBed.get(BackgroundServiceService);
    expect(service).toBeTruthy();
  });
});
