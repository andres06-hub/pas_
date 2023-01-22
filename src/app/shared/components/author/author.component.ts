import { Component, Input } from '@angular/core';
import { Author } from 'src/app/models/interfaces/author.model';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent {

  @Input() author: Author = {
    id: 0,
    name: '',
  }

}
