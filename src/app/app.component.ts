import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { MainComponent } from './layouts/main/main.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, MainComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  public topic = signal<string>('');

  onTopicSelect(subject: string) {
    this.topic.set(subject);
  }

  onThemeChanged() {
    document.body.classList.toggle(`theme-dark`);
  }
}
