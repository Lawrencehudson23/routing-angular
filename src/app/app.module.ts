import { NotesComponent } from './components/notes/notes.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [AppComponent, HomeComponent, TasksComponent, NotesComponent],
  imports: [BrowserModule, AppRoutingModule, routing],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
