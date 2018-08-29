import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-test4',
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.css']
})
export class Test4Component implements OnInit {
  obj:any={
    name:'wbl',
    age:18,
    cla:null,
    ob:{
      wbl:'王柏林',
      www:null
    }
  }
  constructor() { 
  }

  ngOnInit() {
    $(document).ready(()=>{
      console.log('ready')
    })

    let str="ab bcdab acb abbbbb";
    let rg=new RegExp("(ab)*.{0,4}$");
    let out= rg.exec(str);
    console.log(out)
    var book = {
      title: "High Performance JavaScript",
      publisher: "Yahoo! Press"
      };
      book.toString()
     this.obj.__proto__.sy=function(){
       console.log('may you lucky')
     }
     this.obj.sy();
    
     document.body.style.cssText="background:gray;color:white;border:1px solid orange"
  }
  btnClick(){
    
    

  }
  obj1:any={
    name:''
  }
  cg(){
    console.log(this.obj1.name)
  }

}
