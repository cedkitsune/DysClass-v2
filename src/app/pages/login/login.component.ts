import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //on définit ici les variables nécessaires et form stockera les valeurs entrées dans les champs du formulaire
  form: any = {
    email: null,
    password: null,
  };
  // Regex pour valider le champ d'email
  emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Regex pour valider le champ de mot de passe
  passwordRegex = /^(?!.*[<>])[a-zA-Z0-9*/+.=@çèéà'&()-]{6,}$/;
  //isLoggedIn dira si un user est connecté grâce au token récupéré dans sessionStorage
  isLoggedIn = false;
  //isLoginFailed dira si le login a échoué
  isLoginFailed = false;
  //errorMessage stockera un éventuel message d'erreur
  errorMessage = '';
  //admin stockera un booléen dira si le user connecté a le statut admin
  admin: boolean = false;
  //user stockera les informations du user connecté récupérées dans le sessionStorage
  user: any = {};

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  //au chargement, on définit les valeurs de chaque variable définie plus haut
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.admin = this.tokenStorage.getUser().admin;
      this.user = this.tokenStorage.getUser();
      // console.log(this.user.userName);
    }
  }
  //quand le formulaire est soumis, grâce à AuthService, on envoie une requête vers le back qui contient
  //dans son body un email et un password. On récupère un token et les informations du user qui tente de se
  //connecter si tout va bien, sinon, un message d'erreur
  onSubmit() {
    const { email, password } = this.form;
    this.authService.login(email, password).subscribe(
      (data) => {
        this.tokenStorage.saveToken(data.message.token);
        this.tokenStorage.saveUser(data.message.user);
        // console.log(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;

        // this.admin = this.tokenStorage.getUser().user.admin;
        this.user = this.tokenStorage.getUser();
        window.location.href = '../classe';
        // window.location.reload();
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
}
