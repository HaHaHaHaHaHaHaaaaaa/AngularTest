import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const hw = this.helloWorldGenerator('test');

    setTimeout(() => {
      console.log(hw.next('666666'));
      setTimeout(() => {
        console.log(hw.next());
        setTimeout(() => {
          console.log(hw.next());
        }, 2000);
      }, 2000);
    }, 2000);

  }

  *helloWorldGenerator(x: string) {
    yield 'hello' + x;
    yield 'world' + x;
    return 'ending';
  }

}
