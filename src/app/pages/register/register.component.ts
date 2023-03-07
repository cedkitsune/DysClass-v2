import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: any ={
    login: null,
    email: null,
    password: null,
  };
  
  // Regex pour valider le champ de login
  loginRegex = /^[a-zA-Z0-9_]{3,20}$/;
  
  // Regex pour valider le champ d'email
  emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  // Regex pour valider le champ de mot de passe
  passwordRegex = /^(?!.*[<>])[a-zA-Z0-9*/+.=@çèéà'&()-]{6,}$/;
  
  isSuccessful = false;
  isSignupFailed = false;
  errorMessage ='';
  
  constructor(private authService: AuthService) { }
  
  onSubmit(): void{
    const { login, email, password } = this.form;
  
    this.authService.register(login, email, password).subscribe(
      data =>{
        // console.log(data);
        this.isSuccessful = true;
        this.isSignupFailed = false;
      },
      err=> {
        // console.error(err);
        this.errorMessage = err.error.message;
        this.isSignupFailed = true;
      }
    );
  }
  ngOnInit(): void {}
}

// export class RegisterComponent {
//   form!: FormGroup;
//   //  isSuccesful dira sie le registre s'est déroulée correctement
//   isSuccessful: boolean = false;
//   // isSignupFailed en cas il y-a eu u n probleme lors de l'inscription
//   isSignupFailed: boolean = false;
//   // error stockera le message d'erreur éventuel
//   errorMessage = '';

//   constructor(
//     private authService: AuthService,
//     private formBuilder: FormBuilder
//   ) {}

//   ngOnInit(): void {
//     //
//     this.form = this.formBuilder.group({
//       username: ['', Validators.required],
//       email: ['', Validators.required],
//       password: ['', Validators.required],
//     });
//   }
//   onSubmit() {
//     // on recupere les données venent du html
//     const dataForm = {
//       username: this.form.controls['username'].value,
//       email: this.form.controls['email'].value,
//       password: this.form.controls['password'].value,
//     };
//     this.addUser(dataForm.username, dataForm.email, dataForm.password);
//   }
//   get userForm() {
//     return this.form.controls;
//   }
//   private addUser(username: string, email: string, password: string) {
//     this.authService.register(username, email, password).subscribe(

//       (data) => {
//         console.log(data);
//         this.isSuccessful = true;
//         this.isSignupFailed = false;
//         window.location.href = 'classe';
//       },
//       (err) => {
//         console.error(err);
//         this.errorMessage = err.error.message;
//         this.isSignupFailed = true;
//       }
//     );
//     console.log( username, email, password);
//   }
// }
