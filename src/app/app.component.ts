import { ViewportScroller } from '@angular/common';
import { Target } from '@angular/compiler';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild ('nameTitle', {static: true}) nameTitle: ElementRef;
  @HostListener ('window:scroll', ['$event'])
    onWindowScroll(event) {
      let nameTitleRect: ClientRect = this.nameTitle.nativeElement.getBoundingClientRect();
      
      console.log(this.isNavClicked);
      if(nameTitleRect.bottom <= 0) {
        this.isHeaderSticky = true;
      }
      else {
        this.isHeaderSticky = false;
      }
    }
  title = 'portfolio-site';
  isHeaderSticky: boolean = false;
  isNavClicked: boolean = false;

  constructor(private viewportScroller: ViewportScroller) {}

  onPageNavigate(elementId: Element): void {
    // this.isHeaderSticky = true;
    // this.viewportScroller.scrollToAnchor(elementId);
    elementId.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    
  }
}
