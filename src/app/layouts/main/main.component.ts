import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { OptionItemComponent } from '../../components/option-item/option-item.component';
import { QuizService } from '../../shared/services/quiz.service';
import { QuestionItemComponent } from '../../components/question-item/question-item.component';

@Component({
    selector: 'app-main',
    imports: [OptionItemComponent, QuestionItemComponent],
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {
  quizService = inject(QuizService);

  quizStarted = signal<boolean>(false)
  selectedTopic = signal<string>('');
  topics = this.quizService.topics;
  topicQuestions = computed(() => this.quizService.questions()[this.selectedTopic()]);

  onSelect(topic: string) {
    this.quizStarted.set(true);
    this.selectedTopic.set(topic);
    console.log(topic)
  }
}
