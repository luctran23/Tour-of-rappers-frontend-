import { TestBed } from '@angular/core/testing';

import { RapperService } from './rapper.service';

describe('RapperService', () => {
  let service: RapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
