import { Injectable } from '@angular/core';
import { PortfolioItemInterface } from './portfolio-item-interface';

@Injectable({
  providedIn: 'root'
})
export class PortfolioServiceService {
  portfolioItemArr: PortfolioItemInterface[] = [
    {type: "Web Development - Angular", name: "Interactive Web Challenges", description: "A sample of 30 commonly used web design features.", link: "https://github.com/nicobartholom3w"},
    {type: "Web Stuff Next", name: "WOOOwww", description: "AHAH.", link: "https://github.com/"},
    {type: "Web Yes", name: "YiKeS", description: "K.", link: "https://nicobartholomew.com"}
  ]
  constructor() { }

  getPortfolioItemArr() {
    return this.portfolioItemArr.slice();
  }
}
