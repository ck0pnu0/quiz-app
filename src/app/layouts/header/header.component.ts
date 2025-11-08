import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { ThemeSwitchComponent } from '../../components/theme-switch/theme-switch.component';
import { IconComponent } from '../../components/icon/icon.component';

@Component({
    selector: 'app-header',
    imports: [ThemeSwitchComponent, IconComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  topic = input.required<string>();
  isMobileView = input.required<boolean>();

  themeChanged = output<void>();

  onThemeChanged() {
    this.themeChanged.emit();
  }
}
