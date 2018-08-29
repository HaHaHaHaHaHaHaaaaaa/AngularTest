import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-func',
  templateUrl: './func.component.html',
  styleUrls: ['./func.component.css']
})
export class FuncComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var f= this.load();
  }

  load(){
    return function(name){
      console.log(6666666,name)
    }('999999999999');
  }

  //简单的脚本拦截
  removeAds() {
    
        
    
        document.addEventListener('DOMNodeInserted', event => {
          let tar: any = event.target
          let df = document.createElement
          document.createElement = function (tag) {
            switch (tag) {
              case 'script':
                if (tar.src && tar.src.match(document.baseURI) === null) {
                  tar.src = " ";
                  tar.innerHTML = "";
                  tar.innerText = '';
                }
                return df.apply(this, arguments)
              default:
                return df.apply(this, arguments)
            }
          }
    
        })
      }
}
