import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HashTable } from 'angular-hashtable';

@Injectable({
  providedIn: 'root'
})
export class UpdatescoreService {

  // https://localhost:7274/UpdateScore?userId=1&wpm=36&elo=998

  private _http : HttpClient;

  constructor(private _httpRef : HttpClient) 
  {
    this._http = _httpRef;
  }

  updateScore(userID : number, wpm: number, elo: number, letterTable : HashTable<string, number>)
  {
    var body = {userID, wpm, elo, letterTable};

    return this._http.put("https://localhost:7274/UpdateScore?userId=" + userID + "&wpm=" + wpm + "&elo=" + elo, body);
  }
}
