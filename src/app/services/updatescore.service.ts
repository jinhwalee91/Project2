import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { HashTable } from 'angular-hashtable';

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

  updateScore(userID : number, wpm: number, elo: number, letterTable : any)
  {
    var url = `https://localhost:7274/UpdateScore?userId=${userID}&wpm=${wpm}&elo=${elo}&a=${letterTable[0]}&b=${letterTable[1]}&c=${letterTable[2]}&d=${letterTable[3]}
    &e=${letterTable[4]}&f=${letterTable[5]}&g=${letterTable[6]}&h=${letterTable[7]}&i=${letterTable[8]}&j=${letterTable[9]}&k=${letterTable[10]}&l=${letterTable[11]}
    &m=${letterTable[12]}&n=${letterTable[13]}&o=${letterTable[14]}&p=${letterTable[15]}&q=${letterTable[16]}&r=${letterTable[17]}&s=${letterTable[18]}&t=${letterTable[19]}
    &u=${letterTable[20]}&v=${letterTable[21]}&w=${letterTable[22]}&x=${letterTable[23]}&y=${letterTable[24]}&z=${letterTable[25]}`
    var body = {userID, wpm, elo, letterTable};

    return this._http.put(url, body, {responseType: 'text'});
  }
}
