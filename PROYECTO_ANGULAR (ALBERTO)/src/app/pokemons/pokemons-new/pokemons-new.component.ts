import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-pokemons-new',
  templateUrl: './pokemons-new.component.html',
  styleUrls: ['./pokemons-new.component.scss']
})
export class PokemonsNewComponent implements OnInit {

  @Output() newPok = new EventEmitter();
  newPokForm: FormGroup = this.newFormGroup();
  constructor() { }

  ngOnInit() {
  }

  /*
        public id: number,
        public name: string,
        public base_experience: number,
        public height: number ,
        public weight: number,
        public types: string[],
        public gender: boolean
  */

  newFormGroup(): FormGroup {
    return new FormGroup({
      id: new FormControl('0', Validators.required),
      name: new FormControl('', Validators.required),
      //level: new FormControl({value: '10', disabled: true}, Validators.required),
      base_experience: new FormControl('10', Validators.required),
      height: new FormControl('', Validators.required),
      weight: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    // Aquí puedo comprobar que todo es correcto
    this.newPok.emit(this.newPokForm.value);
    this.newPokForm = this.newFormGroup();
  }
}
