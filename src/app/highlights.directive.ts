import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlights]'
})
export class HighlightsDirective {

  constructor(private elem:ElementRef) { 
    elem.nativeElement.style.backgroundColor = 'lightblue'
    elem.nativeElement.style.borderRadius = '15px'
  }

}
