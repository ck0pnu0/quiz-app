import { ChangeDetectionStrategy, Component, computed, output, signal } from '@angular/core';
import { Theme } from '../../shared/utils';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'theme-switch',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './theme-switch.component.html',
  styleUrl: './theme-switch.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeSwitchComponent {
  isChecked = signal<boolean>(false);

  themeOption = computed(() => this.isChecked() ? 'dark' : 'light');

  themeChanged = output<Theme>();

  toggle() {
    this.isChecked.set(!this.isChecked());
    this.themeChanged.emit(this.themeOption());
  }
}
