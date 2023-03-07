import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatiereformComponent } from './matiereform.component';

describe('MatiereformComponent', () => {
  let component: MatiereformComponent;
  let fixture: ComponentFixture<MatiereformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatiereformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatiereformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
