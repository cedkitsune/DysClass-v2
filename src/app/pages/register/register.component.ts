import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'primeng/api';
import { timer } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form!: FormGroup;
  //  isSuccesful dira sie le registre s'est déroulée correctement
  isSuccessful: boolean = false;
  // isSignupFailed en cas il y-a eu u n probleme lors de l'inscription
  isSignupFailed: boolean = false;
  // error stockera le message d'erreur éventuel
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private location: Location
  ) {}

  ngOnInit(): void {
    // const { userName, email, password } = this.form;
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    // this.authService.register(User)
    // .subscribe(
    //   data => {
    //     console.log(data);
    //     this.isSuccessful = true;
    //     this.isSignupFailed =false;
    //     window.location.href = "classe";
    //   },
    //   err =>{
    //     console.error(err);
    //     this.errorMessage = err.error.message;
    //     this.isSignupFailed =true;
    //     this
    //   }
    // )
  }
  onSubmit() {
    const dataForm = {
      username: this.form.controls['username'].value,
      email: this.form.controls['email'].value,
      password: this.form.controls['password'].value,
    };
    this.addUser(dataForm.username, dataForm.email, dataForm.password);
  }

  private addUser(username: string, email: string, password: string) {
    this.authService.register(username, email, password).subscribe( 
  
      ():void =>{
        this.messageService.add({
          severity:'success',
          summary: "succés",
          detail: "Votre compte a bien été créé"
        })
        
      },
      ()=>{
        this.messageService.add({
          severity: 'errror',
          summary: "Erreur",
          detail: "Une erreur c'esgt produite lors de la creation de votre compte"
        })
      }
    );
  }

}
