import {
    Directive,
    Renderer2,
    OnInit,
    ElementRef,
    HostListener,
    HostBinding,
    Input
  } from '@angular/core';
  
  @Directive({
    selector: '[appSetHeight]'
  })
  
  export class SetHeightDirective implements OnInit {
    @Input('scrollabledivoffset') scrollableoffset: number;
  
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    }
  
    ngOnInit() {
      this.elementRef.nativeElement.style.height = (window.innerHeight - this.scrollableoffset) + 'px';
      this.elementRef.nativeElement.style.overflowY = 'auto';
    }
  
    @HostListener('window:resize')
    onResize(eventData: Event) {
      this.elementRef.nativeElement.style.height = (window.innerHeight - this.scrollableoffset) + 'px';
    }
  
  }
  