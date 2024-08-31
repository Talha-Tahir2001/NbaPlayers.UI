import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NbaPlayer } from '../../models/nba-players';
import { NbaPlayerService } from '../../services/nba-players.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrl: './edit-player.component.css'
})
export class EditPlayerComponent implements OnInit{
  
  @Input() player?: NbaPlayer;
  @Output() playersUpdated = new EventEmitter<NbaPlayer[]>();


  constructor(private nbaPlayerService: NbaPlayerService) {}

  ngOnInit(): void {  }

  createPlayer(player: NbaPlayer) {
    this.nbaPlayerService.createNbaPlayers(player)
    .subscribe((players: NbaPlayer[]) => 
      this.playersUpdated.emit(players))
  }
  
  updatePlayer(player: NbaPlayer) {
    this.nbaPlayerService.updateNbaPlayers(player)
    .subscribe((players: NbaPlayer[]) => 
      this.playersUpdated.emit(players))
  }

  deletePlayer(player: NbaPlayer) {
    this.nbaPlayerService.deleteNbaPlayers(player)
    .subscribe((players: NbaPlayer[]) => 
      this.playersUpdated.emit(players))
  }


}
