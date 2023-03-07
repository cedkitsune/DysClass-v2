import { Component } from '@angular/core';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faUser} from '@fortawesome/free-solid-svg-icons'
import { faChalkboardUser } from '@fortawesome/free-solid-svg-icons';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css'],
 
})

export class HeadersComponent {
  faHouse = faHouse;
  faEnvelope = faEnvelope;
  faBook = faBook;
  faUser = faUser;
  faChalkboardUser = faChalkboardUser;

  user: any = {};
  isLoggedIn = false;

  constructor(
  private tokenStorage: TokenStorageService,){}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      // this.admin = this.tokenStorage.getUser().admin;
      this.isLoggedIn = true;
      this.user = this.tokenStorage.getUser();
      // console.log(this.user.userName);
      
    }
  }



  onSubmit(){
    
  }

  logOut(): void {
    this.tokenStorage.signOut();
    window.location.href="../home";
  }
};

