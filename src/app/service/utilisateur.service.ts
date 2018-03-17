import {Utilisateur} from '../Entity/utilisateur';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpEvent } from '@angular/common/http/src/response';


@Injectable()
export class UtilisateurService {
  
  private urlPath : string;
  private httpOptions;

  constructor(private HTTP : HttpClient) {  
    this.urlPath = "http://localhost:3000/";
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  getAllUtilisateurs(): Observable<Utilisateur[]>{
    return  this.HTTP.get<Utilisateur[]>(this.urlPath+'utilisateurs');
  }
  
  getUtilisateurById(id: number): Observable<Utilisateur>{
    return  this.HTTP.get<Utilisateur>(this.urlPath+'utilisateurs/'+id);
  }

  addUtilisateur(utilisateur : Utilisateur): Observable<HttpEvent<Utilisateur>> {
    return this.HTTP.post<Utilisateur>(this.urlPath+'utilisateurs/', utilisateur, this.httpOptions);
  }

  deleteUtilisateur(id: number): Observable<HttpEvent<Utilisateur>> {
    return this.HTTP.delete<Utilisateur>(this.urlPath+'utilisateurs/'+id, this.httpOptions);
  }
  
}