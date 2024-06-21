import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('SfotoPage', () => {
  let activatedRoute: ActivatedRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: of({ id: '1' }) // Simula los parámetros que se pasan a través de ActivatedRoute
            }
          }
        }
      ]
    });
    activatedRoute = TestBed.inject(ActivatedRoute);
  });

  it('should create the page', () => {
    expect(activatedRoute.snapshot.params['id']).toEqual('1');
  });
});
