import { TestBed } from '@angular/core/testing';

import { Firebase1Service } from './firebase1.service';

describe('Firebase1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Firebase1Service = TestBed.get(Firebase1Service);
    expect(service).toBeTruthy();
  });
});
