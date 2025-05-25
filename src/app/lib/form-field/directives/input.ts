import {Directive, ElementRef, inject} from '@angular/core';
import {NgControl} from '@angular/forms';
import {AppFormFieldControl} from './form-field-control';

@Directive({
  selector: '[appInput]',
  providers: [
    {provide: AppFormFieldControl, useExisting: AppInput}
  ],
  standalone: true,
  host: {
    '(focus)': '_focusChanged(true)',
    '(blur)': '_focusChanged(false)'
  }
})
export class AppInput implements AppFormFieldControl<any> {

  protected _elementRef = inject<ElementRef<HTMLInputElement>>(ElementRef);
  private _isFocused = false;
  readonly ngControl = inject(NgControl, {optional: true});

  get value() {
    return this._elementRef.nativeElement.value;
  }

  get focused() {
    return this._isFocused;
  }

  get shouldLabelFloat(): boolean {
    return this._isFocused || !!this.value;
  }

  get hasError() {
    return !!this.ngControl?.invalid && !!this.ngControl?.touched;
  }

  focus() {
    this._elementRef.nativeElement.focus();
    this._focusChanged(true);
  }

  protected _focusChanged(focus: boolean) {
    this._isFocused = focus;
  }
}
