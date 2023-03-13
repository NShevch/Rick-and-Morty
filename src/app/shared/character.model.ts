export class Character {
  public id: number;
  public name: string;
  public species: string;
  public image: string;
  public gender?: string;
  public status?: string;
  public origin?: string;
  public type?: string;

  constructor({
    id,
    name,
    species,
    image,
    gender = '',
    status = '',
    origin = '',
    type = ''
  }: {
    id: number,
    name: string,
    species: string,
    image: string,
    gender?: string,
    status?: string,
    origin?: string,
    type?: string,
  }) {
    this.id = id;
    this.name = name;
    this.species = species;
    this.image = image;
    this.gender = gender;
    this.status = status;
    this.origin = origin;
    this.type = type;
  }
}
