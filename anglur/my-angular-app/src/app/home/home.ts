import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  peopleByCountry: any[] = [
    {
      country: 'UK',
      people: [
        { name: 'Douglas Pace' },
        { name: 'Mcleod Mueller' }
      ]
    },
    {
      country: 'US',
      people: [
        { name: 'Day Meyers' },
        { name: 'Aguirre Ellis' },
        { name: 'Cook Tyson' }
      ]
    },
    {
      country: 'MARS',
      people: [
        { name: 'Douglas Pace' },
        { name: 'Mcleod Mueller' }
      ]
    }
  ];
}

