import { Component, OnInit, Directive, Input, ViewChildren, QueryList, ContentChildren } from '@angular/core';
import { DtDirective } from '../dt.directive';


@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css'],
  queries:{
    contentChildren: new ContentChildren(DtDirective),
    viewChildren: new ViewChildren(DtDirective)
  }
})
export class Test1Component implements OnInit {
  contentChildren: QueryList<DtDirective>
  viewChildren: QueryList<DtDirective>
  username:string='www'
  constructor() { }

  ngOnInit() {
 
  }

  ngAfterContentInit() {
    // contentChildren is set
   /*  console.log(this.contentChildren) */
  }
 
  ngAfterViewInit() {
    // viewChildren is set
    console.log(this.viewChildren);
    let  dt=this.viewChildren.first;
    console.log('test1  ',dt.wbl)
    dt.wbl="1234";
    console.log('test1更改  ',dt)
  }

}
