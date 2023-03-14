import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Character } from './character.model';

@Injectable({
  providedIn: 'root'
})

export class CharactersService {
  private charactersFullList: Character[] = [];

  constructor(private http: HttpClient) {}

  getCharactersFullList() {
    return this.charactersFullList;
  }

  setCharactersFullList(list: Character[]) {
    this.charactersFullList = list;
  }

  getData() {
    return this.http.get('https://rickandmortyapi.com/api/character').pipe(
      map((data: any) => {
        let charactersList = data.results;
        console.log('charactersList')
        console.log(charactersList)
        return charactersList.map((character: any) => {
          return new Character({
            id: character.id,
            name: character.name,
            species: character.species,
            image: character.image/* ,
            gender: character.gender,
            status: character.status,
            origin: character.origin.name,
            type: character.type || "Unknown", */
          });
        });
    }));
  }

  getSpecificCharacter(id: number) {
    console.log('getSpecificCharacter')
    return this.http.get('https://rickandmortyapi.com/api/character/' + id).pipe(
      map((characterDetails: any) => {
        return new Character({
          id: characterDetails.id,
          name: characterDetails.name,
          species: characterDetails.species,
          image: characterDetails.image,
          gender: characterDetails.gender,
          status: characterDetails.status,
          origin: characterDetails.origin.name,
          type: characterDetails.type || "Unknown",
        });
    }));
  }
}
