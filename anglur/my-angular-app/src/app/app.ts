import { Component, signal } from '@angular/core';
import { HeaderContainer } from './shared/header-container/header-container';
import { Footer } from './shared/footer/footer';

import {TodoComponent} from "./todo/todo"
import { PeopleList } from './people-list/people-list';
@Component({
  selector: 'app-root',
  imports: [HeaderContainer, Footer, TodoComponent,PeopleList],
templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-angular-app');
}
