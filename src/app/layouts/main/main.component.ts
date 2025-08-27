import { ChangeDetectionStrategy, Component, computed, inject, output, signal } from '@angular/core';
import { OptionItemComponent } from '../../components/option-item/option-item.component';
import { QuizService } from '../../shared/services/quiz.service';
import { QuestionItemComponent } from '../../components/question-item/question-item.component';
import { ButtonComponent } from '../../components/button/button.component';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar.component';
import { Status } from '../../shared/utils';
import { CardComponent } from '../../components/card/card.component';

@Component({
    selector: 'app-main',
    imports: [OptionItemComponent, QuestionItemComponent, ButtonComponent, ProgressBarComponent, CardComponent],
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {
  quizService = inject(QuizService);
  topics = this.quizService.topics;

  quizStarted = signal<boolean>(false)
  selectedTopic = signal<string>('');
  answeredQuestions = signal<boolean[]>([]);
  selectedAnswer = signal<string>('');
  submitted = signal<boolean>(false);
  
  topicQuestions = computed(() => this.quizService.questionsByTopic()[this.selectedTopic()]);
  showStatuses = computed(() => this.submitted());
  currentStep = computed(() => this.answeredQuestions().length);
  correctAnswer = computed(() => this.topicQuestions()[this.currentStep()].answer);
  finalCorrectAnswers = computed(() => this.answeredQuestions().filter(Boolean).length);
  showFinalScreen = computed(() => this.answeredQuestions().length === this.topicQuestions().length);

  topicSelected = output<string>();

  // button
  buttonText = signal<string>('Submit Answer');

  onSelect(selected: string) {
    if (!this.selectedTopic().length) {
      this.quizStarted.set(true);
      this.selectedTopic.set(selected);
      this.topicSelected.emit(selected);
    } else {
      this.selectedAnswer.set(selected);
    }
  }

  onSubmit() {
    if (!this.selectedAnswer().length) return;
    this.submitted.set(true);
  }

  onNextQuestion() {
    if (this.submitted()) {
      this.answeredQuestions.update(answered => [...answered, this.selectedAnswer() === this.correctAnswer()]);
      this.submitted.set(false);
      this.selectedAnswer.set('');
    }
  }

  onPlayAgain() {
    this.quizStarted.set(false);
    this.answeredQuestions.set([]);
    this.topicSelected.emit('');  
    this.selectedTopic.set('');
  }

  getStatusIcon(option: string): Status | null {
    const selected = this.selectedAnswer();
    if (!selected) return null;

    const isCorrect = option === this.correctAnswer();
    const isSelected = option === selected;

    if (isSelected && isCorrect) return 'correct';
    if (isSelected && !isCorrect) return 'incorrect';
    if (!isSelected && isCorrect) return 'correct';

    return null;
  }
}
