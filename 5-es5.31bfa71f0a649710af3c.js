!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function e(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"99Un":function(t,r,c){"use strict";c.r(r),c.d(r,"HomeModule",(function(){return C}));var a,i,o=c("8Y7J"),p=c("SVse"),s=c("iInd"),u=c("LRne"),f=c("lJxs"),d=c("JIr8"),b=c("IheW"),l=((i=function(){function t(e){n(this,t),this.http=e,this.url="/assets/papers/papers.json"}return e(t,[{key:"getAll",value:function(){var n=(new Date).getTime();return this.http.get("".concat(this.url,"?t=").concat(n)).pipe(Object(f.a)((function(n){return n.papers})),Object(d.a)((function(){return Object(u.a)([])})))}}]),t}()).\u0275fac=function(n){return new(n||i)(o.Zb(b.a))},i.\u0275prov=o.Ob({token:i,factory:i.\u0275fac}),i),g=((a=function(){function t(){n(this,t)}return e(t,[{key:"ngOnInit",value:function(){this.data.desc=this.truncStr(this.data.desc,180)}},{key:"truncStr",value:function(n,t){return n.length<=t?n:n.slice(0,t)+"..."}}]),t}()).\u0275fac=function(n){return new(n||a)},a.\u0275cmp=o.Mb({type:a,selectors:[["app-card-paper"]],inputs:{data:"data"},decls:10,vars:3,consts:[[1,"card-paper"],[1,"paper-title"],[1,"paper-desc"],[1,"paper-link"],["target","_blank",3,"href"]],template:function(n,t){1&n&&(o.Xb(0,"div",0),o.Xb(1,"div",1),o.Xb(2,"h3"),o.jc(3),o.Wb(),o.Wb(),o.Xb(4,"div",2),o.Xb(5,"p"),o.jc(6),o.Wb(),o.Wb(),o.Xb(7,"div",3),o.Xb(8,"a",4),o.jc(9,"Ver"),o.Wb(),o.Wb(),o.Wb()),2&n&&(o.Jb(3),o.kc(t.data.title),o.Jb(3),o.kc(t.data.desc),o.Jb(2),o.ec("href",t.data.url,o.gc))},styles:["[_nghost-%COMP%]{height:100%}.card-paper[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex;flex-direction:column}.card-paper[_ngcontent-%COMP%]{flex-grow:1;background-color:#fff;border:1px solid #bdbdbd;padding:.5rem 1rem;margin:.25rem 0;width:100%}.card-paper[_ngcontent-%COMP%]   .paper-title[_ngcontent-%COMP%]{margin-bottom:.5rem}.card-paper[_ngcontent-%COMP%]   .paper-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0}.card-paper[_ngcontent-%COMP%]   .paper-desc[_ngcontent-%COMP%]{flex-grow:1;overflow:hidden;margin:auto 0 1rem;max-height:9rem}.card-paper[_ngcontent-%COMP%]   .paper-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.card-paper[_ngcontent-%COMP%]   .paper-link[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;width:100%}.card-paper[_ngcontent-%COMP%]   .paper-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-transform:uppercase}"]}),a);function h(n,t){if(1&n&&(o.Vb(0),o.Xb(1,"div",3),o.Tb(2,"app-card-paper",4),o.Wb(),o.Ub()),2&n){var e=t.$implicit;o.Jb(2),o.ec("data",e)}}var m,v,O,w,P=[{path:"",component:(m=function(){function t(e){n(this,t),this.paperService=e}return e(t,[{key:"ngAfterViewInit",value:function(){var n=this;this.paperService.getAll().subscribe((function(t){n.papers=t}))}}]),t}(),m.\u0275fac=function(n){return new(n||m)(o.Sb(l))},m.\u0275cmp=o.Mb({type:m,selectors:[["app-home"]],decls:3,vars:1,consts:[[1,"container"],[1,"row"],[4,"ngFor","ngForOf"],[1,"col-12","col-sm-6","col-lg-4"],[3,"data"]],template:function(n,t){1&n&&(o.Xb(0,"div",0),o.Xb(1,"div",1),o.ic(2,h,3,1,"ng-container",2),o.Wb(),o.Wb()),2&n&&(o.Jb(2),o.ec("ngForOf",t.papers))},directives:[p.h,g],styles:[""]}),m)}],y=((w=function t(){n(this,t)}).\u0275mod=o.Qb({type:w}),w.\u0275inj=o.Pb({factory:function(n){return new(n||w)},imports:[[s.a.forChild(P)],s.a]}),w),M=((O=function t(){n(this,t)}).\u0275mod=o.Qb({type:O}),O.\u0275inj=o.Pb({factory:function(n){return new(n||O)},imports:[[p.b]]}),O),C=((v=function t(){n(this,t)}).\u0275mod=o.Qb({type:v}),v.\u0275inj=o.Pb({factory:function(n){return new(n||v)},providers:[l],imports:[[p.b,y,M]]}),v)}}])}();