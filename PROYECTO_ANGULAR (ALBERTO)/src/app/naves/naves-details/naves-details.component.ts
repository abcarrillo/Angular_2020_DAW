import { Component, OnInit, Input } from '@angular/core';
import { Naves } from '../shared/models/naves.model';

@Component({
  selector: 'app-naves-details',
  templateUrl: './naves-details.component.html',
  styleUrls: ['./naves-details.component.scss']
})
export class NavesDetailsComponent implements OnInit {

  constructor() { }

  @Input() nave: Naves;

  ngOnInit(): void {
  }

}
