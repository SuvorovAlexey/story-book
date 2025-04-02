import { TestBed } from '@angular/core/testing';

import { SuvorovTestUiLibService } from './suvorov-test-ui-lib.service';

describe('SuvorovTestUiLibService', () => {
  let service: SuvorovTestUiLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuvorovTestUiLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
