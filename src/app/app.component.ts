import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Error} from './lib/form-field/directives/error';
import {AppInput} from './lib/form-field/directives/input';
import {AppLabel} from './lib/form-field/directives/label';
import {AppFormField} from './lib/form-field/form-field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    AppFormField,
    AppLabel,
    FormsModule,
    AppInput,
    ReactiveFormsModule,
    Error
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {

  input = new FormControl('', [Validators.required]);

}
