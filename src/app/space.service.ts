import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Crew } from './classes/crew';
import { Destinations } from './classes/destinations';
import { Technology } from './classes/technology';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  constructor(private http: HttpClient) { }

  crewURL = 'https://space-tourism-app-52afc-default-rtdb.firebaseio.com/crew.json';
  destinationsURL = 'https://space-tourism-app-52afc-default-rtdb.firebaseio.com/destinations.json';
  technologyURL = 'https://space-tourism-app-52afc-default-rtdb.firebaseio.com/technology.json';

  getAllCrew(): Observable<any> {
    return this.http.get<Crew>(this.crewURL)
  }

  getAllDesinations(): Observable<any> {
    return this.http.get<Destinations>(this.destinationsURL)
  }

  getAllTechnology(): Observable<any> {
    return this.http.get<Technology>(this.technologyURL)
  }
}
