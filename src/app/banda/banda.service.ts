import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Banda } from './banda';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class BandaService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getBandas(): Observable<Banda[]> {
    return this.http.get<Banda[]>(this.apiUrl);
  }

}
