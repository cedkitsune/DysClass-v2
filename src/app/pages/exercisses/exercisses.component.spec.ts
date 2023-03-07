import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercissesComponent } from './exercisses.component';

describe('ExercissesComponent', () => {
  let component: ExercissesComponent;
  let fixture: ComponentFixture<ExercissesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercissesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercissesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
