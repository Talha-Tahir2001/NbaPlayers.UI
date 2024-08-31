import { Injectable } from '@angular/core';
import { NbaPlayer } from '../models/nba-players';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class NbaPlayerService {

  private url = "NbaPlayer";

  constructor(private http: HttpClient) { }

  public getNbaPlayers() : Observable<NbaPlayer[]> {
    return this.http.get<NbaPlayer[]>(`${environment.apiUrl}${this.url}`);
  }

  public updateNbaPlayers(player: NbaPlayer) : Observable<NbaPlayer[]> {
    return this.http.put<NbaPlayer[]>(`${environment.apiUrl}${this.url}`, player);
  }

  public createNbaPlayers(player: NbaPlayer) : Observable<NbaPlayer[]> {
    return this.http.post<NbaPlayer[]>(`${environment.apiUrl}${this.url}`, player);
  }

  public deleteNbaPlayers(player: NbaPlayer) : Observable<NbaPlayer[]> {
    return this.http.delete<NbaPlayer[]>(`${environment.apiUrl}${this.url}/${player.id}`);
  }


}
