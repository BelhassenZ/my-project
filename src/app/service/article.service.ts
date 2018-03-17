import {Article} from '../Entity/article';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpEvent } from '@angular/common/http/src/response';


@Injectable()
export class ArticleService {
  
  private urlPath : string;
  private pathPrefix : string;
  private httpOptions;

  constructor(private HTTP : HttpClient) {  
    this.urlPath = "http://localhost:3000/";
    this.pathPrefix = "../assets/img/";
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  getAllArticle(): Observable<Article[]>{
    return  this.HTTP.get<Article[]>(this.urlPath+'articles');
  }
  
  getArticleById(id: number): Observable<Article>{
    return  this.HTTP.get<Article>(this.urlPath+'articles/'+id);
  }

  addArticle(article : Article): Observable<HttpEvent<Article>> {
    return this.HTTP.post<Article>(this.urlPath+'articles/', article, this.httpOptions);
  }

  deleteArticle(id: number): Observable<HttpEvent<Article>> {
    return this.HTTP.delete<Article>(this.urlPath+'articles/'+id, this.httpOptions);
  }

  editArticle(article : Article): Observable<HttpEvent<Article>> {
    return this.HTTP.put<Article>(this.urlPath+'articles/'+article.id, article, this.httpOptions);
  }
  
}