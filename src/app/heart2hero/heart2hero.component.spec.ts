import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Heart2heroComponent } from './heart2hero.component';

describe('Heart2heroComponent', () => {
  let component: Heart2heroComponent;
  let fixture: ComponentFixture<Heart2heroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Heart2heroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Heart2heroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
