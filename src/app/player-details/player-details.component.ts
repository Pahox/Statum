import { Input, Component, OnInit } from '@angular/core';
import { Player } from '../model/player'; 

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {
  
  @Input()
  player:Player;  
  constructor() { }

  ngOnInit() {
  }

}
