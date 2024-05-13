import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  URL_SUPEBASE ='https://dfrsqtseebonqtptjjck.supabase.co/rest/v1/';
  constructor(private _http: HttpClient) { }

  supebaseheads = new HttpHeaders()
  .set ('apikey', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmcnNxdHNlZWJvbnF0cHRqamNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU0MDkyMDIsImV4cCI6MjAzMDk4NTIwMn0.A-bL8uaHjYsLNGw448ffmIC0KV4CmHS2yERlwCI-rao');

  AgregarFoto(product: producto): Observable<string | any> {
    console.log("HOLAAAAAA",product)
    return this._http.post<any>(this.URL_SUPEBASE + 'PRODUCTO?', product, { headers: this.supebaseheads }).pipe(
      map((product) => {
        console.log('Map', product);
        return product;
      }), catchError((err) => {
        console.log(err);
        return err;
      })
    );
  }


  getProduct(): Observable<any[]> {
    return this._http.get<any[]>(this.URL_SUPEBASE + "PRODUCTO?select=*", { headers: this.supebaseheads }).pipe(
      catchError((error) => {
        console.log(error);
        throw error;
      })
    );
  }

  deleteProduct(id: number): Observable<any[]> {
    return this._http.delete<any[]>(this.URL_SUPEBASE + 'PRODUCTO?id_producto=eq.' +  id, { headers: this.supebaseheads }).pipe(
      catchError((error) => {
        console.log(error);
        throw error;
      })
    );
  }



}
