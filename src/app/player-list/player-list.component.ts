import { Component, OnInit } from '@angular/core';
import { Player } from '../model/player';
import { PlayerService } from '../model/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
  providers: [PlayerService]
})
export class PlayerListComponent implements OnInit {

  players: Player[];
  selectedPlayer: Player;
    
  constructor(private playerService:PlayerService) {
  this.players = this.playerService.getPlayers();    
  }

  ngOnInit() {
  }

  onSelect(player: Player) {
      this.selectedPlayer = player;
      }
      
}
