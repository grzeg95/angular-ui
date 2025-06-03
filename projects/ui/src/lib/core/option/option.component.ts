import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ui-option',
  standalone: true,
  imports: [],
  templateUrl: './option.component.html',
  styleUrl: './option.component.scss',
  host: {
    '(click)': 'onClick()',
    class: 'ui-option'
  },
  encapsulation: ViewEncapsulation.None
})
export class UiOptionComponent {

  @Output() readonly onSelectionChange = new EventEmitter<UiOptionComponent>();
  @Input() value: any;

  onClick() {
    this.onSelectionChange.emit(this);
  }
}
