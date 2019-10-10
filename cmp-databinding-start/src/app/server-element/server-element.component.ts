import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  SimpleChanges,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input() element: { type: string; name: string; content: string };
  @Input('aliasOutside') aliasInside;
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('%c%s', 'color:blue', '0. constructor');
  }

  ngOnChanges(Changes: SimpleChanges) {
    console.log('%c%s', 'color: blue', '1. ngOnChanges');
    // console.log(Changes);
  }

  ngOnInit() {
    console.log('%c%s', 'color: blue', '2. ngOnInit');
    // console.log('nativeElement ngOnInit: ' + (this.header.nativeElement.textContent || 'blank'));
    // console.log('contentChild ngOnInit: ' + (this.paragraph.nativeElement.textContent || 'blank'));
  }

  ngDoCheck() {
    console.log('%c%s', 'color: blue', '3. ngDoCheck');
    // console.log('nativeElement ngDoCheck: ' + (this.header.nativeElement.textContent || 'blank'));
  }

  ngAfterContentInit() {
    console.log('%c%s', 'color: blue', '4. ngAfterContentInit');
    // console.log('nativeElement ngAfterContentInit: ' + (this.header.nativeElement.textContent || 'blank'));
     /* it will be available only here */
    // console.log('contentChild ngAfterContentInit: ' + (this.paragraph.nativeElement.textContent || 'blank'));
  }

  ngAfterContentChecked() {
    console.log('%c%s', 'color: blue', '5. ngAfterContentChecked');

    /* it will be available only here */
    console.log('contentChild ngAfterContentChecked: ' + (this.paragraph.nativeElement.textContent || 'blank'));
    // console.log('nativeElement ngAfterContentChecked: ' + (this.header.nativeElement.textContent || 'blank'));
  }

  ngAfterViewInit() {
    console.log('%c%s', 'color: blue', '6. ngAfterViewInit');
    /* it will be available only here */
    // console.log('nativeElement ngAfterViewInit: ' + (this.header.nativeElement.textContent || 'blank'));
  }

  ngAfterViewChecked() {
    console.log('%c%s', 'color: blue', '7. ngAfterViewChecked');
    /* it will be available only here */
    // console.log('nativeElement ngAfterViewChecked: ' + (this.header.nativeElement.textContent || 'blank'));
  }

  ngOnDestroy() {
    console.log('%c%s', 'color: blue', '8. ngOnDestroy');
  }
}
