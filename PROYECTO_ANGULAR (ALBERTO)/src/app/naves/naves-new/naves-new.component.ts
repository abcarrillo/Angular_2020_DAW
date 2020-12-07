import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-naves-new',
  templateUrl: './naves-new.component.html',
  styleUrls: ['./naves-new.component.scss']
})
export class NavesNewComponent implements OnInit {


  @Output() newNave = new EventEmitter();
  newNaveForm: FormGroup = this.newFormGroup();
  constructor() { }

  ngOnInit(): void {
  }

  /*
        public name: string,
        public model: string,
        public manufacturer: string,
        public cost_in_credits: string,
        public length: number,
        public starship_class: string,
        public max_atmosphering_speed: string
  */

  newFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      manufacturer: new FormControl('', Validators.required),
      cost_in_credits: new FormControl('', Validators.required),
      length: new FormControl('', Validators.required),
      starship_class: new FormControl('', Validators.required),
      max_atmosphering_speed: new FormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    // Aquí puedo comprobar que todo es correcto
    this.newNave.emit(this.newNaveForm.value);
    this.newNaveForm = this.newFormGroup();
  }

}
