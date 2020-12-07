import { Component, OnInit, Input } from '@angular/core';
import { Naves } from '../shared/models/naves.model';

@Component({
  selector: 'app-naves-edit',
  templateUrl: './naves-edit.component.html',
  styleUrls: ['./naves-edit.component.scss']
})
export class NavesEditComponent implements OnInit {

  @Input() editNave: Naves;
  constructor() { }

  ngOnInit(): void {
  }

}
