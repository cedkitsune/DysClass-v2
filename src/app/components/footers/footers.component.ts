import { Component } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footers',
  templateUrl: './footers.component.html',
  styleUrls: ['./footers.component.css']
})
export class FootersComponent {
  faEnvelope = faEnvelope ;
}
