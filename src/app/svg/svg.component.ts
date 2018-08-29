import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.css']
})
export class SvgComponent implements OnInit {
  transferobj:any={title:null,header:null}
  svgWidth: string = '0';
  nm: number = 1;
  svgHeight = 50;
  svgpath = "0 100,320 100,320 400,220 500,100 500,0 400"
  svgcolor: string = "orange"
  constructor() { }

  ngOnInit() {
    console.log(this.svgpath)
    /* let rect= document.getElementById('svg_pg');
    setTimeout(function() {
      rect.style.width="100%"
    }, 2000); */

    /*  setInterval(() => {
       console.log('...',this.svgWidth)
       this.nm = this.nm + 10;
       this.svgWidth=this.nm+'%'
     }, 1000) */

    let aa = document.getElementById('svghh');

    /* console.log(aa.getAttribute('points')) */


    setTimeout(()=> {
      this.transferobj.title='tt';
      this.transferobj.header='bb'
    }, 5000);
  }

  getobj(){
    if(this.transferobj.title){
      return this.transferobj
    }else{
      return null
    }
  }

  randomNum() {
    this.svgWidth = Math.floor(Math.random() * 100) + '%';

    /* console.log(this.svgWidth) */
  }
  rd(ev) {
    /* this.nm=ev; */
    if (ev > 400) {
      let h = ev - 400;
      let left = h + " " + ev + ",";
      let right = 320-h + " " + ev;
      this.svgpath = left + right + ",220 500,100 500"+","+h + " " + ev;
    } else {
      this.svgpath = "0 " + ev + ",320 " + ev + ",320 400,220 500,100 500,0 400"
    }

    this.svgWidth = ev + '%'
  }

}
