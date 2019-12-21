import {
    Component,
    Input,
    ViewEncapsulation,
    ElementRef,
    ViewChild,
    TemplateRef,
    ContentChild,
    EventEmitter,
    Output
    OnInit
  } from '@angular/core';

  import {
    animate,
    state,
    style,
    transition,
    trigger,
  } from '@angular/animations';


@Component({
  selector: 'app-demo-login',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './demo-login.component.html',
  styleUrls: ['./demo-login.component.scss'],
    animations: [
      trigger('collapseState', [
        state('inactive', style({
          opacity: '0',
          height : 0,
          paddingBottom:'0'
        })),
        state('active', style({
          opacity: '1',
          height : '*',
          paddingBottom:'*'
        })),
        transition('inactive => active', animate('125ms ease-in')),
        transition('active => inactive', animate('125ms ease-out'))
      ]),
      trigger('fadeAnimation', [
        state('false', style({
          opacity: '0',
          visibility : 'hidden',
        })),
        state('true', style({
          opacity: '1',
          visibility : 'visible'
        })),
        transition('false => true', animate('500ms ease-in')),
        transition('true => false', animate('500ms ease-out'))
      ]),
    
    ],
})
export class DemoLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    _isCollapsed:boolean = false;
    _isMaximixed:boolean = false;
    _isLoading:boolean = false;
    _minimalHeader:boolean = false;
    _message:string = "";
    _messageType:string = "danger";
    _messageVisible:boolean = false;
    _progressType:string = "circle";
    _progressColor:string = "";
    _showTools:boolean = true;
    _close_card:boolean = false;
    _refresh:boolean = true;
    _refreshColor:string = 'light';
    _close:boolean = true;
    _toggle:boolean = true;
    _maximize:boolean = true;
    _timeout:number = 0;
    _titleText:string = "";
    _type:string = "default";

    _extraHeaderClass = "";
    _extraBodyClass = "";

    _additionalClasses = "";
    

    @ViewChild('hostContent') _hostContent: ElementRef;
    @ViewChild('minimalCircleLoading') minimalCircleLoading: ElementRef;
    @ViewChild('minimalCircleLoadingTrigger') minimalCircleLoadingTrigger: ElementRef;
    @ContentChild('CardTitle') CardTitle: TemplateRef<void>;
    @ContentChild('CardExtraControls') CardExtraControls: TemplateRef<void>;
    @Input()
    set Title(value:string){
      this._titleText = value
    }
    get Title(){
      return this._titleText;
    }

    @Input()
    set Type(value:string){
      this._type = value;
    }

    @Input()
    set MinimalHeader(value:boolean){
      this._minimalHeader = value;
    }

    @Input()
    set ProgressType(value:string){
}
