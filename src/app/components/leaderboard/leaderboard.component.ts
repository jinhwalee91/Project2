import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  _authService : AuthService ;
  leaderboardList : any = [];
  constructor(_authServiceRef : AuthService) {this._authService = _authServiceRef;}
  GetTopFive()
  {
  this._authService.GetTopFive().subscribe( (data) => {this.leaderboardList = data;
    console.log(this.leaderboardList) 
   })
  }

  // to do: http request to GET a list of users with top five ELOrank scores, in order of ELOrank


  ngOnInit(): void {
    this.GetTopFive();
  }

}
