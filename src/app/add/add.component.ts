import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'add-new',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  private form;
  @Output() addNew: EventEmitter<any> = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      date: ['', Validators.required],
      title: ['', Validators.required],
      author: ['', Validators.required],
      text: ['', Validators.required],
      tags: ['', Validators.required],
      url: [''],
      status: ['', Validators.required],
    })
  }

  handleAdd(event) {
    const toAdd = {
      date: this.form.controls.date.value,
      title: this.form.controls.title.value,
      author: this.form.controls.author.value,
      text: this.form.controls.text.value,
      tags: this.form.controls.tags.value,
      url:this.form.controls.url.value,
      status: this.form.controls.status.value,
    }

    this.addNew.emit(toAdd);
  }

}
