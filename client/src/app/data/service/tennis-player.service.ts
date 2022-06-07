import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '@env';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TennisPlayerService {
  private apiURL = environment.url + 'player';

  constructor(private http: HttpClient) {
  }

  /**
   * Retrieve Tennis players by rank
   * @returns 
   */
  public getListPlayers(): Observable<any> {
    return this.http
      .get(this.apiURL , {observe: 'response' as 'body'})
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  /**
   * Retrieve player by id
   * @param id 
   * @returns 
   */
  public getPlayerById(id: number): Observable<any> {
    return this.http
      .get(this.apiURL + `/details/` + id, {
        observe: 'response' as 'body',
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  /**
   * Retrieve stats from all tennis players
   * @returns 
   */
   public getStats(): Observable<any> {
    return this.http
      .get(this.apiURL + `/get-stats` , {observe: 'response' as 'body'})
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

}
