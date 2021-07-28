import { Injectable } from '@angular/core';
import { PortfolioItemInterface } from './portfolio-item-interface';

@Injectable({
  providedIn: 'root'
})
export class PortfolioServiceService {
  portfolioItemArr: PortfolioItemInterface[] = [
    {type: "Web Development - Angular", name: "Interactive Web Challenges", description: "A sample of 30 commonly used web design features.", imgUrl: "/assets/img/portfolio/Interactive_Challenges_3columns.png", imgAlt: "Interactive Web Challenges", link: "https://interactivewebchallenges.com"},
    {type: "Web Development", name: "Bunblr", description: "A scrolling app for the bunny socialites.", imgUrl: "/assets/img/coming-soon.jpg", imgAlt: "Coming Soon!", link: "https://bunblr.com"},
    {type: "Web Development", name: "Weathrr", description: "Just another weather app.", imgUrl: "/assets/img/coming-soon.jpg", imgAlt: "Coming Soon!", link: "https://github.com/nicobartholom3w"}
  ]
  constructor() { }

  getPortfolioItemArr() {
    return this.portfolioItemArr.slice();
  }
}
