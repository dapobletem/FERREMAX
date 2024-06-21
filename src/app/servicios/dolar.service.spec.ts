import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DolarService } from './dolar.service';

describe('DolarService', () => {
  let service: DolarService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DolarService]
    });

    service = TestBed.inject(DolarService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve daily dollar value', () => {
    const mockResponse = { value: 750 };

    service.getDailyDollar().subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne('https://api.cmfchile.cl/api-sbifv3/recursos_api/dolar?apikey=8db42ec4dc88e3fac4f33afaff52008f8daede54&formato=json');
    expect(req.request.method).toEqual('GET');

    req.flush(mockResponse);
  });
});
