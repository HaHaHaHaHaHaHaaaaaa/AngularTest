import { Directive } from '@angular/core';

@Directive({
  selector: 'button[btnHttp]',
  host:{
    '(click)':'onClick($event.target)'
  }
})
export class BtnHttpDirective {
  numberofClicks=0;
  constructor() { }
  onClick(btn:HTMLElement){

    btn.setAttribute('disabled','disabled');
 
    setTimeout(()=> {
        btn.removeAttribute('disabled');
        console.log('3s过了，可以点击button了')
    }, 3000);
    console.log('button',btn,++this.numberofClicks)
  }
}
