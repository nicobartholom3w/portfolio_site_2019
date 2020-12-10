import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTabHeader]'
})
export class TabHeaderDirective {
  
    
  constructor(private elementRef: ElementRef) {}
    @HostListener('window:scroll') blurOnScroll() {
      this.blur();
    }

    private blur() {
      this.elementRef.nativeElement.blur();
    }

}
