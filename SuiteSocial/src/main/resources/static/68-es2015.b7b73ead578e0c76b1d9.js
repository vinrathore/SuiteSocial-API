(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{YBqL:function(n,l,t){"use strict";t.r(l);var o=t("8Y7J"),e=t("EFyh");class u{constructor(n,l){this.signServe=n,this.route=l;const t=l.url.split(/[\s\/]+/);console.log(t[2]),this.socialLoginType=t[2]}ngOnInit(){}ngAfterViewInit(){}}class a{}var r=t("pMnS"),c=t("SVse"),i=t("iInd"),g=o["\u0275crt"]({encapsulation:0,styles:[[".sclPge[_ngcontent-%COMP%]{display:flex;justify-content:center}.button[_ngcontent-%COMP%]{background-color:#00f;border:none;color:#fff;padding:15px 18px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:4px 2px;cursor:pointer;transition-duration:.4s}.button2[_ngcontent-%COMP%]:hover{box-shadow:0 12px 16px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19)}.hmpge[_ngcontent-%COMP%]{display:flex;justify-content:center}.socialError[_ngcontent-%COMP%]{display:flex;text-align:center;align-items:center;justify-content:center;flex-direction:column;padding:50px 10px}.socialError[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:42px;line-height:42px;margin-bottom:20px;color:#242420}.socialError[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:26px;line-height:26px;margin-bottom:20px;color:grey}.socialError[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:300px;margin-bottom:50px}.buton[_ngcontent-%COMP%]{background:0 0;border:none;font-size:20px}.socialError[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .fa-facebook[_ngcontent-%COMP%]{background:#3a559f}.socialError[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .fa-google[_ngcontent-%COMP%]{background:#cc3731}.socialError[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .fa-twitter[_ngcontent-%COMP%]{background:#39a9f3}.socialError[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .fa-instagram[_ngcontent-%COMP%]{background:#ac4259}.socialError[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .fa-youtube[_ngcontent-%COMP%]{background:#cc181e}.socialError[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{height:100px;line-height:100px;width:100px;text-align:center;font-size:60px;color:#fff;border-radius:50%;transition:all .2s;-webkit-transform:scale(1);transform:scale(1);margin-bottom:20px}.login-form[_ngcontent-%COMP%]{justify-content:center!important}.invalid-feedback[_ngcontent-%COMP%]{font-weight:700;color:red}.toast-center-center[_ngcontent-%COMP%]{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.toast-top-center[_ngcontent-%COMP%]{top:0;right:0;width:100%}.toast-bottom-center[_ngcontent-%COMP%]{bottom:0;right:0;width:100%;font-weight:700}.toast-top-full-width[_ngcontent-%COMP%]{top:0;right:0;width:100%}.toast-bottom-full-width[_ngcontent-%COMP%]{bottom:0;right:0;width:100%}.toast-top-left[_ngcontent-%COMP%]{top:12px;left:12px}.toast-top-right[_ngcontent-%COMP%]{top:12px;right:12px}.toast-bottom-right[_ngcontent-%COMP%]{right:12px;bottom:12px}.toast-bottom-left[_ngcontent-%COMP%]{bottom:12px;left:12px}.toast-title[_ngcontent-%COMP%]{font-weight:700}.toast-message[_ngcontent-%COMP%]{word-wrap:break-word}.toast-message[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .toast-message[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#fff}.toast-message[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ccc;text-decoration:none}.toast-close-button[_ngcontent-%COMP%]{position:relative;right:-.3em;top:-.3em;float:right;font-size:20px;font-weight:700;color:#fff;text-shadow:0 1px 0 #fff}.toast-close-button[_ngcontent-%COMP%]:focus, .toast-close-button[_ngcontent-%COMP%]:hover{color:#000;text-decoration:none;cursor:pointer;opacity:.4}button.toast-close-button[_ngcontent-%COMP%]{padding:0;cursor:pointer;background:0 0;border:0}.toast-container[_ngcontent-%COMP%]{pointer-events:none;position:fixed;z-index:999999}.toast-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{box-sizing:border-box}.toast-container[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%]{position:relative;overflow:hidden;margin:0 0 6px;padding:15px 15px 15px 50px;width:300px;border-radius:3px;background-position:15px center;background-repeat:no-repeat;background-size:24px;box-shadow:0 0 12px #999;color:#fff}.toast-container[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%]:hover{box-shadow:0 0 12px #000;opacity:1;cursor:pointer}.toast-container.toast-bottom-center[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%], .toast-container.toast-top-center[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%]{width:300px;margin-left:auto;margin-right:auto}.toast-container.toast-bottom-full-width[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%], .toast-container.toast-top-full-width[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%]{width:96%;margin-left:auto;margin-right:auto}.ngx-toastr[_ngcontent-%COMP%]{background-color:#030303;pointer-events:auto}.toast-error[_ngcontent-%COMP%], .toast-info[_ngcontent-%COMP%], .toast-success[_ngcontent-%COMP%], .toast-warning[_ngcontent-%COMP%]{background-color:#ea3441!important}.toast-progress[_ngcontent-%COMP%]{position:absolute;left:0;bottom:0;height:4px;background-color:#000;opacity:.4}@media all and (max-width:240px){.toast-container[_ngcontent-%COMP%]   .ngx-toastr.div[_ngcontent-%COMP%]{padding:8px 8px 8px 50px;width:11em}.toast-container[_ngcontent-%COMP%]   .toast-close-button[_ngcontent-%COMP%]{right:-.2em;top:-.2em}}@media all and (min-width:241px) and (max-width:480px){.toast-container[_ngcontent-%COMP%]   .ngx-toastr.div[_ngcontent-%COMP%]{padding:8px 8px 8px 50px;width:18em}.toast-container[_ngcontent-%COMP%]   .toast-close-button[_ngcontent-%COMP%]{right:-.2em;top:-.2em}}@media all and (min-width:481px) and (max-width:768px){.toast-container[_ngcontent-%COMP%]   .ngx-toastr.div[_ngcontent-%COMP%]{padding:15px 15px 15px 50px;width:25em}}"]],data:{}});function s(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,3,"h2",[],null,null,null,null,null)),(n()(),o["\u0275eld"](1,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o["\u0275eld"](2,0,null,null,0,"i",[["class","fa fa-facebook"]],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,[" Facebook "]))],null,null)}function d(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,3,"h2",[],null,null,null,null,null)),(n()(),o["\u0275eld"](1,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o["\u0275eld"](2,0,null,null,0,"i",[["class","fa fa-google"]],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,[" Google "]))],null,null)}function p(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,3,"h2",[],null,null,null,null,null)),(n()(),o["\u0275eld"](1,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o["\u0275eld"](2,0,null,null,0,"i",[["class","fa fa-instagram"]],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,[" Instagram "]))],null,null)}function f(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,3,"h2",[],null,null,null,null,null)),(n()(),o["\u0275eld"](1,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o["\u0275eld"](2,0,null,null,0,"i",[["class","fa fa-twitter"]],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,[" Twitter "]))],null,null)}function m(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,3,"h2",[],null,null,null,null,null)),(n()(),o["\u0275eld"](1,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o["\u0275eld"](2,0,null,null,0,"i",[["class","fa fa-youtube"]],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,[" Youtube "]))],null,null)}function _(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,24,"div",[["id","wrapper"]],null,null,null,null,null)),(n()(),o["\u0275eld"](1,0,null,null,23,"div",[["class","login-form"]],null,null,null,null,null)),(n()(),o["\u0275eld"](2,0,null,null,22,"div",[["class","get-the-app"]],null,null,null,null,null)),(n()(),o["\u0275eld"](3,0,null,null,21,"div",[["class","login"]],null,null,null,null,null)),(n()(),o["\u0275eld"](4,0,null,null,0,"div",[["class","outer-circle01"]],null,null,null,null,null)),(n()(),o["\u0275eld"](5,0,null,null,0,"div",[["class","outer-circle03"]],null,null,null,null,null)),(n()(),o["\u0275eld"](6,0,null,null,0,"div",[["class","outer-circle04"]],null,null,null,null,null)),(n()(),o["\u0275eld"](7,0,null,null,17,"div",[["class","socialError"]],null,null,null,null,null)),(n()(),o["\u0275eld"](8,0,null,null,0,"img",[["src","assets/image/logo01.png"]],null,null,null,null,null)),(n()(),o["\u0275and"](16777216,null,null,1,null,s)),o["\u0275did"](10,16384,null,0,c.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),o["\u0275and"](16777216,null,null,1,null,d)),o["\u0275did"](12,16384,null,0,c.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),o["\u0275and"](16777216,null,null,1,null,p)),o["\u0275did"](14,16384,null,0,c.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),o["\u0275and"](16777216,null,null,1,null,f)),o["\u0275did"](16,16384,null,0,c.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),o["\u0275and"](16777216,null,null,1,null,m)),o["\u0275did"](18,16384,null,0,c.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),o["\u0275eld"](19,0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["Under Development"])),(n()(),o["\u0275eld"](21,0,null,null,3,"button",[["class","buton"],["routerLink","/login"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==o["\u0275nov"](n,22).onClick()&&e),e},null,null)),o["\u0275did"](22,16384,null,0,i.q,[i.p,i.a,[8,null],o.Renderer2,o.ElementRef],{routerLink:[0,"routerLink"]},null),(n()(),o["\u0275eld"](23,0,null,null,0,"i",[["class","fa fa-arrow-left"]],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,[" Back To Login "]))],function(n,l){var t=l.component;n(l,10,0,"facebook"==t.socialLoginType),n(l,12,0,"google"==t.socialLoginType),n(l,14,0,"instagram"==t.socialLoginType),n(l,16,0,"twitter"==t.socialLoginType),n(l,18,0,"youtube"==t.socialLoginType),n(l,22,0,"/login")},null)}function C(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"app-social-page",[],null,null,null,_,g)),o["\u0275did"](1,4308992,null,0,u,[e.a,i.p],null,null)],function(n,l){n(l,1,0)},null)}var M=o["\u0275ccf"]("app-social-page",u,C,{},{},[]),x=t("s7LF");t.d(l,"SocialPageModuleNgFactory",function(){return O});var O=o["\u0275cmf"](a,[],function(n){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,M]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,c.NgLocalization,c.NgLocaleLocalization,[o.LOCALE_ID,[2,c["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,x["\u0275angular_packages_forms_forms_o"],x["\u0275angular_packages_forms_forms_o"],[]),o["\u0275mpd"](4608,x.FormBuilder,x.FormBuilder,[]),o["\u0275mpd"](1073742336,c.CommonModule,c.CommonModule,[]),o["\u0275mpd"](1073742336,i.t,i.t,[[2,i.y],[2,i.p]]),o["\u0275mpd"](1073742336,x["\u0275angular_packages_forms_forms_d"],x["\u0275angular_packages_forms_forms_d"],[]),o["\u0275mpd"](1073742336,x.FormsModule,x.FormsModule,[]),o["\u0275mpd"](1073742336,x.ReactiveFormsModule,x.ReactiveFormsModule,[]),o["\u0275mpd"](1073742336,a,a,[]),o["\u0275mpd"](1024,i.j,function(){return[[{path:"",component:u}]]},[])])})}}]);