import { Component, OnInit } from '@angular/core';
import { Article } from '../Entity/article';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  
  private articleService : ArticleService;
  private article : Article; 
  private articles : Article [];
  private addIsHidden= true;
  private editIsHidden= true;
  private result : any;
  
  constructor(articleService : ArticleService) { 
    this.article = new Article();
    this.articles = new Array<Article>();
    this.articleService = articleService;
    this.articleService.getAllArticle().subscribe(response => this.articles = response);
  }
  
  ngOnInit() {
  }

  onAddButton(){
   this.addIsHidden= !this.addIsHidden;
  }

  onEditButton(id){
    if( (this.article.id === id && !this.editIsHidden) || (this.article.id !== id && this.editIsHidden) || this.article.id === undefined) {
      this.editIsHidden= !this.editIsHidden;
    }
    this.articleService.getArticleById(id).subscribe(response => this.article = response);
    
  }

  // onCancel(){
  //   this.article.titre="";
  //   this.article.prix=null;
  //   this.article.promotionValue=null;
  //   this.article.description="";
  //   this.article.url="";
  // }
  changeFileName(event){
    let file = event.target.files[0];
    this.article.url = file.name;
  }

  onSubmit(){
    this.articleService.addArticle(this.article).subscribe(response => this.result = response);
  }

  onSupp(id){
    this.articleService.deleteArticle(id).subscribe();
  }

  onEdit(){
    this.articleService.editArticle(this.article).subscribe(response => this.result = response);
  }
  



}
