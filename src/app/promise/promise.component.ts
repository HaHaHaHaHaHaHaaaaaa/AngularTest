import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    this.testPromise();

  }

  testPromise() {
    const p1 = new Promise((resolve, reject) => {
      resolve('成功了');
    });

    const p2 = new Promise((resolve, reject) => {
      resolve('success');
    });

    const p3 = new Promise((resolve, reject) => {
      reject('失败');
    });


    // Promise.all([p1, p2]).then((result) => {
    //   console.log(result);           // ['成功了', 'success']
    // }).catch((error) => {
    //   console.log(error);
    // });

    Promise.all([p1, p3, p2]).then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);    // 失败了，打出 '失败'
    });


    // Promise.race  竞赛 无论成功失败，先到先显示
  }


}
