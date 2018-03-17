import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';
import { Article } from '../Entity/article';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  private articleService : ArticleService;
  private articles:Article [];
  

  constructor(articleService : ArticleService) { 
    this.articleService = articleService;
    this.articleService.getAllArticle().subscribe(response => this.articles = response);
  }

  ngOnInit() {
  }

}
