import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent {

    posts: Post[] = [
    {
      id: 1,
      title: 'Job',
      content: 'New Job',
      authorId: 1,
      authorName: 'andres',
    },
    {
      id: 2,
      title: 'Example',
      content: 'New example',
      authorId: 2,
      authorName: 'juan',
    },
    {
      id: 3,
      title: 'Hello',
      content: 'jejeje',
      authorId: 1,
      authorName: 'Author',
    },
  ]

}
