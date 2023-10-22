import { Component, inject, Input, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-comment',
  standalone: true,
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  imports: [ReactiveFormsModule],
  viewProviders: [
    // skipSelf get instance denpency from parent
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true })
    }
  ]
})
export class CommentFormComponent implements OnInit {
  parentContainer = inject(ControlContainer);

  // @Input() formGroup!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    // we can new FormControl or FormGroup at here if you are using FormArray
    this.parentGroup.addControl('comment', new FormControl(''))
  }

  get parentGroup() {
    return this.parentContainer.control as FormGroup;
  }

}
