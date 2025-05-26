import {Component} from '@angular/core';
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
export class AppComponent {

  input = new FormControl('', [Validators.required]);

}
