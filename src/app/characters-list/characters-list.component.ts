import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Character } from '../shared/character.model';
import { CharactersService } from '../shared/characters.service';
import LocalStorageService from '../shared/local-storage.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit, OnDestroy {
  characters: Character[] = [];
  gettingDataSubscription!: Subscription;

  constructor(
    private charactersService: CharactersService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.gettingDataSubscription = this.charactersService.getData().subscribe({
      next: (data: Character[]) => {
        const sortedByName = data.sort(this.sortingDataByName);
        const charactersListFiltered = this.localStorageService.get('charactersListFiltered');
        this.characters = charactersListFiltered || sortedByName;
        this.charactersService.setCharactersFullList(sortedByName);
      },
      error: (err) => {
        console.error('While downloading characters: ' + err);
      },
    });
  }

  sortingDataByName(character1: Character, character2: Character) {
    return character1.name < character2.name ? -1 : 1;
  }

  onCharacterClick(character: Character) {
    this.router.navigate(['detail/' + character.id]);
  }

  onFilter(name: string) {
    this.characters = this.charactersService.getCharactersFullList().filter((character) => {
      return new RegExp(name, "i").test(character.name);
    });
    this.localStorageService.set('charactersListFiltered', this.characters);
  }

  ngOnDestroy() {
    this.gettingDataSubscription.unsubscribe();
  }

}
