import { ViewportScroller } from '@angular/common';
import { Target } from '@angular/compiler';
import { Component, ElementRef, HostListener, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { TabHeaderDirective } from './directives/tab-header.directive';
import { SectionInterface } from './section-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild ('nameTitle', {static: true}) nameTitle: ElementRef;
  @ViewChild ('about', {static: true}) about: ElementRef;
  @ViewChild ('portfolio', {static: true}) portfolio: ElementRef;
  @ViewChild ('interests', {static: true}) interests: ElementRef;
  @HostListener ('window:scroll', ['$event'])
    onWindowScroll(event) {
      let nameTitleRect: ClientRect = this.nameTitle.nativeElement.getBoundingClientRect();
      if(nameTitleRect.bottom <= 0) {
        this.isHeaderSticky = true;
      }
      else {
        this.isHeaderSticky = false;
      }

      if(this.interests.nativeElement.getBoundingClientRect().top <= 200) {
        this.highlightSectionName(2);
      }
      else if(this.portfolio.nativeElement.getBoundingClientRect().top <= 200) {
        this.highlightSectionName(1);
      }
      else if(this.about.nativeElement.getBoundingClientRect().top <= 5) {
        this.highlightSectionName(0);
      }
      else {
        this.highlightSectionName(null);
      }
    }
  title = 'portfolio-site';
  isHeaderSticky: boolean = false;
  sectionArr: SectionInterface[] = [{sectionName: "about", isSectionActive: false}, {sectionName: "portfolio", isSectionActive: false}, {sectionName: "interests", isSectionActive: false}]
  constructor(private viewportScroller: ViewportScroller, private elementRef: ElementRef, private renderer: Renderer2) {}

  onPageNavigate(elementId: Element, event: MouseEvent): void {
    elementId.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  highlightSectionName(indexTrue: number) {
    for(let i = 0; i < this.sectionArr.length; i++) {
      if(indexTrue !== null) {
        if(i === indexTrue) {
          this.sectionArr[i].isSectionActive = true;
        }
        else {
          this.sectionArr[i].isSectionActive = false;
        }
      }
      else {
        this.sectionArr[i].isSectionActive = false;
      }
    }
  }
}
