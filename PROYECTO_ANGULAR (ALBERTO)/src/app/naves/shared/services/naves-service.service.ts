import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Naves } from '../models/naves.model';

@Injectable({
  providedIn: 'root'
})
export class NavesServiceService {

  navesApiUrl: string = "https://swapi.co/api/starships/?format=json";

  constructor(private _http: HttpClient) { }

  getNavesObserv(): Observable<Naves[]> {
    // Lo que voy a devolver
    const naves: Naves[] = [];
    const scope = this;
    const getUrl = this.navesApiUrl;


    scope._http.get(getUrl).subscribe((result: any) => {
      result['results'].forEach((val: any) => {

        /*
        public name: string,
        public model: string,
        public manufacturer: string,
        public cost_in_credits: string,
        public length: string,
        public starship_class: string,
        public max_atmosphering_speed: string
        */
        scope._http.get(val.url).subscribe((data: any) => {
          naves.push(new Naves(
            data.name,
            data.model,
            data.manufacturer,
            data.cost_in_credits,
            data.length,
            data.starship_class,
            data.max_atmosphering_speed
          )
          );
        });
      });
    });

    return of(naves);
  }
}
