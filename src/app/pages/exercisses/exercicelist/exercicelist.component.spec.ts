import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicelistComponent } from './exercicelist.component';

describe('ExercicelistComponent', () => {
  let component: ExercicelistComponent;
  let fixture: ComponentFixture<ExercicelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercicelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
