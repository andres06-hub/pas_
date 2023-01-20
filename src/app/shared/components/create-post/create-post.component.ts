import { Component } from '@angular/core';
import { Type } from 'src/app/models/enums/input.type';
import { Types } from 'src/app/models/interfaces/input.model';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {

  content: string = 'Send';
  type = {
    txt: Type.Text,
    num: Type.Num,
  }
  label = {
    np1: 'Title',
    np2: 'Content',
    np3: 'Id Author'
  };
  placeHolder = {
    title: 'Title',
    content: 'Content',
    idAuthor: 'Id Author',
  };
}
