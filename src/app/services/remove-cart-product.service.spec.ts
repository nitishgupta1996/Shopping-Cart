import { TestBed } from '@angular/core/testing';

import { RemoveCartProductService } from './remove-cart-product.service';

describe('RemoveCartProductService', () => {
  let service: RemoveCartProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoveCartProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
