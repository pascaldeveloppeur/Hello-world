import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {  Observable} from 'rxjs';
import { BrowserDataPage } from './browser-data-page';
import { BrowserDataFilter } from './browser';
 


    
@Injectable({
  providedIn: 'root'
})
export class FileService {
   
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('sergeyAlfresco:sergeyAlfresco')
    })

  };
  constructor(private httpClient: HttpClient) { }
   
  public getItems(): Observable<any>{
    return this.httpClient.get("http://localhost:9194/bcephal-file-manager/browser",this.httpOptions);
  }

  
  public fetchPage(filter:BrowserDataFilter): Observable<BrowserDataPage>{
    return this.httpClient.post<BrowserDataPage>("http://localhost:9194/bcephal-file-manager/browser-items",filter,this.httpOptions);
  }


}