import { TestBed } from '@angular/core/testing';

import { CostumValidatorService } from './costum-validator.service';

describe('CostumValidatorService', () => {
  let service: CostumValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CostumValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
