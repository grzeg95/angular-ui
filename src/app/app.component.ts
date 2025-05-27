import {Component, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {UiError, UiFormField, UiInput, UiLabel} from 'ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    UiFormField,
    UiLabel,
    FormsModule,
    UiInput,
    ReactiveFormsModule,
    UiError
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  sampleInput = new FormControl('', [Validators.required]);
  sampleInputDisabled = new FormControl('', [Validators.required]);

  ngOnInit() {
    this.sampleInputDisabled.disable();
  }
}
