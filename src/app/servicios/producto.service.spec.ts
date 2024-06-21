import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductoService } from './producto.service';
import { HttpClient } from '@angular/common/http';  // Asegúrate de importar HttpClient

describe('ProductoService', () => {
  let service: ProductoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Importa HttpClientTestingModule
      providers: [ProductoService]  // Agrega ProductoService a los providers
    });
    service = TestBed.inject(ProductoService);  // Obtiene la instancia del servicio
    httpMock = TestBed.inject(HttpTestingController);  // Obtiene HttpTestingController para simular peticiones HTTP
  });

  afterEach(() => {
    httpMock.verify();  // Verifica que no queden peticiones HTTP pendientes
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Agrega tus pruebas adicionales aquí...
});
