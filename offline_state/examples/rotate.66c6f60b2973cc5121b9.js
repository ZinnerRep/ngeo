webpackJsonp([14],{5:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),r=o(6);const n=function(e){const t=e||{};let o;o=void 0!==t.attributions?t.attributions:[n.ATTRIBUTION];const i=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",a=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";r.a.call(this,{attributions:o,cacheSize:t.cacheSize,crossOrigin:i,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:a,wrapX:t.wrapX})};Object(i.inherits)(n,r.a),n.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',t.default=n},537:function(e,t,o){o(9),e.exports=o(538)},538:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o(539),o(11);var i=y(o(300)),r=y(o(30)),n=y(o(17)),a=y(o(12)),l=y(o(19)),u=y(o(16)),c=y(o(29)),s=y(o(5)),d=y(o(27)),f=y(o(118)),p=y(o(43)),h=y(o(25)),m=y(o(42)),w=y(o(61)),v=y(o(23)),g=y(o(1)),x=y(o(18));function y(e){return e&&e.__esModule?e:{default:e}}var j={};j.module=angular.module("app",[g.default.module.name,x.default.name]);var O=angular.module("app",["ngeo"]);j.MainController=function(){this.map=new a.default({layers:[new u.default({source:new s.default})],view:new l.default({center:[-10997148,4569099],zoom:4})});var e=this.map,t=new v.default([[[-9e6,4e6],[-11e6,4e6],[-11e6,6e6],[-9e6,6e6]]]);this.features=new r.default,this.features.push(new n.default({geometry:t}));var o=new d.default({features:this.features}),g=new c.default({source:o});g.setMap(e);var x,y=((x={}).Polygon=[new h.default({fill:new m.default({color:[255,255,255,.5]})}),new h.default({stroke:new p.default({color:[255,255,255,1],width:5})}),new h.default({stroke:new p.default({color:[0,153,255,1],width:3})})],x.Point=new h.default({image:new w.default,text:new f.default({text:"",font:"normal 18px FontAwesome",fill:new m.default({color:"#ffffff"})})}),x.GeometryCollection=x.Polygon.concat(x.Point),function(e,t){return x[e.getGeometry().getType()]});this.interaction=new i.default({features:this.features,layers:[g],style:y});var j=this.interaction;j.setActive(!1),e.addInteraction(j),e.on("singleclick",function(e){this.map.forEachFeatureAtPixel(e.pixel,function(e){return e})&&this.interaction.setActive(!0)},this)},O.controller("MainController",j.MainController),t.default=j},539:function(e,t){},6:function(e,t,o){"use strict";var i=o(0),r=o(21),n=o(20);const a=function(e){const t=e||{},o=void 0!==t.projection?t.projection:"EPSG:3857",i=void 0!==t.tileGrid?t.tileGrid:n.a.createXYZ({extent:n.a.extentFromProjection(o),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});r.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,opaque:t.opaque,projection:o,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:i,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};Object(i.inherits)(a,r.a),t.a=a}},[537]);
//# sourceMappingURL=rotate.66c6f60b2973cc5121b9.js.map