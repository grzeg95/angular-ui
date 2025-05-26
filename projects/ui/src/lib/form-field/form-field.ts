import {Component, computed, contentChild, InjectionToken, ViewEncapsulation} from '@angular/core';
import {UiFormFieldControl} from './directives/form-field-control';
import {UiLabel} from './directives';

export const UI_FORM_FIELD = new InjectionToken<UiFormField>('UiFormField');

@Component({
  selector: 'ui-form-field',
  templateUrl: './form-field.html',
  styleUrl: './form-field.scss',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'ui-form-field-wrapper'
  },
  providers: [
    {provide: UI_FORM_FIELD, useExisting: UiFormField}
  ],
})
export class UiFormField {

  private readonly _labelChild = contentChild(UiLabel);
  private readonly _formFieldControl = contentChild(UiFormFieldControl);

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

  protected _focus() {
    this._formFieldControl()?.focus();
  }
}
