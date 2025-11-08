import { Component, computed, HostListener, input, output, signal } from '@angular/core';
import { optionIndexes } from '../option-item';
import { IconComponent } from '../icon/icon.component';
import { Status } from '../../shared/utils';

@Component({
  selector: 'app-question-item',
  imports: [IconComponent],
  templateUrl: './question-item.component.html',
  styleUrl: './question-item.component.scss'
})
export class QuestionItemComponent {
  option = input.required<string>();
  index = input.required<number>();
  selected = input.required<boolean>();
  showIcon = input.required<boolean>();
  statusIcon = input.required<Status | null>();
  mobileIcon = signal<boolean>(window.screen.width < 768);

  optionIdxLetter = computed(() => optionIndexes[this.index()]);
  
  select = output<string>();

  @HostListener('click', ['$event.target'])
  onSelect() {
    this.select.emit(this.option());
  }
}
