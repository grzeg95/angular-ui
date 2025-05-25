import {Component, computed, contentChild, ViewEncapsulation} from '@angular/core';
import {AppFormFieldControl} from './directives/form-field-control';
import {AppLabel} from './directives/label';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.html',
  styleUrl: './form-field.scss',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'app-form-field-wrapper'
  }
})
export class AppFormField {

  private readonly _labelChild = contentChild(AppLabel);
  private readonly _formFieldControl = contentChild(AppFormFieldControl);

  protected _hasFloatingLabel = computed(() => !!this._labelChild());

  protected get _shouldLabelFloat() {
    return this._formFieldControl()?.shouldLabelFloat;
  }

  protected get _focused() {
    return this._formFieldControl()?.focused;
  }

  protected get _hasError() {
    return this._formFieldControl()?.hasError;
  }

  focus() {
    this._formFieldControl()?.focus();
  }
}
