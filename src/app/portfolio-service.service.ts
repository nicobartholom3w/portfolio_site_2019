import { Injectable } from '@angular/core';
import { PortfolioItemInterface } from './portfolio-item-interface';

@Injectable({
  providedIn: 'root'
})
export class PortfolioServiceService {
  portfolioItemArr: PortfolioItemInterface[] = [
    {type: "Web Development", name: "Interactive Web Challenges", description: "A sample of 30 commonly used web design features."},
    {type: "Web Development", name: "Interactive Web Challenges", description: "A sample of 30 commonly used web design features."},
    {type: "Web Development", name: "Interactive Web Challenges", description: "A sample of 30 commonly used web design features."}
  ]
  constructor() { }

  getPortfolioItemArr() {
    
  }
}
