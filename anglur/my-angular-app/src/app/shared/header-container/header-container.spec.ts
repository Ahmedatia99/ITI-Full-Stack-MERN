import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderContainer } from './header-container';

describe('HeaderContainer', () => {
  let component: HeaderContainer;
  let fixture: ComponentFixture<HeaderContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
