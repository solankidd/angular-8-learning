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
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultBgColor: string = 'transparent';
  @Input() highlightBgColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string;

  constructor(private eleRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // this line would make sure initially backgroundColor should not be transparent
    // at a time of init of directive it will take latest defaultBgColor value
    this.backgroundColor = this.defaultBgColor;
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue'); OR below
    this.backgroundColor = this.highlightBgColor;
    this.color = 'white';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'transparent'); OR below
    this.backgroundColor = this.defaultBgColor;
    this.color = 'black';
  }
}
