export class Naves {

  /*
    name, model, manufacturer, cost_in_credits, length, crew, passengers, starship_class, max_atmosphering_speed
  */
  constructor(
    public name: string,
    public model: string,
    public manufacturer: string,
    public cost_in_credits: string,
    public length: number,
    public starship_class: string,
    public max_atmosphering_speed: string
  ) {

  }
}
