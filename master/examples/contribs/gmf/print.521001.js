!function(e){function t(t){for(var n,l,u=t[0],i=t[1],c=t[2],m=0,p=[];m<u.length;m++)l=u[m],r[l]&&p.push(r[l][0]),r[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(s&&s(t);p.length;)p.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,u=1;u<o.length;u++){var i=o[u];0!==r[i]&&(n=!1)}n&&(a.splice(t--,1),e=l(l.s=o[0]))}return e}var n={},r={9:0},a=[];function l(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=n,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(o,n,function(t){return e[t]}.bind(null,n));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var s=i;a.push([408,0]),o()}({407:function(e,t,o){"use strict";o.r(t);o(544);var n=o(105),r=o(54),a=o(321),l=o(25),u=o(116),i=o(55),c=o(32),s=o(44),m=o(29),p=o(49),f={};f.module=angular.module("gmfapp",["gettext",n.a.name,r.a.name,a.a.name,l.a.module.name,u.a.name]),f.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.com/2.3/wsgi/themes?version=2&background=background"),f.module.value("gmfPrintUrl","https://geomapfish-demo.camptocamp.com/2.3/wsgi/printproxy"),f.module.value("authenticationBaseUrl","https://geomapfish-demo.camptocamp.com/2.3/wsgi"),f.module.value("gmfLayersUrl","https://geomapfish-demo.camptocamp.com/2.3/wsgi/layers/"),f.module.constant("defaultTheme","Demo"),f.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),f.MainController=function(e,t){var o=this;e.loadThemes(),this.map=new c.a({layers:[new m.a({source:new p.a})],view:new s.a({projection:i.a,resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:3})}),this.defaulPrintFieldstValues={comments:"Default comments example",legend:!0},this.themes=void 0,this.treeSource=void 0,e.getThemesObject().then(function(e){e&&(o.themes=e,o.treeSource=e[3])}),t.init(this.map)},f.MainController.$inject=["gmfThemes","ngeoFeatureOverlayMgr"],f.module.controller("MainController",f.MainController),t.default=f},408:function(e,t,o){o(70),o(69),e.exports=o(407)},544:function(e,t){}});
//# sourceMappingURL=print.521001.js.map