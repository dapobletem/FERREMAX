import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DolarService {

  private apiKey = '8db42ec4dc88e3fac4f33afaff52008f8daede54';
  private urlBase = 'https://api.cmfchile.cl/api-sbifv3/recursos_api/dolar?apikey=';

  constructor(private http: HttpClient) { }

  getDailyDollar(): Observable<any> {
    const url = `${this.urlBase}${this.apiKey}&formato=json`;
    return this.http.get<any>(url);
  }
}
