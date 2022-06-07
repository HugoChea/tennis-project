import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalStats } from '@data/model/global-stats';
import { TennisPlayer } from '@data/model/tennis-player';
import { TennisPlayerService } from '@data/service/tennis-player.service';

/**
 * Home component
 * Show all players by rank
 * Can filter list by name
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /**
   * List of all tennis players fetched from api kept in memory
   */
  tennisPlayerList : TennisPlayer[] = [];

  /**
   * List of tennis players displayed to end users :
   * tennisPlayerList keep all players retrieved from api in memory
   * while tennisPlayerListDisplayed have result from various operations (eg: filters)
   */
  tennisPlayerListDisplayed : TennisPlayer[] = [];

  /**
   * Input used to filters list of tennisPlayerList
   */
  inputSearch: string = "";

  globalStats!: GlobalStats;

  /**
   * 
   * @param tennisPlayerService 
   * @param router 
   */
  constructor(
    public tennisPlayerService : TennisPlayerService,
    public router : Router
  ) { }

  /**
   * Call getListPlayers from tennisPlayerService to fetch all tennis players by rank
   */
  ngOnInit(): void {
    this.tennisPlayerService.getListPlayers().subscribe(
      (res) => {
        this.tennisPlayerList = res.body;
        this.tennisPlayerListDisplayed = this.tennisPlayerList;
      }
    );

    this.tennisPlayerService.getStats().subscribe(
      (res) => {
        this.globalStats = res.body;
      }
    );
  }

  /**
   * Filter players from tennisPlayerList by inputSearch and saved in tennisPlayerListDisplayed
   */
  search(){
    this.tennisPlayerListDisplayed = this.tennisPlayerList.filter(
      player => (player.firstname + " " + player.lastname).toLowerCase().includes(this.inputSearch.trim().toLowerCase())
    )
  }

  /**
   * Navigate to details when clicking on tennis player card
   * @param id 
   */
  toDetails(id : number){
    this.router.navigate(['/details/', id]);
  }

}
