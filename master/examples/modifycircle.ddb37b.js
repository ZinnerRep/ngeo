!function(e){function t(t){for(var n,u,i=t[0],l=t[1],c=t[2],f=0,p=[];f<i.length;f++)u=i[f],o[u]&&p.push(o[u][0]),o[u]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(s&&s(t);p.length;)p.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==o[l]&&(n=!1)}n&&(a.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={14:0},a=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var s=l;a.push([353,0]),r()}({352:function(e,t,r){"use strict";r.r(t);r(476);var n=r(59),o=r(261),a=r(19),u=r(26),i=r(18),l=r(43),c=r(32),s=r(36),f=r(140),p=r(30),d=r(33),h=r(16),v=r(23),b={},w=angular.module("app",["gettext",v.a.name]);b.MainController=function(){this.map=new a.a({layers:[new i.a({source:new c.b})],view:new u.a({center:[-10997148,4569099],zoom:4})});var e=this.map,t=new f.a([-10691093,4966327],465e3);this.features=new d.a;var r=new h.a({geometry:Object(p.c)(t),color:"#000000",label:"Circle 1",opacity:"0.5",stroke:"2"});r.set(n.a.IS_CIRCLE,!0),this.features.push(r);var v=new s.a({features:this.features});new l.a({source:v}).setMap(e),this.interaction=new o.a({features:this.features});var b=this.interaction;b.setActive(!0),e.addInteraction(b)},w.controller("MainController",b.MainController),t.default=b},353:function(e,t,r){r(54),r(53),e.exports=r(352)},476:function(e,t){}});
//# sourceMappingURL=modifycircle.ddb37b.js.map