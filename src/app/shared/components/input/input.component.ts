import { Component, Input, ViewChild, ElementRef, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { InputValueAccessor } from 'src/app/classes/input-value-accessor';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent extends InputValueAccessor{


  constructor(@Optional() @Self() ngControl: NgControl) {
    super(ngControl);
  }

  @Input() public label: string = '';
  @Input() public hideLabel: boolean = false;
  @Input() public type: string = '';
  @Input() public placeholder: string = '';
  @Input() public content: string = '';
  @ViewChild('input') public set hostInput(value: ElementRef) {
    this.inputEl = value.nativeElement as HTMLInputElement;
  }

  private inputEl!: HTMLInputElement;

    ngOnInit(): void {
    this.setup();
  }
}
