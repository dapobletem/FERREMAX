import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs'; 
import { producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private _http: HttpClient) { }
  private baseUrl = 'http://localhost:5000';  

  agregarProducto(product: producto): Observable<any> {
    return this._http.post<any>(`${this.baseUrl}/agregar_producto`, product)
      .pipe(
        catchError(this.handleError)
      );
  }

  getProduct(): Observable<any[]> {
    return this._http.get<any[]>(`${this.baseUrl}/obtener_productos`)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteProduct(id: number): Observable<any> {
    return this._http.delete<any>(`${this.baseUrl}/eliminar_producto/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('Error en el servicio:', error);
    return throwError('Error en el servicio. Por favor, inténtalo de nuevo más tarde.');
  }



}
