import { Component, OnInit, OnDestroy, ViewChild, HostListener, AfterViewInit,Input,ViewEncapsulation } from '@angular/core';
import { RootLayout } from '../root/root.component';

@Component({
  selector: 'demo-layout',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DemoComponent extends RootLayout implements OnInit {
    menuLinks = [
      {
        label:"Example Link 1",
        details:"13 New Updates",
        routerLink:"dashboard",
        iconType:"pg",
        iconName:"home",
        thumbNailClass:"bg-success"
      },
      {
          label:"Example Link 2",
          details:"234 New Emails",
          routerLink:"email/list",
          iconType:"pg",
          iconName:"mail"
      },
      {
        label:"Example Link with Submenu",
        iconType:"pg",
        iconName:"layouts2",
        toggle:"close",
        submenu:[
          {
            label:"Sublink 1",
            routerLink:"layouts/default",
            iconType:"letter",
            iconName:"dl",
          },
          {
            label:"Sublink 2",
            routerLink:"layouts/secondary",
            iconType:"letter",
            iconName:"sl",
          },
          {
            label:"Sublink 3",
            routerLink:"layouts/boxed",
            iconType:"letter",
            iconName:"bl",
          }
        ]
      },
  ];

    ngOnInit() {
    }
      
}
