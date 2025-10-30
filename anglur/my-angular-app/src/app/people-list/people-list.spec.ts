import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleList } from './people-list';

describe('PeopleList', () => {
  let component: PeopleList;
  let fixture: ComponentFixture<PeopleList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
