import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../service/utilisateur.service';
import { Utilisateur } from '../Entity/utilisateur';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {
  private utilisateurService : UtilisateurService;
  private utilisateurs : Utilisateur [];
  private utilisateur : Utilisateur;
  private temp : any;

  constructor(utilisateurService : UtilisateurService) { 
    this.utilisateur = new Utilisateur();
    this.utilisateurs = new Array<Utilisateur>();
    this.utilisateurService = utilisateurService;
    this.utilisateurService.getAllUtilisateurs().subscribe(response => this.utilisateurs = response);
  }

  ngOnInit() {
  }

  onSubmit(){
    this.utilisateurService.addUtilisateur(this.utilisateur).subscribe(response => this.temp = response);
  }

  onSupp(id){
    this.utilisateurService.deleteUtilisateur(id).subscribe();
  }

}
