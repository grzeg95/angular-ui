import {Directive} from '@angular/core';

@Directive()
export abstract class UiFormFieldControl<T> {

  // @ts-ignore
  readonly ngControl: NgControl | null;

  // @ts-ignore
  readonly focused: boolean;

  // @ts-ignore
  readonly hasError: boolean;

  // @ts-ignore
  readonly shouldLabelFloat: boolean;

  // @ts-ignore
  focus: () => void;
}
