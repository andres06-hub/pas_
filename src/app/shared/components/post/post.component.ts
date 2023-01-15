import { Component, Input, OnInit, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  constructor() {
    // Before render
  }

  ngOnInit(): void {
    // Before render
    // things async - fetch | one time
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Before - during render
    // Be updating changes inputs | many times
    console.log('changes:', changes);
  }

  ngAfterViewInit(): void {
    // After render
    // Handler Children
  }

  ngOnDestroy(): void {
    // delete component
  }


  @Input('post') post: Post = {
    id: 0,
    title: '',
    content: '',
    authorId: 0,
    author: {
      id: 0,
      name: ''
    },
  }
}
