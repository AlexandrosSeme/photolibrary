import { TestBed } from '@angular/core/testing';
import { RequestsService } from './requests.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';



describe('RequestsService', () => {
  let service: RequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
