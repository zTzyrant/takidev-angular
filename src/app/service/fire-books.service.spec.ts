import { TestBed } from '@angular/core/testing';

import { FireBooksService } from './fire-books.service';

describe('FireBooksService', () => {
  let service: FireBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
