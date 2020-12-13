import { TestBed } from '@angular/core/testing';
import { NavigationService } from './navigation.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NavigationService', () => {
  let service: NavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NavigationService]
    });
    service = TestBed.inject(NavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
