import { ChangeDetectionStrategy, Component, computed, HostBinding, HostListener, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { optionIndexes } from './option-item.model';
import { Quizzes } from '../../shared/utils';
import { extractType } from '../../shared/utils/util';
import { IconComponent } from '../icon/icon.component';

@Component({
    selector: 'app-option-item',
    imports: [CommonModule, IconComponent],
    templateUrl: './option-item.component.html',
    styleUrl: './option-item.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptionItemComponent {
  option = input.required<Quizzes>();

  icon = computed(() => extractType(this.option().icon));
  optionContent = computed(() => this.option().title || this.option());

  select = output<string>();

  @HostListener('click', ['$event.target'])
  onSelect() {
    this.select.emit(this.option().title);
  }
}
