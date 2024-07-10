import { TestBed } from '@angular/core/testing';

import { SellerServeService } from './seller-serve.service';

describe('SellerServeService', () => {
  let service: SellerServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellerServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
