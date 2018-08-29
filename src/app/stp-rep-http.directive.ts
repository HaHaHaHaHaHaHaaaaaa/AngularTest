import { Directive } from '@angular/core';

@Directive({
  selector: 'button[http]',
  host:{
    '(click)':'onClick($event.target)'
  }
})
export class StpRepHttpDirective {
  numberofClicks=0;
  constructor() { }
  onClick(btn){
    console.log('button',btn,++this.numberofClicks)
  }
}
