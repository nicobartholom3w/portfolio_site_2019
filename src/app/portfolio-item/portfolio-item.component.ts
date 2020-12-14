import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { PortfolioItemInterface } from '../portfolio-item-interface';
import { PortfolioServiceService } from '../portfolio-service.service';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {
  @Input() itemInfo: PortfolioItemInterface;

  constructor(private portfolioService: PortfolioServiceService) { }

  ngOnInit() {

  }

  
}
