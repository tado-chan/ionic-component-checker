import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardsShowcasePage } from './cards-showcase.page';

describe('CardsShowcasePage', () => {
  let component: CardsShowcasePage;
  let fixture: ComponentFixture<CardsShowcasePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsShowcasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
