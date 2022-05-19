import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Banda } from './banda';
import { Observable } from 'rxjs';

@Injectable()
export class BandaService {

  constructor(private http: HttpClient) { }

  getBandas(): Observable<Banda[]> {
    return this.http.get<Banda[]>("https://raw.githubusercontent.com/Uniandes-isis2603/recursos-isis2603/master/json/rockbands.json");
  }

}
