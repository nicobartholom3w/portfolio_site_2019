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

      if(nameTitleRect.bottom <= 0) {
        this.isHeaderSticky = true;
      }
      else {
        this.isHeaderSticky = false;
      }
    }
  title = 'portfolio-site';
  isHeaderSticky: boolean = false;
  
}
