import { ChangeDetectionStrategy, Component, computed, HostBinding, HostListener, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Option, optionIndexes } from './option-item.model';

@Component({
    selector: 'app-option-item',
    imports: [CommonModule],
    templateUrl: './option-item.component.html',
    styleUrl: './option-item.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptionItemComponent {
  option = input.required<Option>();
  index = input.required<number>();

  icon = computed(() => this.option().icon || '');
  optionContent = computed(() => this.option().content);
  optionIdxLetter = computed(() => optionIndexes[this.index()]);

  select = output<string>();

  selected = signal<boolean>(false);

  @HostListener('click', ['$event.target'])
  onSelect(e: any) {
    console.log('e: ', e);
    this.selected.update(() => !this.selected());
    // this.select.emit(e)
  }

  @HostBinding('class.selected')
  get selectedClass() {
    return this.selected();
  }
}
