import { Component, computed, HostBinding, HostListener, input, output, signal } from '@angular/core';
import { optionIndexes } from '../option-item';

@Component({
  selector: 'app-question-item',
  imports: [],
  templateUrl: './question-item.component.html',
  styleUrl: './question-item.component.scss'
})
export class QuestionItemComponent {
  selected = signal<boolean>(false);

  option = input.required<string>();
  index = input.required<number>();

  optionIdxLetter = computed(() => optionIndexes[this.index()]);
  
  select = output<string>();

  @HostListener('click', ['$event.target'])
  onSelect() {
    this.selected.update(() => !this.selected());
    this.select.emit(this.option());
  }

  @HostBinding('class.selected')
  get selectedClass() {
    return this.selected();
  }
}
