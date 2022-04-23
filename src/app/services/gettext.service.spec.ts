import { TestBed } from '@angular/core/testing';

import { GettextService } from './gettext.service';

describe('GettextService', () => {
  let service: GettextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GettextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
