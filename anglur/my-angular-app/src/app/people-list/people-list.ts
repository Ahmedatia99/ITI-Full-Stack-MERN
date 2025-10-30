import { Component, ElementRef, signal, viewChild, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../person/person';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [CommonModule, Person],
  templateUrl: './people-list.html',
  styleUrls: ['./people-list.css']
})
export class PeopleList {
  people = signal([
    { name: 'Douglas Pace', age: 35, country: 'MARS' },
    { name: 'Mcleod Mueller', age: 32, country: 'USA' },
    { name: 'Day Meyers', age: 21, country: 'HK' },
    { name: 'Aguirre Ellis', age: 34, country: 'UK' },
    { name: 'Cook Tyson', age: 32, country: 'USA' }
  ]);

  message = signal('Default Message');
  messageDiv = viewChild<ElementRef>('messageDiv');

  updateMessageEffect = effect(() => {
    const div = this.messageDiv();
    if (div) div.nativeElement.textContent = this.message();
  });

  changeMessage() {
    this.message.set('done change');
  }
}
