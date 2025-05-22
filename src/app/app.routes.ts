import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: AppComponent,
    },
    {
        path: '**',
        component: NotFoundComponent,
    }
];
