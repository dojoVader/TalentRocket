import { TestBed } from '@angular/core/testing';

import { FlickerApiServiceService } from '../flicker-api-service.service';

describe('FlickerApiServiceService', () => {
  let service: FlickerApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlickerApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
