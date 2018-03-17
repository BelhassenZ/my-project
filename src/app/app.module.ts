import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute, ParamMap } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';
import { MainComponent } from './main/main.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { UnderscorePipe } from './shared/pipes/underscorePipe/underscorePipe';
import { ArticleService } from './service/article.service';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { UtilisateurService } from './service/utilisateur.service';

const appRoutes: Routes = [
  { path: 'article/:id', component: ArticleComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'ajouter', component: AjouterComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full'},
  { path: 'utilisateur', component: UtilisateursComponent },
];

@NgModule({
  declarations: [
    
    ArticlesComponent,
    ArticleComponent,
    MainComponent,
    AccueilComponent,
    NavComponent,
    FooterComponent,
    AjouterComponent,
    UnderscorePipe,
    UtilisateursComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule
    
  ],
  providers: [ArticleService,UtilisateurService],
  bootstrap: [MainComponent]
})
export class AppModule { }
