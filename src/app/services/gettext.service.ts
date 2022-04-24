import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GettextService {

  private _http : HttpClient;

  constructor(private _httpRef : HttpClient) 
  {
    this._http = _httpRef;
  }

  getSentences() : Observable<any>
  {
    var stringFromApi : string = "nothing so far";
    // from http://metaphorpsum.com/
    // 1 paragraph with 25 sentences should be enough text that nobody will run out before 1 minute passes
    return this._http.get("http://metaphorpsum.com/paragraphs/1/10", {responseType : 'text'});

    // const promise = this._http.get("http://metaphorpsum.com/paragraphs/1/25", {responseType : 'text'}).toPromise();

    // promise.then((data) => {
    //   stringFromApi = JSON.stringify(data)
    // });

    //return stringFromApi;
  }
}
