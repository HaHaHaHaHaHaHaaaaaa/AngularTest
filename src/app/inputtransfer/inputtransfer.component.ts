import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-inputtransfer',
  templateUrl: './inputtransfer.component.html',
  styleUrls: ['./inputtransfer.component.css']
})
export class InputtransferComponent implements OnInit,OnChanges {
  @Input('test') test:string

  hiddenTest:boolean=false
  constructor() { }

  ngOnInit() {
   
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes)
      if(changes.test.currentValue&&changes.test.currentValue.header){
        this.hiddenTest=true
      }
    }

   /*  ngDoCheck(){
      if(this.test.header="888888888"){
        console.log('testtttt......')
      }
    } */
  

}
