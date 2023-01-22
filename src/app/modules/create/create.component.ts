import { Component, ViewChildren, QueryList } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Type } from 'src/app/models/enums/input.type';
import { InputComponent } from 'src/app/shared/components/input/input.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  constructor(private fb: FormBuilder) {}
  // public form: FormGroup = new FormGroup({});

  postT: string = 'Create Post';
  authorT: string = 'Create Author';

  inputRefs: { [key: string]: InputComponent } = {}

  @ViewChildren(InputComponent) public set formP(value: QueryList<InputComponent>) {
    value.forEach((el: InputComponent) => {
      const name = el.ngControl.name;
      if (!name || name in this.inputRefs) return;
      this.inputRefs[name] = el;
      console.log(el);

    });
  }

  public form: FormGroup = this.fb.group({
    // title : new FormControl('', [Validators.required]),
    // content : new FormControl('', [Validators.required]),
    // idAuthor : new FormControl('', [Validators.required]),
    title: ['', Validators.compose([Validators.required])],
    content: ['', Validators.compose([Validators.required])],
    idAuthor: ['', Validators.compose([Validators.required])],
  });

  onFormSubmit() {
    const { title, content, idAuthor } = this.form.value;
    console.warn(this.form.value);
    console.warn({title,content,idAuthor});
  }
}
