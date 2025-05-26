import {Directive} from '@angular/core';

@Directive()
export abstract class UiFormFieldControl<T> {

  // @ts-ignore
  readonly ngControl: NgControl | null;

  // @ts-ignore
  focused: boolean;

  // @ts-ignore
  focus: () => void;

  // @ts-ignore
  hasError: boolean;

  // @ts-ignore
  readonly shouldLabelFloat: boolean;
}
