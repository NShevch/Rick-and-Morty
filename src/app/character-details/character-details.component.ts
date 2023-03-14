import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../shared/character.model';
import { CharactersService } from '../shared/characters.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  character!: Character;
  gettingCharacterSubscription!: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.gettingCharacterSubscription = this.charactersService.getSpecificCharacter(id).subscribe({
      next: (data: Character) => {
        this.character = data;
      },
      error: (err) => {
        console.error('While downloading character details: ' + err);
      }
    });
  }

  onGoBackClick() {
    this.router.navigate(['/charactersList']);
  }

}
