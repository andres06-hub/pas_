import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Author } from 'src/app/models/interfaces/author.model';
import { AuthorsService } from './services/authors.service';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements AfterViewInit, OnInit{

  authors: Author[] = [];
  date = new Date();

  iconSearch = faMagnifyingGlass;
  hideLabel: boolean = true;
  placeHolder: string = 'Search';

  constructor(private _authorsSvc: AuthorsService) {}

  ngOnInit(): void {
    this._authorsSvc.getAuthors()
      .valueChanges.subscribe(({data, error}) => {
        try {
          this.authors = data.authors;
        } catch (e) {
          console.error('ERROR: ', error);
        }
      });
  }

  ngAfterViewInit(): void {
    this.authors.length > 0;
  }

}
