import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  constructor() { }

  // to do: http request to GET liste of users with top five ELOrank scores, in order of ELOrank

  leaderboardList = [
    { userName: 'Juliet', ELOrank: '2,119', WPM: '91' },
    { userName: 'Felix', ELOrank: '2,105', WPM: '90' },
    { userName: 'Mario', ELOrank: '1,997', WPM: '90' },
    { userName: 'Robin', ELOrank: '1,976', WPM: '90' },
    { userName: 'Fiona', ELOrank: '1,958', WPM: '89' }
  ]

  ngOnInit(): void {
  }

}
