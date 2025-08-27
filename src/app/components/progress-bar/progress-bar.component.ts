import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {
  currentStep = input.required<number>();
  totalSteps = input.required<number>();
  progress = computed(() => `${this.currentStep()/this.totalSteps()*100}%`);
}
