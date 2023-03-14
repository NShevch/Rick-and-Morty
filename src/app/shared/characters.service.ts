import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
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

  getAllCharacters(url: string, dataSoFar: Character[] = []): Observable<Character[]> {
    if (!url) return of(dataSoFar);
    return this.http.get(url).pipe(
      map((data: any) => {
        let charactersList = data.results;
        const charactersListPrepared = charactersList.map((character: any) => {
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
        })
        dataSoFar = dataSoFar.concat(charactersListPrepared);

        return data;
      }),
      switchMap((data: any) => {
        return this.getAllCharacters(data.info.next, dataSoFar)
      })
    );
  }

  getData() {
    return this.getAllCharacters('https://rickandmortyapi.com/api/character');
  }

  // getData() {
  //   return this.http.get('https://rickandmortyapi.com/api/character?page=42').pipe(
  //     map((data: any) => {
  //       let charactersList = data.results;
  //       return charactersList.map((character: any) => {
  //         return new Character({
  //           id: character.id,
  //           name: character.name,
  //           species: character.species,
  //           image: character.image/* ,
  //           gender: character.gender,
  //           status: character.status,
  //           origin: character.origin.name,
  //           type: character.type || "Unknown", */
  //         });
  //       });
  //   }));
  // }


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
