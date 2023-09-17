// search.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  query: string = '';

  @Output() searchEvent = new EventEmitter<string>();

  search() {
    this.searchEvent.emit(this.query);
  }
}
