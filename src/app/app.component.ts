import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*  @ViewChild('root', { read: ViewContainerRef }) root: ViewContainerRef; */
  title = 'app';
  /* constructor(private route: ActivatedRoute,
    private router: Router, private cf: ComponentFactoryResolver,private aps:AppService) {

  } */

  ngOnInit() {
    /*   if (AppGlobal.isWeiXin()) {
        let com = this.cf.resolveComponentFactory(TabsComponent);
        this.root.createComponent(com);
      } */
    }
}
