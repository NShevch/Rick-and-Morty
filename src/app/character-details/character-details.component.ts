import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../shared/character.model';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  character!: Character;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onGoBackClick() {
    this.router.navigate(['/charactersList']);
  }

}
