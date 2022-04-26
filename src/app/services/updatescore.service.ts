import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from '../components/login/login.component';
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

    LoginComponent.userLetterScores[0].a=letterTable[0]; 
    LoginComponent.userLetterScores[0].b=letterTable[1]; 
    LoginComponent.userLetterScores[0].c=letterTable[2]; 
    LoginComponent.userLetterScores[0].d=letterTable[3];
    LoginComponent.userLetterScores[0].e=letterTable[4]; 
    LoginComponent.userLetterScores[0].f=letterTable[5]; 
    LoginComponent.userLetterScores[0].g=letterTable[6]; 
    LoginComponent.userLetterScores[0].h=letterTable[7]; 
    LoginComponent.userLetterScores[0].i=letterTable[8]; 
    LoginComponent.userLetterScores[0].j=letterTable[9];
    LoginComponent.userLetterScores[0].k=letterTable[10];
    LoginComponent.userLetterScores[0].l=letterTable[11];
    LoginComponent.userLetterScores[0].m=letterTable[12];
    LoginComponent.userLetterScores[0].n=letterTable[13];
    LoginComponent.userLetterScores[0].o=letterTable[14];
    LoginComponent.userLetterScores[0].p=letterTable[15];
    LoginComponent.userLetterScores[0].q=letterTable[16];
    LoginComponent.userLetterScores[0].r=letterTable[17];
    LoginComponent.userLetterScores[0].s=letterTable[18];
    LoginComponent.userLetterScores[0].t=letterTable[19];
    LoginComponent.userLetterScores[0].u=letterTable[20];
    LoginComponent.userLetterScores[0].v=letterTable[21];
    LoginComponent.userLetterScores[0].w=letterTable[22];
    LoginComponent.userLetterScores[0].x=letterTable[23];
    LoginComponent.userLetterScores[0].y=letterTable[24];
    LoginComponent.userLetterScores[0].z=letterTable[25];
    LoginComponent.userDetails[0].userElo=elo;
    LoginComponent.userDetails[0].wpm=wpm;

    return this._http.put(url, body, {responseType: 'text'});
  }
}
