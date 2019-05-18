import { Component, OnInit } from '@angular/core';
	
import { Tab1Service } from '../tab1.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
	data: any;
	
	constructor(private tab1Service: Tab1Service, private router: Router){}

	ngOnInit(){

		this.tab1Service.getData('top-headlines?country=us&category=business')
		.subscribe(data => {
			console.log(data);
			this.data =data;

		});
	}
onGoToNewsSinglePage(article){
	this.tab1Service.currentArticle = article;
	this.router.navigate(['/news']);

	}
}

