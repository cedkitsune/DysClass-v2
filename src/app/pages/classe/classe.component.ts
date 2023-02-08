import { Component } from '@angular/core';
import { faChalkboardUser} from '@fortawesome/free-solid-svg-icons';
import { faUserGear} from '@fortawesome/free-solid-svg-icons';
import { faGears } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent {

  faChalkboardUser = faChalkboardUser;
  faUserGear = faUserGear;
  faGears = faGears
}
