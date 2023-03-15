import { Component } from '@angular/core'; 
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { EnseignantService } from '../../services/enseignant.service.service';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faUserGear } from '@fortawesome/free-solid-svg-icons';
import { faGears } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css'],
})
export class CompteComponent {
  faBook = faBook;
  faUserGear = faUserGear;
  faGears = faGears;
  // j'initie a nul le fomulaire 
  form :any = {
    login:null,
    email:null,
    isAdmin :null
  }
   
    isDelete: boolean=false;

  ngOnInit(): void {
    const id = this.tokenStorage.getUser().id
  this.getEnseignant(id)

  // console.log(id);
    
  }

constructor(
    private route: ActivatedRoute,
    private router: Router,
    private enseignantService: EnseignantService,
    private tokenStorage: TokenStorageService
  ) { }

 getEnseignant(id:string){
this.enseignantService.getOneEnseignant(id).subscribe((user)=>{
// je met les infos dans les inputs du formaulaire pourvoir editer.
  // console.log(user);
  this.form._id = user.result._id,
  this.form.login = user.result.userName ;
  this.form.email = user.result.email;
  this.form.isAdmin = String(user.result.isAdmin)
})
 }
//  
  updateUser(): void {

    this.enseignantService.updateEnseignant(this.form).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
  logOut(): void {
    this.tokenStorage.signOut();
    window.location.href = '';
  }

  public  deleteEnseignant(userId: string){
    if(confirm("voulez-vous vraiment  supprimer cet utilisateur?")){
        this.enseignantService.deleteEnseignant(userId).subscribe(
            ()=> {
                this.isDelete = true;
                this.logOut()
                // console.log("suppression effectuée");
            }
        )
    }
  }

  }
