import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { fromEvent, map, startWith } from 'rxjs';

import { HeaderComponent } from './layouts/header/header.component';
import { MainComponent } from './layouts/main/main.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, MainComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  topic = signal<string>('');

  windowSize$ = fromEvent(window, 'resize').pipe(
    startWith(window.innerWidth),
    map(() => window.innerWidth),
  );

  windowSize = toSignal(this.windowSize$, { initialValue: window.innerWidth });

  isMobileView = computed(() => this.windowSize() < 768);

  onTopicSelect(subject: string) {
    this.topic.set(subject);
  }

  onThemeChanged() {
    document.body.classList.toggle(`theme-dark`);
  }
}
