import { Injectable } from '@angular/core';
 
let players = [
   {
    name:'Thibault',
    roll_cofee : 0,
    roll_water : 0,
    roll_croco : 0,
    roll_base : 16,
    roll_other : 0,
    
    win_cofee : 0,
    win_water : 0,
    win_croco : 0,
    win_base : 9,
    win_other : 0,
    
    winrate : 0
    },
    {
    name:'Béranger',    
    roll_cofee : 0,
    roll_water : 0,
    roll_croco : 0,
    roll_base : 37,
    roll_other : 0,
    
    win_cofee : 0,
    win_water : 0,
    win_croco : 0,
    win_base : 15,
    win_other : 0,
    
    winrate : 0
    },
    {
    name:'Damien',
    roll_cofee : 0,
    roll_water : 0,
    roll_croco : 0,
    roll_base : 23,
    roll_other : 0,
    
    win_cofee : 0,
    win_water : 0,
    win_croco : 0,
    win_base : 8,
    win_other : 0,
    
    winrate : 0
    },
];

@Injectable()
export class PlayerService {

    private players;
    
  constructor() { 
    this.players = players;
    }
   
  getPlayers(){
      return this.players;
      }
    
    
}
