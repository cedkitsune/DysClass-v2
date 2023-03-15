import { Component } from '@angular/core';
import { NgcCookieConsentService } from 'ngx-cookieconsent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DysClass';
  constructor(private ngCookieService:NgcCookieConsentService ){

  }
  ngOnInit(){
    this.ngCookieService.init(this.ngCookieService.getConfig())
 }
}