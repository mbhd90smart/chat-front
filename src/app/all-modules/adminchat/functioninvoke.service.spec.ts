import { TestBed } from '@angular/core/testing';

import { FunctioninvokeService } from './functioninvoke.service';

describe('FunctioninvokeService', () => {
  let service: FunctioninvokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunctioninvokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
