!function(e){function t(t){for(var r,l,u=t[0],i=t[1],c=t[2],p=0,s=[];p<u.length;p++)l=u[p],o[l]&&s.push(o[l][0]),o[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(f&&f(t);s.length;)s.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={28:0},a=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var f=i;a.push([456,0]),n()}({455:function(e,t,n){"use strict";n.r(t);n(567);var r=n(300),o=n(54),a=n(119),l=n(55),u=n(32),i=n(44),c=n(29),f=n(49),p={};p.module=angular.module("gmfapp",["gettext",r.a.name,o.a.name,a.a.name]),p.module.value("gmfRasterUrl","https://geomapfish-demo.camptocamp.com/2.3/wsgi/raster"),p.module.value("gmfContextualdatacontentTemplateUrl","partials/contextualdata.html"),p.module.constant("defaultTheme","Demo"),p.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),p.MainController=function(){this.map=new u.a({layers:[new c.a({source:new f.a})],view:new i.a({projection:l.a,resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[6e5,2e5],zoom:3})})},p.MainController.prototype.onRasterData=function(e,t){return{elelvation_diff:t.srtm-t.aster}},p.module.controller("MainController",p.MainController),t.default=p},456:function(e,t,n){n(70),n(69),e.exports=n(455)},567:function(e,t){}});
//# sourceMappingURL=contextualdata.9fb2da.js.map