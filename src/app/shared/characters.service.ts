import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Character } from './character.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('https://rickandmortyapi.com/api/character').pipe(
      map((data: any)=>{
        let charactersList = data.results;
        console.log(charactersList)
        return charactersList.map((character: any) => {
            return new Character({
              id: character.id,
              name: character.name,
              species: character.species,
              image: character.image,
              gender: character.gender,
              status: character.status,
              origin: character.origin.name,
              type: character.type || "Unknown",
            });
          });
    }));
  }
}
