import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../service/article.service';
import { Article } from '../Entity/article';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})

export class ArticleComponent {
  private route: ActivatedRoute;
  private articleService: ArticleService;
  private id: number;
  private article: Article;

  pathPrefix = '../assets/img/';
  
  constructor(route : ActivatedRoute,articleService : ArticleService){
    this.route = route;
    this.articleService = articleService;
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.articleService.getArticleById(this.id).subscribe(response => this.article = response);
  }
  
  
  
  
  
  
  
  
  
  
  /*art : any;
    pathPrefix : string = "../assets/img/";
    articles : any []=[
        {
          description:"Un smartphone de haute de gamme",
          titre:"iPhone X",
          prix:999.99,
          promotionValue:0,
          url:["4.jpg","5.jpg","6.jpg"]
        },
        {
          description:"Un pc light Gaming",
          titre:"Asus JXS15",
          prix:1569,
          promotionValue:10,
          url:["3.jpg","2.png"]
        },
        {
          description:"Un écran 4K 27\" IPS HDR" ,
          titre:"LG G83",
          prix:899,
          promotionValue:0,
          url:["1.jpeg"]
        },
      ];

      constructor(){
        this.art=this.articles[0];
      }*/

    
}