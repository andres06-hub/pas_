import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/modules/posts/services/posts.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[] = []

  constructor(
    private _postsService: PostsService
  ) {}
  date: Date = new Date();

  ngOnInit(): void {
    this._postsService.getAllPosts()
    .subscribe({
      next: data => {
          this.posts = data,
          console.log(this.posts.length);
        },
      error: error => console.log(error)
    },);
  }

}
