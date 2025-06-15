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
  // create in utils method to get the `html/css...` from url
  type = input.required<string>();
  size = input.required<'large' | 'medium' | 'small'>();
}
