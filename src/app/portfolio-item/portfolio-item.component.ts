import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {
  @ViewChild('title', {static: true}) title: ElementRef;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    console.log(this.title);
  }
  

  constructor() { }

  ngOnInit() {
  }

  
}
