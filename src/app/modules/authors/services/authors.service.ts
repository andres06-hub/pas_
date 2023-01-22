import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_AUTHORS } from '../../graphql.queries';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(
    private _apollo: Apollo
  ) { }

  getAuthors() {
    return this._apollo.watchQuery<any>({
      query: GET_AUTHORS
    });
  };
}
