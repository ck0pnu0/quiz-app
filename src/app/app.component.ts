import { Component, Signal, signal } from '@angular/core';
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
  public readonly topic: Signal<string> = signal<string>('');
  // selectedTopic (add state)
}
