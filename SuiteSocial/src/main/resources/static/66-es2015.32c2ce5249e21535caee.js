(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{"mJ+2":function(l,n,t){"use strict";t.r(n);var e=t("8Y7J"),o=t("s7LF"),u=t("XNiG"),r=t("1G5W"),s=t("EFyh");class a{constructor(l,n,t,e,o){this._formBuilder=l,this.snackBar=n,this.router=t,this.route=e,this.signServe=o,this.horizontalPosition="center",this.verticalPosition="top",this.log=!1,this.c=1,this.c1=1,this.route.queryParams.subscribe(l=>{this.email=l.email}),this.route.queryParams.subscribe(l=>{this.userType=l.ut}),this.route.queryParams.subscribe(l=>{this.date=l.ts}),this._unsubscribeAll=new u.a}ngOnInit(){const l=new RegExp(/^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/);this.resetPasswordForm=this._formBuilder.group({password:["",[o.Validators.required,o.Validators.pattern(l)]],passwordConfirm:["",[o.Validators.required,i]]}),this.resetPasswordForm.get("password").valueChanges.pipe(Object(r.a)(this._unsubscribeAll)).subscribe(()=>{this.resetPasswordForm.get("passwordConfirm").updateValueAndValidity()})}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}view(l){l.type="password"===l.type?"text":"password",this.c++,this.see=this.c%2==0}view2(l){l.type="password"===l.type?"text":"password",this.c1++,this.see1=this.c1%2==0}get b(){return this.resetPasswordForm.controls}onResetSubmit(){this.resetPasswordForm.valid&&this.signServe.resetPass(this.resetPasswordForm.value.passwordConfirm,this.email,this.userType).subscribe(l=>{console.log(l),"200"==l.response?(this.openSnackBar1("Your password is changed succesfully"),this.router.navigate(["/login"])):this.openSnackBar("Email-Id not associated with Social Suite account")},l=>{this.openSnackBar("Email-Id not associated with Social Suite account")})}openSnackBar(l){this.snackBar.open(l,"Try Again",{duration:2e3,horizontalPosition:this.horizontalPosition,verticalPosition:this.verticalPosition})}openSnackBar1(l){this.snackBar.open(l,"",{duration:2e3,horizontalPosition:this.horizontalPosition,verticalPosition:this.verticalPosition})}}const i=l=>{if(!l.parent||!l)return null;const n=l.parent.get("password"),t=l.parent.get("passwordConfirm");return n&&t?""===t.value?null:n.value===t.value?null:{passwordsNotMatching:!0}:null};class d{}var c=t("pMnS"),g=t("SVse"),p=t("iInd"),m=t("dFDH"),f=e["\u0275crt"]({encapsulation:0,styles:[[".invalid-feedback[_ngcontent-%COMP%]{font-weight:700;color:red}.toast-center-center[_ngcontent-%COMP%]{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.toast-top-center[_ngcontent-%COMP%]{top:0;right:0;width:100%}.toast-bottom-center[_ngcontent-%COMP%]{bottom:0;right:0;width:100%;font-weight:700}.toast-top-full-width[_ngcontent-%COMP%]{top:0;right:0;width:100%}.toast-bottom-full-width[_ngcontent-%COMP%]{bottom:0;right:0;width:100%}.toast-top-left[_ngcontent-%COMP%]{top:12px;left:12px}.toast-top-right[_ngcontent-%COMP%]{top:12px;right:12px}.toast-bottom-right[_ngcontent-%COMP%]{right:12px;bottom:12px}.toast-bottom-left[_ngcontent-%COMP%]{bottom:12px;left:12px}.toast-title[_ngcontent-%COMP%]{font-weight:700}.toast-message[_ngcontent-%COMP%]{word-wrap:break-word}.toast-message[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .toast-message[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#fff}.toast-message[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ccc;text-decoration:none}.toast-close-button[_ngcontent-%COMP%]{position:relative;right:-.3em;top:-.3em;float:right;font-size:20px;font-weight:700;color:#fff;text-shadow:0 1px 0 #fff}.toast-close-button[_ngcontent-%COMP%]:focus, .toast-close-button[_ngcontent-%COMP%]:hover{color:#000;text-decoration:none;cursor:pointer;opacity:.4}button.toast-close-button[_ngcontent-%COMP%]{padding:0;cursor:pointer;background:0 0;border:0}.toast-container[_ngcontent-%COMP%]{pointer-events:none;position:fixed;z-index:999999}.toast-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{box-sizing:border-box}.toast-container[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%]{position:relative;overflow:hidden;margin:0 0 6px;padding:15px 15px 15px 50px;width:300px;border-radius:3px;background-position:15px center;background-repeat:no-repeat;background-size:24px;box-shadow:0 0 12px #999;color:#fff}.toast-container[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%]:hover{box-shadow:0 0 12px #000;opacity:1;cursor:pointer}.toast-container.toast-bottom-center[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%], .toast-container.toast-top-center[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%]{width:300px;margin-left:auto;margin-right:auto}.toast-container.toast-bottom-full-width[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%], .toast-container.toast-top-full-width[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%]{width:96%;margin-left:auto;margin-right:auto}.ngx-toastr[_ngcontent-%COMP%]{background-color:#030303;pointer-events:auto}.toast-error[_ngcontent-%COMP%], .toast-info[_ngcontent-%COMP%], .toast-success[_ngcontent-%COMP%], .toast-warning[_ngcontent-%COMP%]{background-color:#ea3441!important}.toast-progress[_ngcontent-%COMP%]{position:absolute;left:0;bottom:0;height:4px;background-color:#000;opacity:.4}@media all and (max-width:240px){.toast-container[_ngcontent-%COMP%]   .ngx-toastr.div[_ngcontent-%COMP%]{padding:8px 8px 8px 50px;width:11em}.toast-container[_ngcontent-%COMP%]   .toast-close-button[_ngcontent-%COMP%]{right:-.2em;top:-.2em}}@media all and (min-width:241px) and (max-width:480px){.toast-container[_ngcontent-%COMP%]   .ngx-toastr.div[_ngcontent-%COMP%]{padding:8px 8px 8px 50px;width:18em}.toast-container[_ngcontent-%COMP%]   .toast-close-button[_ngcontent-%COMP%]{right:-.2em;top:-.2em}}@media all and (min-width:481px) and (max-width:768px){.toast-container[_ngcontent-%COMP%]   .ngx-toastr.div[_ngcontent-%COMP%]{padding:15px 15px 15px 50px;width:25em}}.subLabel[_ngcontent-%COMP%]{display:block;width:100%;border:none;height:35px;line-height:35px;color:#fff;font-weight:700;letter-spacing:1.3px;font-size:13px;margin:0 0 10px;border-radius:5px;background:#ea3441;text-align:center}.text-danger[_ngcontent-%COMP%]{margin:-16px 0 12px}"]],data:{}});function h(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","text-danger"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Password is required "]))],null,null)}function C(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"p",[["class","text-danger"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Password should be Alphanumeric Min. 8 characters "]))],null,null)}function v(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,4,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,h)),e["\u0275did"](2,16384,null,0,g.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,C)),e["\u0275did"](4,16384,null,0,g.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,2,0,t.b.password.errors.required),l(n,4,0,t.b.password.errors.pattern)},null)}function _(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","text-danger"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Confirm Password is required "]))],null,null)}function w(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"p",[["class","text-danger"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Confirm Password should be Alphanumeric Min. 8 characters "]))],null,null)}function P(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"p",[["class","text-danger"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Password do not match "]))],null,null)}function b(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,6,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,_)),e["\u0275did"](2,16384,null,0,g.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,w)),e["\u0275did"](4,16384,null,0,g.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,P)),e["\u0275did"](6,16384,null,0,g.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,2,0,t.b.passwordConfirm.errors.required),l(n,4,0,t.b.passwordConfirm.errors.pattern),l(n,6,0,!t.resetPasswordForm.get("passwordConfirm").hasError("required")&&t.resetPasswordForm.get("passwordConfirm").hasError("passwordsNotMatching"))},null)}function x(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,76,"div",[["id","wrapper"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,75,"div",[["class","login-form"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,21,"div",[["class","show-web-app"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,20,"div",[["class","show-inner-app"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,19,"div",[["class","container container-slider"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,1,"div",[["class","slide-logo"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,0,"img",[["src","assets/image/logo01.png"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,16,"div",[["class","carousel slide"],["data-ride","carousel"],["id","myCarousel"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,3,"ol",[["class","carousel-indicators"]],null,null,null,null,null)),(l()(),e["\u0275eld"](9,0,null,null,0,"li",[["class","active"],["data-slide-to","0"],["data-target","#myCarousel"]],null,null,null,null,null)),(l()(),e["\u0275eld"](10,0,null,null,0,"li",[["data-slide-to","1"],["data-target","#myCarousel"]],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,0,"li",[["data-slide-to","2"],["data-target","#myCarousel"]],null,null,null,null,null)),(l()(),e["\u0275eld"](12,0,null,null,3,"div",[["class","carousel-inner"]],null,null,null,null,null)),(l()(),e["\u0275eld"](13,0,null,null,0,"div",[["class","item slide01 active"]],null,null,null,null,null)),(l()(),e["\u0275eld"](14,0,null,null,0,"div",[["class","item slide02"]],null,null,null,null,null)),(l()(),e["\u0275eld"](15,0,null,null,0,"div",[["class","item slide03"]],null,null,null,null,null)),(l()(),e["\u0275eld"](16,0,null,null,3,"a",[["class","left carousel-control"],["data-slide","prev"],["href","#myCarousel"]],null,null,null,null,null)),(l()(),e["\u0275eld"](17,0,null,null,0,"span",[["class","glyphicon glyphicon-chevron-left"]],null,null,null,null,null)),(l()(),e["\u0275eld"](18,0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Previous"])),(l()(),e["\u0275eld"](20,0,null,null,3,"a",[["class","right carousel-control"],["data-slide","next"],["href","#myCarousel"]],null,null,null,null,null)),(l()(),e["\u0275eld"](21,0,null,null,0,"span",[["class","glyphicon glyphicon-chevron-right"]],null,null,null,null,null)),(l()(),e["\u0275eld"](22,0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Next"])),(l()(),e["\u0275eld"](24,0,null,null,52,"div",[["class","get-the-app"]],null,null,null,null,null)),(l()(),e["\u0275eld"](25,0,null,null,46,"div",[["class","login"]],null,null,null,null,null)),(l()(),e["\u0275eld"](26,0,null,null,0,"div",[["class","outer-circle01"]],null,null,null,null,null)),(l()(),e["\u0275eld"](27,0,null,null,0,"div",[["class","outer-circle03"]],null,null,null,null,null)),(l()(),e["\u0275eld"](28,0,null,null,0,"div",[["class","outer-circle04"]],null,null,null,null,null)),(l()(),e["\u0275eld"](29,0,null,null,1,"div",[["class","logo text-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](30,0,null,null,0,"img",[["src","assets/image/logo01.png"]],null,null,null,null,null)),(l()(),e["\u0275eld"](31,0,null,null,1,"h3",[["class","text-center"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Reset Password"])),(l()(),e["\u0275eld"](33,0,null,null,32,"form",[["aria-autocomplete","none"],["autocomplete","off"],["name","resetPasswordForm"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,t){var o=!0,u=l.component;return"submit"===n&&(o=!1!==e["\u0275nov"](l,35).onSubmit(t)&&o),"reset"===n&&(o=!1!==e["\u0275nov"](l,35).onReset()&&o),"submit"===n&&(o=!1!==u.onResetSubmit()&&o),o},null,null)),e["\u0275did"](34,16384,null,0,o["\u0275angular_packages_forms_forms_z"],[],null,null),e["\u0275did"](35,540672,null,0,o.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},null),e["\u0275prd"](2048,null,o.ControlContainer,null,[o.FormGroupDirective]),e["\u0275did"](37,16384,null,0,o.NgControlStatusGroup,[[4,o.ControlContainer]],null,null),(l()(),e["\u0275eld"](38,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](39,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Password"])),(l()(),e["\u0275eld"](41,0,null,null,7,"input",[["formControlName","password"],["name","password"],["required","required"],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,t){var o=!0;return"input"===n&&(o=!1!==e["\u0275nov"](l,42)._handleInput(t.target.value)&&o),"blur"===n&&(o=!1!==e["\u0275nov"](l,42).onTouched()&&o),"compositionstart"===n&&(o=!1!==e["\u0275nov"](l,42)._compositionStart()&&o),"compositionend"===n&&(o=!1!==e["\u0275nov"](l,42)._compositionEnd(t.target.value)&&o),o},null,null)),e["\u0275did"](42,16384,null,0,o.DefaultValueAccessor,[e.Renderer2,e.ElementRef,[2,o.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275did"](43,16384,null,0,o.RequiredValidator,[],{required:[0,"required"]},null),e["\u0275prd"](1024,null,o.NG_VALIDATORS,function(l){return[l]},[o.RequiredValidator]),e["\u0275prd"](1024,null,o.NG_VALUE_ACCESSOR,function(l){return[l]},[o.DefaultValueAccessor]),e["\u0275did"](46,671744,null,0,o.FormControlName,[[3,o.ControlContainer],[6,o.NG_VALIDATORS],[8,null],[6,o.NG_VALUE_ACCESSOR],[2,o["\u0275angular_packages_forms_forms_q"]]],{name:[0,"name"]},null),e["\u0275prd"](2048,null,o.NgControl,null,[o.FormControlName]),e["\u0275did"](48,16384,null,0,o.NgControlStatus,[[4,o.NgControl]],null,null),(l()(),e["\u0275and"](16777216,null,null,1,null,v)),e["\u0275did"](50,16384,null,0,g.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](51,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](52,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Confirm Password"])),(l()(),e["\u0275eld"](54,0,null,null,7,"input",[["formControlName","passwordConfirm"],["name","passwordConfirm"],["onKeyDown","if(event.keyCode === 32) return false;"],["required","required"],["type","Password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,t){var o=!0;return"input"===n&&(o=!1!==e["\u0275nov"](l,55)._handleInput(t.target.value)&&o),"blur"===n&&(o=!1!==e["\u0275nov"](l,55).onTouched()&&o),"compositionstart"===n&&(o=!1!==e["\u0275nov"](l,55)._compositionStart()&&o),"compositionend"===n&&(o=!1!==e["\u0275nov"](l,55)._compositionEnd(t.target.value)&&o),o},null,null)),e["\u0275did"](55,16384,null,0,o.DefaultValueAccessor,[e.Renderer2,e.ElementRef,[2,o.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275did"](56,16384,null,0,o.RequiredValidator,[],{required:[0,"required"]},null),e["\u0275prd"](1024,null,o.NG_VALIDATORS,function(l){return[l]},[o.RequiredValidator]),e["\u0275prd"](1024,null,o.NG_VALUE_ACCESSOR,function(l){return[l]},[o.DefaultValueAccessor]),e["\u0275did"](59,671744,null,0,o.FormControlName,[[3,o.ControlContainer],[6,o.NG_VALIDATORS],[8,null],[6,o.NG_VALUE_ACCESSOR],[2,o["\u0275angular_packages_forms_forms_q"]]],{name:[0,"name"]},null),e["\u0275prd"](2048,null,o.NgControl,null,[o.FormControlName]),e["\u0275did"](61,16384,null,0,o.NgControlStatus,[[4,o.NgControl]],null,null),(l()(),e["\u0275and"](16777216,null,null,1,null,b)),e["\u0275did"](63,16384,null,0,g.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](64,0,null,null,1,"button",[["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Submit"])),(l()(),e["\u0275eld"](66,0,null,null,5,"div",[["class","create-link text-center"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Continue "])),(l()(),e["\u0275eld"](68,0,null,null,3,"a",[["style","cursor:pointer"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var o=!0;return"click"===n&&(o=!1!==e["\u0275nov"](l,69).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),o},null,null)),e["\u0275did"](69,671744,null,0,p.s,[p.p,p.a,g.LocationStrategy],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](70,1),(l()(),e["\u0275ted"](-1,null,["Log In here."])),(l()(),e["\u0275eld"](72,0,null,null,4,"div",[["class","get-app"]],null,null,null,null,null)),(l()(),e["\u0275eld"](73,0,null,null,1,"a",[["href","javascript: void(0);"]],null,null,null,null,null)),(l()(),e["\u0275eld"](74,0,null,null,0,"img",[["alt","image"],["src","assets/image/google.png"]],null,null,null,null,null)),(l()(),e["\u0275eld"](75,0,null,null,1,"a",[["href","javascript: void(0);"]],null,null,null,null,null)),(l()(),e["\u0275eld"](76,0,null,null,0,"img",[["alt","image"],["src","assets/image/apple.png"]],null,null,null,null,null))],function(l,n){var t=n.component;l(n,35,0,t.resetPasswordForm),l(n,43,0,"required"),l(n,46,0,"password"),l(n,50,0,t.b.password.touched&&t.b.password.errors),l(n,56,0,"required"),l(n,59,0,"passwordConfirm"),l(n,63,0,t.b.passwordConfirm.touched&&t.b.passwordConfirm.errors);var e=l(n,70,0,"/login");l(n,69,0,e)},function(l,n){var t=n.component;l(n,33,0,e["\u0275nov"](n,37).ngClassUntouched,e["\u0275nov"](n,37).ngClassTouched,e["\u0275nov"](n,37).ngClassPristine,e["\u0275nov"](n,37).ngClassDirty,e["\u0275nov"](n,37).ngClassValid,e["\u0275nov"](n,37).ngClassInvalid,e["\u0275nov"](n,37).ngClassPending),l(n,41,0,e["\u0275nov"](n,43).required?"":null,e["\u0275nov"](n,48).ngClassUntouched,e["\u0275nov"](n,48).ngClassTouched,e["\u0275nov"](n,48).ngClassPristine,e["\u0275nov"](n,48).ngClassDirty,e["\u0275nov"](n,48).ngClassValid,e["\u0275nov"](n,48).ngClassInvalid,e["\u0275nov"](n,48).ngClassPending),l(n,54,0,e["\u0275nov"](n,56).required?"":null,e["\u0275nov"](n,61).ngClassUntouched,e["\u0275nov"](n,61).ngClassTouched,e["\u0275nov"](n,61).ngClassPristine,e["\u0275nov"](n,61).ngClassDirty,e["\u0275nov"](n,61).ngClassValid,e["\u0275nov"](n,61).ngClassInvalid,e["\u0275nov"](n,61).ngClassPending),l(n,64,0,t.resetPasswordForm.invalid),l(n,68,0,e["\u0275nov"](n,69).target,e["\u0275nov"](n,69).href)})}function O(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-reset-pass",[],null,null,null,x,f)),e["\u0275did"](1,245760,null,0,a,[o.FormBuilder,m.b,p.p,p.a,s.a],null,null)],function(l,n){l(n,1,0)},null)}var M=e["\u0275ccf"]("app-reset-pass",a,O,{},{},[]);t.d(n,"ResetModuleNgFactory",function(){return y});var y=e["\u0275cmf"](d,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,M]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,g.NgLocalization,g.NgLocaleLocalization,[e.LOCALE_ID,[2,g["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,o["\u0275angular_packages_forms_forms_o"],o["\u0275angular_packages_forms_forms_o"],[]),e["\u0275mpd"](4608,o.FormBuilder,o.FormBuilder,[]),e["\u0275mpd"](1073742336,g.CommonModule,g.CommonModule,[]),e["\u0275mpd"](1073742336,o["\u0275angular_packages_forms_forms_d"],o["\u0275angular_packages_forms_forms_d"],[]),e["\u0275mpd"](1073742336,o.FormsModule,o.FormsModule,[]),e["\u0275mpd"](1073742336,o.ReactiveFormsModule,o.ReactiveFormsModule,[]),e["\u0275mpd"](1073742336,p.t,p.t,[[2,p.y],[2,p.p]]),e["\u0275mpd"](1073742336,d,d,[]),e["\u0275mpd"](1024,p.j,function(){return[[{path:"",component:a}]]},[])])})}}]);