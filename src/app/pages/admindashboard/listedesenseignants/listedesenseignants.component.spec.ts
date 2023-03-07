import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedesenseignantsComponent } from './listedesenseignants.component';

describe('ListedesenseignantsComponent', () => {
  let component: ListedesenseignantsComponent;
  let fixture: ComponentFixture<ListedesenseignantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListedesenseignantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListedesenseignantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
