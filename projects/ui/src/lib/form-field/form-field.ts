import {
  Component,
  computed,
  contentChild,
  ElementRef,
  InjectionToken,
  input,
  viewChild,
  ViewEncapsulation
} from '@angular/core';
import {UiError, UiLabel} from './directives';
import {UiFormFieldControl} from './directives/form-field-control';

export const UI_FORM_FIELD = new InjectionToken<UiFormField>('UiFormField');

@Component({
  selector: 'ui-form-field',
  templateUrl: './form-field.html',
  styleUrl: './form-field.scss',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'ui-form-field',
    '[class.ui-form-field--disabled]': '_disabled'
  },
  providers: [
    {provide: UI_FORM_FIELD, useExisting: UiFormField}
  ],
})
export class UiFormField {

  floatLabel = input<'always' | 'none'>('none');

  private readonly _labelChild = contentChild(UiLabel);
  private readonly _formFieldControl = contentChild(UiFormFieldControl);
  private readonly _error = contentChild(UiError);

  protected _hasFloatingLabel = computed(() => !!this._labelChild());
  protected _hasSubscript = computed(() => !!this._error());

  triggerHandler = viewChild<ElementRef<HTMLInputElement>>('triggerHandler');

  protected get _shouldLabelFloat() {
    return this._formFieldControl()?.shouldLabelFloat || this.floatLabel() === 'always';
  }

  protected get _focused() {
    return this._formFieldControl()?.focused;
  }

  protected get _hasError() {
    return this._formFieldControl()?.hasError;
  }

  protected get _disabled() {
    return this._formFieldControl()?.disabled;
  }

  protected _focus() {
    this._formFieldControl()?.focus();
  }
}
