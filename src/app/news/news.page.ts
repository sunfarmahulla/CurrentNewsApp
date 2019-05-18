import { Component, OnInit } from '@angular/core';
import { Tab1Service } from '../tab1.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

	article;

  constructor(private tab1Service: Tab1Service) { }

  ngOnInit() {

    this.article = this.tab1Service.currentArticle;
  console.log(this.tab1Service.currentArticle);
  }

}
