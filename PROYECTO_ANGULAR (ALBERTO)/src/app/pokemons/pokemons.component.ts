import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  //pokemon: string = '<strong>Pikachu</strong>';

  constructor(private _router: Router) { }

  ngOnInit() {
  }

}
