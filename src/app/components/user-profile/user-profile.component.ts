import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  // to do: http request to GET user profile info

  userProfileInfoList = [
    { userName: 'Juliet', ELOrank: '2,119', WPM: '91', avatarLink: 'https://i.postimg.cc/gJzVLL46/image.png', keyboardLayout: 'QWERTY' }
  ]
  userLetterSkillMatrix = [
    {
      A: 100, B: 100, C: 100, D: 99, E: 100, F: 97, G: 100, H: 100, I: 100, J: 96,
      K: 95, L: 99, M: 100, N: 100, O: 100, P: 99, Q: 97, R: 100, S: 100, T: 100,
      U: 100, V: 100, W: 100, X: 99, Y: 97, Z: 98
    }
  ]

  ngOnInit(): void {
  }

}
