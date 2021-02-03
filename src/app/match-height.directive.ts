import {
    Directive, ElementRef, AfterViewChecked, Input, HostListener
} from '@angular/core';

@Directive({
    selector: '[myMatchHeight]'
})
export class MatchHeightDirective implements AfterViewChecked {

    constructor(private el: ElementRef) {

    }

    ngAfterViewInit() {
      setTimeout(()=>{
        this.matchHeight(this.el.nativeElement, 'left_column', 'right_column');
      },300);

    }
    ngAfterViewChecked() {
        // call our matchHeight function here later
        setTimeout(()=>{
          this.matchHeight(this.el.nativeElement, 'left_column', 'right_column');
        },100);
    }

    matchHeight(parent: HTMLElement, className: string, targetClassName: string) {
      // match height logic here
      // console.log('matching height');

      if (!parent) return;

      // step 1: find all the child elements with the selected class name
      const children = parent.getElementsByClassName(className);

      if (!children) return;
      // console.log(children);

      const targetChildren = parent.getElementsByClassName(targetClassName);
      if (!targetChildren) return;

      // Initiate elemet height first
      Array.from(targetChildren).forEach((x: HTMLElement) => {
          x.style.height = 'initial';
      });

      // step 2a: get all the child elements heights
      const itemHeights = Array.from(children)
          .map(x => x.getBoundingClientRect().height);
          // .map(x => x.offsetHeight);

      // console.log(children[0].getBoundingClientRect());

      // step 2b: find out the tallest
      const maxHeight = itemHeights.reduce((prev, curr) => {
          return curr > prev ? curr : prev;
      }, 0);
      console.log(maxHeight);

      // step 3: update all the child elements to the tallest height
      Array.from(targetChildren)
          .forEach((x: HTMLElement) => x.style.height = `${maxHeight}px`);
  }

  @HostListener('window:resize')
  onResize() {
      // call our matchHeight function here
      this.matchHeight(this.el.nativeElement, 'left_column', 'right_column');
  }
}
