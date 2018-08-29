import { Directive, Input, OnChanges, OnInit } from '@angular/core';


@Directive({
  selector: '[appDt]',
  host: {
    '[style.fontsize]': 'username1'
  }
})
export class DtDirective implements OnInit {
  /*  ssrc:string; */
  @Input('abc') ssrc: string = "6666666666";
  wbl: string = "123";
  username1: string;
  constructor() {
    /*   console.log('dtttt')
      console.log(this.wbl) */
    
  }
  ngOnInit() {
    console.log(this.username1)
  }
 

  ngOnChanges() {
    /* console.log(this.wbl, 'changes'); */
    
  }

}
