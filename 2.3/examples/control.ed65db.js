!function(e){function n(n){for(var t,u,l=n[0],i=n[1],c=n[2],s=0,f=[];s<l.length;s++)u=l[s],o[u]&&f.push(o[u][0]),o[u]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);for(p&&p(n);f.length;)f.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,n=0;n<a.length;n++){for(var r=a[n],t=!0,l=1;l<r.length;l++){var i=r[l];0!==o[i]&&(t=!1)}t&&(a.splice(n--,1),e=u(u.s=r[0]))}return e}var t={},o={35:0},a=[];function u(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=t,u.d=function(e,n,r){u.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},u.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},u.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=n,l=l.slice();for(var c=0;c<l.length;c++)n(l[c]);var p=i;a.push([401,0]),r()}({400:function(e,n,r){"use strict";r.r(n);r(497);var t=r(17),o=r(230),a=r(43),u=r(53),l=r(459),i=r(36),c=r(57),p={};p.module=angular.module("app",["gettext",t.a.name,o.a.name]),p.MainController=function(){this.map=new a.a({layers:[new i.a({source:new c.b})],view:new u.a({center:[0,0],zoom:4})}),this.control=new l.a({className:"mouse-position"})},p.module.controller("MainController",p.MainController),n.default=p},401:function(e,n,r){r(40),r(39),e.exports=r(400)},497:function(e,n){}});
//# sourceMappingURL=control.ed65db.js.map