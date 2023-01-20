import { Component } from '@angular/core';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.scss']
})
export class CreateAuthorComponent {
  title: string = 'Create Author';
  label: string = 'Name';
  type: string = 'text';
  placeHolder: string = 'Name';
  content: string = 'Send';
}
