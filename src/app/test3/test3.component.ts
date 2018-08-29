import { Component, OnInit, OnChanges } from '@angular/core';
declare var EventUtil
@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {

  constructor() { }

  ngOnInit() {

    let arr = [1, 3, 'hello world', { obj: 1 }]
    console.log(arr)
    document.body.getAttributeNodeNS
    function gamestart() {
      return function () {
        console.log('hihi ,..');
        return [1, 2, 3]
      }
    }
    let b = gamestart();
    console.log(b(), navigator.onLine)

    window.addEventListener("online",function () {
      alert("Online");
    });
    window.addEventListener("offline", function () {
      alert("Offline");
    });
  }

}
