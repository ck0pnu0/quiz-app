import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { ThemeSwitchComponent } from '../../components/theme-switch/theme-switch.component';
import { IconComponent } from '../../components/icon/icon.component';
import { Theme } from '../../shared/utils';

@Component({
    selector: 'app-header',
    imports: [ThemeSwitchComponent, IconComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  topic = input.required<string>();

  onThemeChanged(theme: Theme) {
    console.log('theme: ', theme);
  }
}
