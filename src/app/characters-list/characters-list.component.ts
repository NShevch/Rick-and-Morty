import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Character } from '../shared/character.model';
import { CharactersService } from '../shared/characters.service';

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
    private router: Router) {}

  ngOnInit() {
    this.gettingDataSubscription = this.charactersService.getData().subscribe({
      next: (data: Character[]) => {
        this.characters = data;
        console.log(data)
      },
      error: (err) => {
        console.error('While downloading characters: ' + err);
      },
    });
  }

  onCharacterClick(character: Character) {
    console.log('onCharacterClick')
    this.router.navigate(['detail/' + character.id]);
  }

  ngOnDestroy() {
    this.gettingDataSubscription.unsubscribe();
  }

}
