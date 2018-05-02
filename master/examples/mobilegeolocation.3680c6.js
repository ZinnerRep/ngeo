!function(e){function t(t){for(var i,a,l=t[0],c=t[1],s=t[2],h=0,g=[];h<l.length;h++)a=l[h],n[a]&&g.push(n[a][0]),n[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);for(u&&u(t);g.length;)g.shift()();return r.push.apply(r,s||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],i=!0,l=1;l<o.length;l++){var c=o[l];0!==n[c]&&(i=!1)}i&&(r.splice(t--,1),e=a(a.s=o[0]))}return e}var i={},n={16:0},r=[];function a(t){if(i[t])return i[t].exports;var o=i[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=i,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(o,i,function(t){return e[t]}.bind(null,i));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=c;r.push([356,0]),o()}({319:function(e,t,o){"use strict";o.r(t);o(478);var i=o(19),n=o(26),r=o(18),a=o(32),l=o(71),c=o(15),s=o(37),u=o(38),h=o(23),g=o(2),p=o(175),_=o(211),f=o(72),d=o(3),y=o(16),v=o(244),w=o(28),b=angular.module("ngeoMobileGeolocation",[p.a.module.name,_.a.module.name]);b.GeolocationEventType={ERROR:"mobile-geolocation-error"},b.directive_=function(){return{restrict:"A",scope:{getMobileMapFn:"&ngeoMobileGeolocationMap",getMobileGeolocationOptionsFn:"&ngeoMobileGeolocationOptions"},controller:"ngeoGeolocationMobileController"}},b.directive("ngeoMobileGeolocation",b.directive_),b.Controller_=function(e,t,o,n,r){var a=this;t.on("click",this.toggleTracking.bind(this));var l=e.getMobileMapFn();g.a.assertInstanceof(l,i.a),this.$scope_=e,this.map_=l;var c=e.getMobileGeolocationOptionsFn()||{};g.a.assertObject(c),this.notification_=r,this.featureOverlay_=n.getFeatureOverlay(),this.geolocation_=new v.a({projection:l.getView().getProjection(),trackingOptions:{enableHighAccuracy:!0}}),c.autorotate&&this.autorotateListener(),this.geolocation_.on("error",function(t){this.untrack_();var i=void 0;switch(t.code){case 1:i=o.getString("User denied the request for Geolocation.");break;case 2:i=o.getString("Location information is unavailable.");break;case 3:i=o.getString("The request to get user location timed out.");break;default:i=o.getString("Geolocation: An unknown error occurred.")}this.notification_.error(i),e.$emit(b.GeolocationEventType.ERROR,t)},this),this.positionFeature_=new y.a,c.positionFeatureStyle&&this.positionFeature_.setStyle(c.positionFeatureStyle),this.accuracyFeature_=new y.a,c.accuracyFeatureStyle&&this.accuracyFeature_.setStyle(c.accuracyFeatureStyle),this.zoom_=c.zoom,this.follow_=!1,this.viewChangedByMe_=!1,d.a(this.geolocation_,"change:accuracyGeometry",function(){a.accuracyFeature_.setGeometry(a.geolocation_.getAccuracyGeometry()),a.setPosition_()}),d.a(this.geolocation_,"change:position",function(){a.setPosition_()});var s=l.getView();d.a(s,"change:center",this.handleViewChange_,this),d.a(s,"change:resolution",this.handleViewChange_,this)},b.Controller_.$inject=["$scope","$element","gettextCatalog","ngeoFeatureOverlayMgr","ngeoNotification"],b.Controller_.prototype.toggleTracking=function(){if(this.geolocation_.getTracking()){var e=this.geolocation_.getPosition();if(void 0===e)return this.untrack_(),void this.$scope_.$emit(b.GeolocationEventType.ERROR,null);g.a.assert(void 0!==e);var t=this.map_.getView().getCenter();Math.abs(e[0]-t[0])+Math.abs(e[1]-t[1])<2?this.untrack_():(this.untrack_(),this.track_())}else this.track_()},b.Controller_.prototype.track_=function(){this.featureOverlay_.addFeature(this.positionFeature_),this.featureOverlay_.addFeature(this.accuracyFeature_),this.follow_=!0,this.geolocation_.setTracking(!0)},b.Controller_.prototype.untrack_=function(){this.featureOverlay_.clear(),this.follow_=!1,this.geolocation_.setTracking(!1),this.notification_.clear()},b.Controller_.prototype.setPosition_=function(){var e=this.geolocation_.getPosition(),t=new w.a(e);this.positionFeature_.setGeometry(t);var o=this.accuracyFeature_.getGeometry();if(this.follow_){if(this.viewChangedByMe_=!0,void 0!==this.zoom_)this.map_.getView().setCenter(e),this.map_.getView().setZoom(this.zoom_);else if(o){var i=this.map_.getSize();this.map_.getView().fit(o,i)}this.viewChangedByMe_=!1}},b.Controller_.prototype.handleViewChange_=function(e){this.follow_&&!this.viewChangedByMe_&&(this.follow_=!1)},b.Controller_.prototype.autorotateListener=function(){var e=this,t=0;window.hasOwnProperty("ondeviceorientationabsolute")?window.addEventListener("deviceorientationabsolute",function(o){t=e.handleRotate_(o.alpha,t)},!0):window.hasOwnProperty("ondeviceorientation")?window.addEventListener("deviceorientation",function(o){t=o.webkitCompassHeading?e.handleRotate_(-o.webkitCompassHeading,t):e.handleRotate_(o.alpha-270,t)},!0):console.error("Orientation is not supported on this device")},b.Controller_.prototype.handleRotate_=function(e,t){if(this.geolocation_.getTracking()&&Math.abs(e-t)>.2){var o=(t=e)*Math.PI/180;this.map_.getView().animate({rotation:o,duration:350,easing:f.d})}return t},b.controller("ngeoGeolocationMobileController",b.Controller_);var m=b,M={},C=angular.module("app",["gettext",m.name,h.a.name]);M.MainController=function(e,t){var o=new c.c({image:new l.a({radius:6,fill:new s.a({color:"rgba(230, 100, 100, 1)"}),stroke:new u.a({color:"rgba(230, 40, 40, 1)",width:2})})}),h=new c.c({fill:new s.a({color:"rgba(100, 100, 230, 0.3)"}),stroke:new u.a({color:"rgba(40, 40, 230, 1)",width:2})});this.mobileGeolocationOptions={positionFeatureStyle:o,accuracyFeatureStyle:h,zoom:17,autorotate:!0},this.map=new i.a({layers:[new r.a({source:new a.b})],view:new n.a({center:[0,0],zoom:4})}),t.init(this.map)},M.MainController.$inject=["$scope","ngeoFeatureOverlayMgr"],C.controller("MainController",M.MainController);t.default=M},356:function(e,t,o){o(54),o(53),e.exports=o(319)},478:function(e,t){}});
//# sourceMappingURL=mobilegeolocation.3680c6.js.map