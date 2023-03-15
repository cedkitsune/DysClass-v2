import { Component } from '@angular/core';
import { FormBuilder, FormGroup,RequiredValidator,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 contactForm = !FormGroup;

 constructor(private fb: FormBuilder){ }

  // ngOnInit():void{
  //   this.contactForm = this.fb.group({
  //         nam['',Validators.required],
  //         email:['', Validators.required],
  //         message:['', Validators.required]
  //       })  
  //   }
  }
  
 

