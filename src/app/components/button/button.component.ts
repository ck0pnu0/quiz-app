import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  text = input<string>('Submit Answer');
  disabled = input<boolean>(false);
  hidden = input<boolean>(false);

  click = output<void>();

  onClick(e: Event) {
    if (this.disabled()) {
      e.preventDefault();
    }

    this.click.emit();
  }
}
