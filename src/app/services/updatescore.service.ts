import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  updateScore(userID : number, wpm: number, elo: number)
  {
    var body = {userID, wpm, elo};

    return this._http.put("https://localhost:7274/UpdateScore?userId=" + userID + "&wpm=" + wpm + "&elo=" + elo, body);
  }
}
