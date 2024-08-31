import { Component } from '@angular/core';
import { NbaPlayer } from './models/nba-players';
import { NbaPlayerService } from './services/nba-players.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NbaPlayers.UI';
  players: NbaPlayer[] = [];
  playerToEdit?: NbaPlayer;
  columnsToDisplay = ['nickName', 'firstName', 'lastName', 'team', 'button'];

  constructor(private nbaPlayerService: NbaPlayerService) { }

  ngOnInit(): void {
    this.nbaPlayerService
    .getNbaPlayers()
    .subscribe((result: NbaPlayer[]) => (this.players = result));
  }

  initNewPlayer(): void {
    this.playerToEdit = new NbaPlayer();
  }

  editPlayer(player: NbaPlayer): void {
    this.playerToEdit = player
  }

  updatePlayerList(players: NbaPlayer[]): void {
    this.players = players;
  }


}
