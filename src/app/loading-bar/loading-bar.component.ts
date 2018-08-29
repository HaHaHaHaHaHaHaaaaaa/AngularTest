import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { Observable } from 'rxjs';
import * as Rx from 'rxjs/Rx'
@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.css']
})
export class LoadingBarComponent implements OnInit {
  loading: boolean = true;
  input1; input2;
  obs: any
  obs2: any
  constructor() {



    this.obs = Observable.create(observer => {
      setTimeout(function () {
        observer.next('ob next in origin')
      }, 1000);
      observer.next('s2th')
      /*     observer.complete(); */
    })
    this.obs2 = Observable.create(observe => {
      observe.next('asyc 2222222222')
      observe.next('asyc 2222222222222222222222222222')
    })


    //不相同 有变化
    Observable.of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4)
      .distinct().distinctUntilChanged()
      .subscribe(x => console.log(x));

    this.startOB()

  }

  startOB() {
    //最新
    Observable.combineLatest(this.obs, this.obs2, (x, y) => {
      console.log(x, y)
    }).subscribe()
    /* obs.subscribe() */
    /*  this.obs.subscribe(next => { console.log('enter next',next) }, error => { }, complete => { console.log('over...........') }) */
  }




  ngOnInit() {
    /*  this.isloading()
     this.finished(); */
  }
  isloading(time?: number) {
    let dom: any = document.getElementsByClassName('bar')[0];
    time = time || 5;
    let pro = 0;
    let timer = setInterval(() => {
      pro = pro + 0.2
      if (pro < time - 1 && this.loading) {
        dom.style.width = pro / time * 100 + '%'
      } else if (pro >= time - 1 && this.loading) {
        dom.style.width = '80%'
      } else {
        dom.style.width = '100%';
        clearInterval(timer);
        this.loading = false
      }
    }, 150)
  }

  getReady() {
    return Promise.resolve('666')
  }
  getReady1() {
    return Promise.resolve('999')
  }

  async finished() {
    await this.getReady1().then(rs => console.log(rs)).catch(err => { });
    await this.getReady().then(rs => console.log(rs)).catch(err => { });
  }

}
