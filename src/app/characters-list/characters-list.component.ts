import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../shared/character.model';
import { CharactersService } from '../shared/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
  characters: Character[] = [];

  constructor(
    private charactersService: CharactersService,
    private router: Router) {}

  ngOnInit() {
    this.charactersService.getData().subscribe({
      next: (data:any) => {
        this.characters = data;
        console.log(data)
      },
      error: (err) => {
        console.error('While downloading characters: ' + err);
      },
    });
  }

  onCharacterClick() {
    console.log('onCharacterClick')
    this.router.navigate(['detail']);
  }

}
