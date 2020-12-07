import { Injectable } from '@angular/core';
import { Pokemons } from '../models/pokemons.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { NotificationsService } from 'src/app/core/notifications.service';

@Injectable({
  providedIn: 'root'
})


export class PokemonsService {

  private _pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon';
  public img: string;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  _



  constructor(private _http: HttpClient,
    private _notificationsService: NotificationsService) { }


  /*
getPokemons(offset: number = 0, limit: number = 30): Pokemons[] {
  // Lo que voy a devolver
  const POK: Pokemons[] = [];
  const getUrl = this._pokeApiUrl + `?offset=${offset}&limit=${limit}`;

  this._http.get(getUrl).subscribe((result: any) => {
    result['results'].forEach((val: any) => {
      const name: string = val.name;
      const id: number = +(val.url.split('/').slice(-2,-1)[0]);
      POK.push(new Pokemons(id, name, 100, 10));

    })
  });
  return POK;
}
*/

  getPokemonsObserv(offset: number = 0, limit: number = 30): Observable<Pokemons[]> {
    // Lo que voy a devolver
    const POK: Pokemons[] = [];
    const scope = this;
    const getUrl = this._pokeApiUrl + `?offset=${offset}&limit=${limit}`;


    scope._http.get(getUrl).subscribe((result: any) => {
      result['results'].forEach((val: any) => {

        scope._http.get(val.url).subscribe((pokData: any) => {
          POK.push(new Pokemons(
            pokData.id,
            pokData.name,
            pokData.base_experience,
            pokData.height,
            pokData.weight,
            pokData.types,
            'male'
          )
          );
        });
      });
    });
    return of(POK);
  }




  // Obtenemos los datos en bruto que nos devuelve la API
  getRawPokemon(id: number): Observable<any> {
    const scope = this;

    return this._http.get(this._pokeApiUrl + '/' + id);
  }


  getImgPokemon(id: number) {
    const scope = this;
    const IMG: string[] = [];

    this._http.get(this._pokeApiUrl + '/' + id).subscribe(result => {
      IMG.push('https:' + JSON.stringify(result['sprites']).split(',')[4].split(':')[2].replace('"', ''));
    });

    return of(IMG);
  }


  /** POST: Añadir un nuevo Pokemon en el servidor */
  addPokemon(pok: Pokemons): Observable<Pokemons> {
    const scope = this;

    return scope._http.post<Pokemons>(scope._pokeApiUrl, pok, scope.httpOptions).pipe(
      tap((newPok: Pokemons) => scope.log(`added Pokemon con id=${newPok.id}`)),
      catchError(scope.handleError<Pokemons>('addPokemon'))
    );
  }

  /** PUT: Modificar un Pokemon en el servidor */
  updatePokemons(pok: Pokemons): Observable<any> {
    const scope = this;

    return scope._http.put(scope._pokeApiUrl, pok, scope.httpOptions).pipe(
      tap(_ => scope.log(`updated pok id=${pok.id}`)),
      catchError(scope.handleError<any>('updatePokemon'))
    );
  }
  // DELETE: Borrar Pokemon por objeto o ID en el servidor
  deletePokemon(pok: Pokemons | number): Observable<Pokemons> {
    const scope = this;
    const id = typeof pok === 'number' ? pok : pok.id;
    const url = `${scope._pokeApiUrl}/${id}`;

    return scope._http.delete<Pokemons>(url, scope.httpOptions).pipe(
      tap(_ => scope.log(`deleted pok id=${id}`)),
      catchError(scope.handleError<Pokemons>('deletepok'))
    );
  }

  private handleError<T>(method = 'operación', result?: T) {
    return (error: any): Observable<T> => {

      // Aquí iría la gestión del error...

      // Lo mostramos en consola
      console.error(error);

      // Mostramos el error como notificación
      this.log(`${method} falló: ${error.message}`);

      // Devolvemos un resultado vacío
      return of(result as T);
    };

  }

  private log(msg: string): void {
    // this._notificationsService.add(`PokemonsService: ${msg}`);
    this._notificationsService.add('PokemonsList: ' + msg);
  }



}

