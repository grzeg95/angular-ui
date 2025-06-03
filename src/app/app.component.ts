import {AsyncPipe} from '@angular/common';
import {Component, computed, OnInit, signal} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {BehaviorSubject, startWith} from 'rxjs';
import {UiError, UiFormField, UiInput, UiLabel, UiAutocomplete, UiAutocompleteTrigger, UiOptionComponent, UiAutocompleteSelectedEvent} from 'ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    UiFormField,
    UiLabel,
    FormsModule,
    UiInput,
    ReactiveFormsModule,
    UiError,
    UiAutocomplete,
    UiAutocompleteTrigger,
    UiOptionComponent,
    AsyncPipe
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  sampleInput = new FormControl('', [Validators.required]);
  sampleInputDisabled = new FormControl('', [Validators.required]);
  sampleInputAutocomplete = new FormControl('');

  private _options$ = new BehaviorSubject<string[]>(['One', 'Two', 'Three']);
  protected _filteredOptions$ = new BehaviorSubject<string[]>([]);

  ngOnInit() {

    this.sampleInputDisabled.disable();

    this.sampleInputAutocomplete.valueChanges.pipe(
      startWith(this.sampleInputAutocomplete.value)
    ).subscribe((value) => {
      if (value) {
        const filterValue = value.toLowerCase();
        this._filteredOptions$.next(this._options$.value?.filter((option) => option.toLowerCase().includes(filterValue)));
      } else {
        this._filteredOptions$.next(this._options$.value);
      }
    })
  }

  handleOptionSelected($event: UiAutocompleteSelectedEvent) {
    console.log($event);
  }
}
