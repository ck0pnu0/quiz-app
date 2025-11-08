import { Component, input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-card',
  imports: [IconComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  selectedTopic = input.required<string>();
  correctAnswers = input.required<number>();
  allQuestions = input.required<number>();
  isMobileView = input.required<boolean>();
}
