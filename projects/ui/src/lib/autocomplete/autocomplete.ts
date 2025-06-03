import {Component, ContentChildren, EventEmitter, Output, QueryList, TemplateRef, ViewChild} from '@angular/core';
import {UiOptionComponent} from '../core/option/option.component';

export type UiAutocompleteSelectedEvent = {
  source: UiAutocomplete,
  option: UiOptionComponent
}

@Component({
  selector: 'ui-autocomplete',
  standalone: true,
  imports: [],
  templateUrl: './autocomplete.html',
  styleUrl: './autocomplete.scss',
  exportAs: 'uiAutocomplete'
})
export class UiAutocomplete {

  @ContentChildren(UiOptionComponent, {descendants: true}) options?: QueryList<UiOptionComponent>;
  @ViewChild(TemplateRef, {static: true}) template!: TemplateRef<any>;
  @Output() optionSelected = new EventEmitter<UiAutocompleteSelectedEvent>();
}
