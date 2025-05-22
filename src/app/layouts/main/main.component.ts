import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { OptionItemComponent } from '../../components/option-item/option-item.component';
import { Option } from '../../components/option-item';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [OptionItemComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {
  quizStarted = signal<boolean>(false)

  options = signal<Option[]>([{ icon: undefined, content: 'test 123' }]);

  onSelect(event: any) {
    // 
  }
}
