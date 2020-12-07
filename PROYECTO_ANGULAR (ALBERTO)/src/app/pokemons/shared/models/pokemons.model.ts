export class Pokemons {

    constructor(
        public id: number,
        public name: string,
        public base_experience: number,
        public height: number,
        public weight: number,
        public types: string[],
        public gender: string
    ) { }
}
