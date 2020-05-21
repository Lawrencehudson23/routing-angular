import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './components/notes/notes.component';
import { TasksComponent } from './components/tasks/tasks.component';
const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: 'home', component: HomeComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'tasks', component: TasksComponent },
];
export const routing = RouterModule.forRoot(APP_ROUTES);
