import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Post } from '../../../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private _http: HttpClient
  ) { }

  getAllPosts() {
    return this._http.get<Post[]>('https://fakestoreapi.com/products?limit=5');
  }
}
