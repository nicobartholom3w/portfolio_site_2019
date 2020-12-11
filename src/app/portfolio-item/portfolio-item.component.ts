import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { PortfolioItemInterface } from '../portfolio-item-interface';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {
  portfolioItemsArr: PortfolioItemInterface[] = [];


  constructor() { }

  ngOnInit() {

    
  }

  
}
