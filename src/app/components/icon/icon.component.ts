import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { IconSizeDirective } from '../../shared';

@Component({
    selector: 'app-icon',
    imports: [IconSizeDirective],
    templateUrl: './icon.component.html',
    styleUrl: './icon.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
  type = input.required<string>();
  formatType = computed(() => this.type().toLowerCase() === 'javascript' ? 'js' : this.type().toLowerCase());
  size = input.required<'large' | 'medium' | 'small'>();
}
