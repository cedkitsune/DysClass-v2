import { Component } from '@angular/core';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faUserGear } from '@fortawesome/free-solid-svg-icons';
import { faGears } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css'],
})
export class ClasseComponent {
  faBook = faBook;
  faUserGear = faUserGear;
  faGears = faGears;

  ngOnInit(): void {}

  onsubmit() {}

}
