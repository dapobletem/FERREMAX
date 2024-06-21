import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { DetalleProductoPage } from './detalle-producto.page'; // Ajusta la ruta según tu estructura

describe('DetalleProductoPage', () => {
  let component: DetalleProductoPage;
  let fixture: ComponentFixture<DetalleProductoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [], // No incluir DetalleProductoPage directamente aquí
      imports: [], // Asegúrate de importar cualquier módulo necesario aquí
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: { get: (key: string) => '1' }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
