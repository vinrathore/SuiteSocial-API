(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{M4Ws:function(t,e,a){"use strict";a.r(e);var r=a("8Y7J"),i=a("s7LF"),o=a("9tJP"),l=a("EFyh"),s=a("Mzyq");class n{constructor(t,e,a,r,o){this.router=t,this.dialog=e,this.loginService=a,this.formBuilder=r,this.influencerService=o,this.opts=["Beauty","Food","Fashion","Kids","Travel","Sports/Fitness","Health/Wellness","Pets","Travel (Including Hotel)","Families","Others"],this.ages=["below 20","20-30","30-40","40 and above"],this.platforms=["Youtube","Instagram","Facebook","Twitter","Blog"],this.coms=["Phone Call","Email"],this.gender=["Male","Female","Not Specified"],this.options=["Beauty","Food","Fashion","Kids","Travel","Sports/Fitness","Health/Wellness","Pets","Travel (Including Hotel)","Families","Cars","CPG","Leisure","Others"],this.countries=["Select","US"],this.cities=["Select","City 1","City 2","City 3","City 4"],this.wills=["Yes","No"],this.typeTravel=["Family","Romance","Adventure","Solo","Experiential"],this.rooms=["Double","Queen","King"],this.range=["Select","< 2k","2k - 5k","5k - 10k","10k - 20k","20k - 100k","> 100k"],this.foods=["Asian food","\xa0American food","\xa0European food","\xa0Vegetarian\xa0","Desert","Coffee","Tea","Others, Please specify here"],this.checkRoute="",this.parent=this.router.url.split("/"),this.checkRoute=this.parent[this.parent.length-1],console.log("chekc",this.parent,this.checkRoute),this.qty=[],this.newPlat=[],this.years=[],this.plat=[],this.platFollowers=[],this.topic=[],this.ageBrack=[],this.travelTypes=[],this.foodTypes=[],this.year=2019,this.see=1990;for(var l=this.year-1990,s=0;s<=l;s++)console.log(this.see,s),this.years.push(this.see+s);this.years.unshift("Select"),console.log(this.years);const n=new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);this.influencerSurveyForm=this.formBuilder.group({name:["",i.Validators.required],email:["",[i.Validators.required,i.Validators.pattern(n)]],mobile:["",i.Validators.required],year:["",i.Validators.required],gender:["",i.Validators.required],country:["",i.Validators.required],city:["",i.Validators.required],malePer:["",i.Validators.required],femalePer:["",i.Validators.required],otherPer:["",i.Validators.required],kids:["",i.Validators.required],kidsAges:[""],dogs:["",i.Validators.required],cats:["",i.Validators.required],otherAnimal:["",i.Validators.required],will:["",i.Validators.required],room:["",i.Validators.required],brandWork:["",i.Validators.required],brandNoWork:["",i.Validators.required],bio:["",i.Validators.required],favBrand:["",i.Validators.required]});var d=localStorage.getItem("survey");this.some="true"==d&&d,console.log("here",d,this.some)}ngOnInit(){0==this.some&&(console.log("here"),"InfluencerDash"!=this.checkRoute&&this.openDialogue())}get b(){return this.influencerSurveyForm.controls}travel(){console.log("geyg")}logout(){this.loginService.logout()}openDialogue(){0==this.some&&this.dialog.open(s.a,{height:"550px",width:"700px",disableClose:!0,data:{type:"survey"}}).afterClosed().subscribe(t=>{})}close(){this.some=!0}addPlat(t,e,a){console.log("cgvn",t,e,a),this.qty[e]=1,1==t.target.checked?(this.newPlat.push(a),this.plat.push(e)):(this.plat.splice(e,1),this.newPlat.splice(e,1)),console.log(this.plat,this.newPlat)}addPlatNo(t,e){console.log("ijkm",t.target.value,"vh",e);var a=this.plat.findIndex(t=>t==e);-1!=a?this.platFollowers[a]=t.target.value:console.log("no index found"),console.log(a,this.plat,this.platFollowers)}topics(t,e,a){console.log("fyghj",e,t),1==t.target.checked?this.topic.push(e):this.topic.splice(a,1),console.log(this.topic,this.topic.toString())}fages(t,e,a){console.log("fyghj",e,"gg",t,"ss",a),1==t.target.checked?this.ageBrack.push(e):this.ageBrack.splice(a,1),console.log(this.ageBrack)}travelType(t,e,a){console.log("fyghj",e,"gg",t,"ss",a),1==t.target.checked?this.travelTypes.push(e):this.travelTypes.splice(a,1),console.log(this.travelTypes)}foodType(t,e,a){console.log("fyghj",e,"gg",t,"ss",a),1==t.target.checked?this.foodTypes.push(e):this.foodTypes.splice(a,1),console.log(this.foodTypes)}_keyPressDec(t){let e=String.fromCharCode(t.charCode);/^[0-9]*\.?\d{0,2}$/.test(e)||t.preventDefault()}_keyPressDec2(t){console.log(t,"here",this.influencerSurveyForm.value.malePer,"ok",this.influencerSurveyForm);let e=String.fromCharCode(t.charCode);/^[0-9]*\.?\d{0,2}$/.test(e)||t.preventDefault(),this.formPer=t.target.value<0||t.target.value>100}}class d{}var c=a("pMnS"),m=a("lzlj"),h=a("igqZ"),u=a("iInd"),p=a("s6ns"),g=r["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function f(t){return r["\u0275vid"](0,[(t()(),r["\u0275eld"](0,0,null,null,2,"mat-card",[["class","mat-card"]],null,null,null,m.d,m.a)),r["\u0275did"](1,49152,null,0,h.a,[],null,null),(t()(),r["\u0275ted"](-1,0,[" Welcome to Influencer Dashboard\n"]))],null,null)}function y(t){return r["\u0275vid"](0,[(t()(),r["\u0275eld"](0,0,null,null,1,"app-infl-dashboard",[],null,null,null,f,g)),r["\u0275did"](1,114688,null,0,n,[u.p,p.e,l.a,i.FormBuilder,o.a],null,null)],function(t,e){t(e,1,0)},null)}var v=r["\u0275ccf"]("app-infl-dashboard",n,y,{},{},[]),x=a("SVse"),b=a("IP0z"),k=a("Xd0L"),F=a("cUpR");a.d(e,"InfluencerDashBoardModuleNgFactory",function(){return w});var w=r["\u0275cmf"](d,[],function(t){return r["\u0275mod"]([r["\u0275mpd"](512,r.ComponentFactoryResolver,r["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,v]],[3,r.ComponentFactoryResolver],r.NgModuleRef]),r["\u0275mpd"](4608,x.NgLocalization,x.NgLocaleLocalization,[r.LOCALE_ID,[2,x["\u0275angular_packages_common_common_a"]]]),r["\u0275mpd"](4608,i["\u0275angular_packages_forms_forms_o"],i["\u0275angular_packages_forms_forms_o"],[]),r["\u0275mpd"](4608,i.FormBuilder,i.FormBuilder,[]),r["\u0275mpd"](1073742336,x.CommonModule,x.CommonModule,[]),r["\u0275mpd"](1073742336,u.t,u.t,[[2,u.y],[2,u.p]]),r["\u0275mpd"](1073742336,i["\u0275angular_packages_forms_forms_d"],i["\u0275angular_packages_forms_forms_d"],[]),r["\u0275mpd"](1073742336,i.FormsModule,i.FormsModule,[]),r["\u0275mpd"](1073742336,i.ReactiveFormsModule,i.ReactiveFormsModule,[]),r["\u0275mpd"](1073742336,b.a,b.a,[]),r["\u0275mpd"](1073742336,k.n,k.n,[[2,k.f],[2,F.f]]),r["\u0275mpd"](1073742336,h.g,h.g,[]),r["\u0275mpd"](1073742336,d,d,[]),r["\u0275mpd"](1024,u.j,function(){return[[{path:"",component:n}]]},[])])})},lzlj:function(t,e,a){"use strict";a.d(e,"a",function(){return i}),a.d(e,"d",function(){return o}),a.d(e,"b",function(){return l}),a.d(e,"c",function(){return s});var r=a("8Y7J"),i=(a("igqZ"),a("IP0z"),a("Xd0L"),a("cUpR"),r["\u0275crt"]({encapsulation:2,styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:16px;border-radius:4px}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}@media (-ms-high-contrast:active){.mat-card{outline:solid 1px}}.mat-card-actions,.mat-card-content,.mat-card-subtitle{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media (max-width:599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card-content>:first-child,.mat-card>:first-child{margin-top:0}.mat-card-content>:last-child:not(.mat-card-footer),.mat-card>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child{margin-left:0;margin-right:0}.mat-card-subtitle:not(:first-child),.mat-card-title:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],data:{}}));function o(t){return r["\u0275vid"](2,[r["\u0275ncd"](null,0),r["\u0275ncd"](null,1)],null,null)}var l=r["\u0275crt"]({encapsulation:2,styles:[],data:{}});function s(t){return r["\u0275vid"](2,[r["\u0275ncd"](null,0),(t()(),r["\u0275eld"](1,0,null,null,1,"div",[["class","mat-card-header-text"]],null,null,null,null,null)),r["\u0275ncd"](null,1),r["\u0275ncd"](null,2)],null,null)}}}]);