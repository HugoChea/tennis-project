import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TennisPlayer } from '@data/model/tennis-player';
import { TennisPlayerService } from '@data/service/tennis-player.service';

/**
 * Show details of a player
 */
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  /**
   * Id of the player, retrieved when component is created by url param
   */
  id!: number;

  /**
   * Contain Player object fetched from api by id
   */
  player!: TennisPlayer;

  /**
   * Retrieve id from route param
   * @param tennisPlayerService 
   * @param router 
   * @param route 
   */
  constructor(
    public tennisPlayerService : TennisPlayerService,
    public router : Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    
  }

  /**
   * Call getPlayersById from tennisPlayerService which retrieve one player by his id
   */
  ngOnInit(): void {
    this.tennisPlayerService.getPlayerById(this.id).subscribe(
      (res) => {
        this.player = res.body;
      }
    );
  }

}
