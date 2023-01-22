import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Post } from 'src/app/models/interfaces/post.model';
import { PostsService } from 'src/app/modules/posts/services/posts.service'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Type } from 'src/app/models/enums/input.type';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[] = []
  iconSearch=faMagnifyingGlass
  hideLabel: boolean = true;
  type: string = Type.Search;
  placeHolder: string = 'Search';

  constructor(
    private _postsService: PostsService
  ) {}
  date: Date = new Date();

  ngOnInit(): void {
    this._postsService.getPosts()
      .valueChanges.subscribe(({data, error}) => {
        try {
          this.posts = data.posts;
        } catch (e) {
          console.error('ERROR: ', error);
        }
    })
  }
}
