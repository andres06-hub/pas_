import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(
    private _apollo: Apollo,
  ) { }

  createPost(data:string){
    // this._apollo.mutate
  }
}
