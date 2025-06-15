import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Questions, Quizzes } from '../utils/types';
import { shareReplay } from 'rxjs';

@Injectable({providedIn: 'root'})
export class QuizService {
    http = inject(HttpClient);
    
    dbData = toSignal(this.http.get<Record<string, Quizzes[]>>('./assets/data/data.json').pipe(shareReplay(1)), { initialValue: { quizzes: [] } });
    
    topics = computed(() => this.dbData()['quizzes'] ?? []);
    questions = computed(() => this.topics()
        .reduce((acc, topic) => {
            if (!acc[topic.title]) {
                acc[topic.title] = topic.questions!;
            }
            return acc;
        }, {} as Record<string, Questions[]>)
    );
}