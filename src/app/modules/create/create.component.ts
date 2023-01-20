import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Type } from 'src/app/models/enums/input.type';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  constructor(private fb: FormBuilder) {}
  //POST
  postT: string = 'Create Post';
  type = {
    txt: Type.Text,
    num: Type.Num,
  }
  label = {
    np1: 'Title',
    np2: 'Content',
    np3: 'IdAuthor',
    np4: 'Name'
  };
  placeHolder = {
    title: 'Title',
    content: 'Content',
    idAuthor: 'Id Author',
    name: 'Name',
  };
  //Author
  authorT: string = 'Create Author';

  public form: FormGroup = this.fb.group({
    title : ['', Validators.compose([Validators.required])],
    content : ['', Validators.compose([Validators.required])],
    idAuthor : ['', Validators.compose([Validators.required])],
  });


  onFormSubmit() {
    const { title, content, idAuthor } = this.form.value;
    console.warn({title,content,idAuthor});
  }
}
