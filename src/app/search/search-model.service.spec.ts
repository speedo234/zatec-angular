import { TestBed } from '@angular/core/testing';

import { SearchModelService } from './search-model.service';

describe('SearchModelService', () => {
  let service: SearchModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
