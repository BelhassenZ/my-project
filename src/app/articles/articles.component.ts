import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  pathPrefix : string = "../assets/img/";
  date = Date.now();

  articles : any []=[
    {
      description:"Un smartphone de haute gamme",
      titre:"iPhone X",
      prix:999.99,
      promotionValue:0,
      url:["iphone_x.jpeg"]
    },
    {
      description:"Un pc light Gaming",
      titre:"Asus JXS15",
      prix:1569,
      promotionValue:10,
      url:["asus.jpg"]
    },
    {
      description:"Un écran 4K 27\" IPS HDR" ,
      titre:"LG G83",
      prix:899,
      promotionValue:0,
      url:["lg.jpg"]
    },
  ];

  private _textFilter:string;
  filteredArticles:any [] = [];

  get textFilter():string {
    return this._textFilter;
  }

  set textFilter(text:string) {
    this.filteredArticles= text ? this.articles.filter((article:any) => article.titre.indexOf(text) !== -1) : this.articles;
    this._textFilter=text;
  }

  constructor() {
    
  }


  ngOnInit() {
    this.filteredArticles=this.articles;
  }

}
