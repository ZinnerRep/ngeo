webpackJsonp([33],{108:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(80));function r(e){return e&&e.__esModule?e:{default:e}}var u=[4e3,3750,3500,3250,3e3,2750,2500,2250,2e3,1750,1500,1250,1e3,750,650,500,250,100,50,20,10,5,2.5,2,1.5,1,.5],a=new(r(n(115)).default)({extent:[42e4,3e4,9e5,35e4],resolutions:u,matrixIds:u.map(function(e,t){return""+t})}),l=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{attributions:"géodonnées &copy; Etat de Vaud & &copy; contributeurs OpenStreetMap",url:"https://ows{1-4}.asitvd.ch/wmts/1.0.0/{Layer}/default/default/0/21781/{TileMatrix}/{TileRow}/{TileCol}.png",projection:"EPSG:21781",requestEncoding:"REST",layer:e.layer,style:"default",matrixSet:"21781",format:"image/png",tileGrid:a}))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),t}();t.default=l},416:function(e,t,n){n(9),e.exports=n(417)},417:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(418),n(11);var o=f(n(108)),r=f(n(12)),u=f(n(19)),a=f(n(16)),l=f(n(1)),i=f(n(18));function f(e){return e&&e.__esModule?e:{default:e}}var c={};c.module=angular.module("app",[l.default.module.name,i.default.name]),c.MainController=function(){this.map=new r.default({layers:[new a.default({source:new o.default({layer:"asitvd.fond_couleur"})})],view:new u.default({resolutions:[250,100,50,20,10,5,2.5,2,1.5,1,.5],center:[535e3,154e3],zoom:0})})},c.module.controller("MainController",c.MainController),t.default=c},418:function(e,t){}},[416]);
//# sourceMappingURL=asitvd.5820f12d9aeb3e9d04c1.js.map