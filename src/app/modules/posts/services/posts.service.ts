import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Post } from '../../../models/interfaces/post.model';
import { Apollo } from 'apollo-angular';
import { GET_POSTS } from '../../graphql.queries';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private _http: HttpClient,
    private _apollo: Apollo
  ) { }

  getPosts() {
    return this._apollo.watchQuery<any>({
      query: GET_POSTS
    });
  }

  getAllPosts() {
    return this._http.get<Post[]>('https://fakestoreapi.com/products?limit=5');
  }
}
