import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CafeService {
url:any ="http://localhost:3000/cafes";

  constructor(private http:HttpClient) { }

  getList()
  {
    return this.http.get(this.url);
  }
}
