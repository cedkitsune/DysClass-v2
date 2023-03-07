import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceformComponent } from './exerciceform.component';

describe('ExerciceformComponent', () => {
  let component: ExerciceformComponent;
  let fixture: ComponentFixture<ExerciceformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciceformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
