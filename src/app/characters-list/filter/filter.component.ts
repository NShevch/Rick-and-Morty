import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import LocalStorageService from 'src/app/shared/local-storage.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  characterName!: string;
  @Output() inputEvent = new EventEmitter<string>();

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.characterName = this.localStorageService.get('filter');
  }

  onInput() {
    this.inputEvent.emit(this.characterName);
    this.localStorageService.set('filter', this.characterName);
  }

}
