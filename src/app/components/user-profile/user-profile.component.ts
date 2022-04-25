import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

    constructor() {}  

  // to do: http request to GET user profile info
  userProfileInfoList = [
    { userName: LoginComponent.userDetails[0].firstName, ELOrank: LoginComponent.userDetails[0].userElo, WPM: LoginComponent.userDetails[0].wpm, avatarLink: LoginComponent.userDetails[0].avatarLink, keyboardLayout: LoginComponent.userDetails[0].keyboardLayout }
  ]
  userLetterSkillMatrix = [
    {
      A: LoginComponent.userLetterScores[0].a, 
      B: LoginComponent.userLetterScores[0].b, 
      C: LoginComponent.userLetterScores[0].c, 
      D: LoginComponent.userLetterScores[0].d, 
      E: LoginComponent.userLetterScores[0].e, 
      F: LoginComponent.userLetterScores[0].f, 
      G: LoginComponent.userLetterScores[0].g, 
      H: LoginComponent.userLetterScores[0].h, 
      I: LoginComponent.userLetterScores[0].i, 
      J: LoginComponent.userLetterScores[0].j,
      K: LoginComponent.userLetterScores[0].k, 
      L: LoginComponent.userLetterScores[0].l, 
      M: LoginComponent.userLetterScores[0].m, 
      N: LoginComponent.userLetterScores[0].n, 
      O: LoginComponent.userLetterScores[0].o, 
      P: LoginComponent.userLetterScores[0].p, 
      Q: LoginComponent.userLetterScores[0].q, 
      R: LoginComponent.userLetterScores[0].r, 
      S: LoginComponent.userLetterScores[0].s, 
      T: LoginComponent.userLetterScores[0].t,
      U: LoginComponent.userLetterScores[0].u, 
      V: LoginComponent.userLetterScores[0].v, 
      W: LoginComponent.userLetterScores[0].w, 
      X: LoginComponent.userLetterScores[0].x, 
      Y: LoginComponent.userLetterScores[0].y, 
      Z: LoginComponent.userLetterScores[0].z
    }
  ]

  ngOnInit(): void {
  }

}
