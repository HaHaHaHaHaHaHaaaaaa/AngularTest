import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let len=1000;
    let arr=[];
    for (var index = 0; index < len; index++) {
      arr.push(index);
    }
   
    setTimeout(function() {
      arr.forEach((item,index)=>console.log(item,index))
    }, 1000);
    setTimeout(function() {
      for (var index = 0; index < arr.length; index++) {
        var element = arr[index];
        console.log(element)
      }
    }, 1000);
    
    
  }

}
