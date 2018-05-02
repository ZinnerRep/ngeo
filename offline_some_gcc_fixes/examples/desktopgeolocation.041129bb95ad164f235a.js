webpackJsonp([5],{148:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(o(3)),n=s(o(1)),r=s(o(84)),a=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}(o(0));function s(t){return t&&t.__esModule?t:{default:t}}var c=function(t){r.default.call(this),this.timeout_=t;var e=angular.element('<div class="ngeo-notification"></div>');angular.element(document.body).append(e),this.container_=e,this.cache_={}};c.$inject=["$timeout"],c.$inject=["$timeout"],a.inherits(c,r.default),c.DEFAULT_DELAY_=7e3,c.prototype.notify=function(t){this.show(t)},c.prototype.clear=function(){for(var t in this.cache_)this.clearMessageByCacheItem_(this.cache_[parseInt(t,10)])},c.prototype.showMessage=function(t){var e=this,o=t.type;i.default.assertString(o,"Type should be set.");var n=["alert","fade"];switch(o){case r.default.Type.ERROR:n.push("alert-danger");break;case r.default.Type.INFORMATION:n.push("alert-info");break;case r.default.Type.SUCCESS:n.push("alert-success");break;case r.default.Type.WARNING:n.push("alert-warning")}var s=angular.element('<div class="'+n.join(" ")+'"></div>');(t.target?angular.element(t.target):this.container_).append(s),s.html(t.msg).addClass("in");var l=void 0!==t.delay?t.delay:c.DEFAULT_DELAY_,u={el:s},p=a.getUid(s);u.promise=this.timeout_(function(){s.alert("close"),delete e.cache_[p]},l),this.cache_[p]=u},c.prototype.clearMessageByCacheItem_=function(t){var e=t.el,o=t.promise,i=a.getUid(e);e.alert("close"),this.timeout_.cancel(o),delete this.cache_[i]},(c.module=angular.module("ngeoNotification",[])).service("ngeoNotification",c),n.default.module.requires.push(c.module.name),e.default=c},221:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(0),n="accuracy",r="accuracyGeometry",a="altitude",s="altitudeAccuracy",c="heading",l="position",u="projection",p="speed",h="tracking",d="trackingOptions",g=o(34),f=o(2),y=o(13),_=o(23),v=o(35),m=o(15),O=o(10);o.d(e,"GeolocationOptions",function(){});const w=function(t){g.default.call(this);const e=t||{};this.position_=null,this.transform_=O.identityTransform,this.watchId_=void 0,f.default.listen(this,g.default.getChangeEventType(u),this.handleProjectionChanged_,this),f.default.listen(this,g.default.getChangeEventType(h),this.handleTrackingChanged_,this),void 0!==e.projection&&this.setProjection(e.projection),void 0!==e.trackingOptions&&this.setTrackingOptions(e.trackingOptions),this.setTracking(void 0!==e.tracking&&e.tracking)};Object(i.inherits)(w,g.default),w.prototype.disposeInternal=function(){this.setTracking(!1),g.default.prototype.disposeInternal.call(this)},w.prototype.handleProjectionChanged_=function(){const t=this.getProjection();t&&(this.transform_=Object(O.getTransformFromProjections)(Object(O.get)("EPSG:4326"),t),this.position_&&this.set(l,this.transform_(this.position_)))},w.prototype.handleTrackingChanged_=function(){if(v.default.GEOLOCATION){const t=this.getTracking();t&&void 0===this.watchId_?this.watchId_=navigator.geolocation.watchPosition(this.positionChange_.bind(this),this.positionError_.bind(this),this.getTrackingOptions()):t||void 0===this.watchId_||(navigator.geolocation.clearWatch(this.watchId_),this.watchId_=void 0)}},w.prototype.positionChange_=function(t){const e=t.coords;this.set(n,e.accuracy),this.set(a,null===e.altitude?void 0:e.altitude),this.set(s,null===e.altitudeAccuracy?void 0:e.altitudeAccuracy),this.set(c,null===e.heading?void 0:Object(m.toRadians)(e.heading)),this.position_?(this.position_[0]=e.longitude,this.position_[1]=e.latitude):this.position_=[e.longitude,e.latitude];const o=this.transform_(this.position_);this.set(l,o),this.set(p,null===e.speed?void 0:e.speed);const i=Object(_.circular)(this.position_,e.accuracy);i.applyTransform(this.transform_),this.set(r,i),this.changed()},w.prototype.positionError_=function(t){t.type=y.a.ERROR,this.setTracking(!1),this.dispatchEvent(t)},w.prototype.getAccuracy=function(){return this.get(n)},w.prototype.getAccuracyGeometry=function(){return this.get(r)||null},w.prototype.getAltitude=function(){return this.get(a)},w.prototype.getAltitudeAccuracy=function(){return this.get(s)},w.prototype.getHeading=function(){return this.get(c)},w.prototype.getPosition=function(){return this.get(l)},w.prototype.getProjection=function(){return this.get(u)},w.prototype.getSpeed=function(){return this.get(p)},w.prototype.getTracking=function(){return this.get(h)},w.prototype.getTrackingOptions=function(){return this.get(d)},w.prototype.setProjection=function(t){this.set(u,Object(O.get)(t))},w.prototype.setTracking=function(t){this.set(h,t)},w.prototype.setTrackingOptions=function(t){this.set(d,t)};e.default=w},446:function(t,e,o){o(9),t.exports=o(447)},447:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),o(448),o(11);var i=g(o(12)),n=g(o(19)),r=g(o(16)),a=g(o(5)),s=g(o(61)),c=g(o(25)),l=g(o(42)),u=g(o(43)),p=g(o(1)),h=g(o(18)),d=g(o(449));function g(t){return t&&t.__esModule?t:{default:t}}var f={};f.module=angular.module("app",[p.default.module.name,d.default.name,h.default.name]),f.MainController=function(t,e){var o=new c.default({image:new s.default({radius:6,fill:new l.default({color:"rgba(230, 100, 100, 1)"}),stroke:new u.default({color:"rgba(230, 40, 40, 1)",width:2})})}),p=new c.default({fill:new l.default({color:"rgba(100, 100, 230, 0.3)"}),stroke:new u.default({color:"rgba(40, 40, 230, 1)",width:2})});this.desktopGeolocationOptions={positionFeatureStyle:o,accuracyFeatureStyle:p,zoom:17},this.map=new i.default({layers:[new r.default({source:new a.default})],view:new n.default({center:[0,0],zoom:4})}),e.init(this.map)},f.MainController.$inject=["$scope","ngeoFeatureOverlayMgr"],f.module.controller("MainController",f.MainController),e.default=f},448:function(t,e){},449:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=h(o(3)),n=h(o(1)),r=h(o(146)),a=h(o(148)),s=h(o(2)),c=h(o(17)),l=h(o(221)),u=h(o(12)),p=h(o(28));function h(t){return t&&t.__esModule?t:{default:t}}var d=angular.module("ngeoDesktopGeolocation",[r.default.module.name,a.default.module.name]);n.default.module.requires.push(d.name),d.GeolocationEventType={ERROR:"desktop-geolocation-error"},d.directive_=function(){return{restrict:"A",scope:{getDesktopMapFn:"&ngeoDesktopGeolocationMap",getDesktopGeolocationOptionsFn:"&ngeoDesktopGeolocationOptions"},controller:"ngeoGeolocationDesktopController"}},d.directive("ngeoDesktopGeolocation",d.directive_),d.Controller_=function(t,e,o,n){var r=this;e.on("click",this.toggle.bind(this));var a=t.getDesktopMapFn();i.default.assertInstanceof(a,u.default),this.map_=a;var p=t.getDesktopGeolocationOptionsFn()||{};i.default.assertObject(p),this.$scope_=t,this.notification_=n,this.featureOverlay_=o.getFeatureOverlay(),this.geolocation_=new l.default({projection:a.getView().getProjection()}),this.geolocation_.on("error",function(e){this.deactivate_(),this.notification_.error(e.message),t.$emit(d.GeolocationEventType.ERROR,e)},this),this.positionFeature_=new c.default,p.positionFeatureStyle&&this.positionFeature_.setStyle(p.positionFeatureStyle),this.accuracyFeature_=new c.default,p.accuracyFeatureStyle&&this.accuracyFeature_.setStyle(p.accuracyFeatureStyle),this.zoom_=p.zoom,this.active_=!1,s.default.listen(this.geolocation_,"change:accuracyGeometry",function(){r.accuracyFeature_.setGeometry(r.geolocation_.getAccuracyGeometry())}),s.default.listen(this.geolocation_,"change:position",function(t){r.setPosition_(t)})},d.Controller_.$inject=["$scope","$element","ngeoFeatureOverlayMgr","ngeoNotification"],d.Controller_.prototype.toggle=function(){this.active_?this.deactivate_():this.activate_()},d.Controller_.prototype.activate_=function(){this.featureOverlay_.addFeature(this.positionFeature_),this.featureOverlay_.addFeature(this.accuracyFeature_),this.geolocation_.setTracking(!0),this.active_=!0},d.Controller_.prototype.deactivate_=function(){this.featureOverlay_.clear(),this.active_=!1,this.notification_.clear()},d.Controller_.prototype.setPosition_=function(t){var e=this.geolocation_.getPosition(),o=new p.default(e);this.positionFeature_.setGeometry(o),this.map_.getView().setCenter(e),void 0!==this.zoom_&&this.map_.getView().setZoom(this.zoom_),this.geolocation_.setTracking(!1)},d.controller("ngeoGeolocationDesktopController",d.Controller_),e.default=d},5:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(0),n=o(6);const r=function(t){const e=t||{};let o;o=void 0!==e.attributions?e.attributions:[r.ATTRIBUTION];const i=void 0!==e.crossOrigin?e.crossOrigin:"anonymous",a=void 0!==e.url?e.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";n.a.call(this,{attributions:o,cacheSize:e.cacheSize,crossOrigin:i,opaque:void 0===e.opaque||e.opaque,maxZoom:void 0!==e.maxZoom?e.maxZoom:19,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileLoadFunction:e.tileLoadFunction,url:a,wrapX:e.wrapX})};Object(i.inherits)(r,n.a),r.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',e.default=r},6:function(t,e,o){"use strict";var i=o(0),n=o(21),r=o(20);const a=function(t){const e=t||{},o=void 0!==e.projection?e.projection:"EPSG:3857",i=void 0!==e.tileGrid?e.tileGrid:r.default.createXYZ({extent:r.default.extentFromProjection(o),maxZoom:e.maxZoom,minZoom:e.minZoom,tileSize:e.tileSize});n.a.call(this,{attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,opaque:e.opaque,projection:o,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileGrid:i,tileLoadFunction:e.tileLoadFunction,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:void 0===e.wrapX||e.wrapX,transition:e.transition})};Object(i.inherits)(a,n.a),e.a=a},84:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){};i.prototype.showMessage=function(t){},i.prototype.show=function(t){this.getMessageObjects(t).forEach(this.showMessage,this)},i.prototype.error=function(t){this.show(this.getMessageObjects(t,i.Type.ERROR))},i.prototype.info=function(t){this.show(this.getMessageObjects(t,i.Type.INFORMATION))},i.prototype.success=function(t){this.show(this.getMessageObjects(t,i.Type.SUCCESS))},i.prototype.warn=function(t){this.show(this.getMessageObjects(t,i.Type.WARNING))},i.prototype.getMessageObjects=function(t,e){var o=[],n=null,r=i.Type.INFORMATION;return"string"==typeof t?o.push({msg:t,type:void 0!==e?e:r}):Array.isArray(t)?t.forEach(function(i){"string"==typeof t?n={msg:i,type:void 0!==e?e:r}:(n=i,void 0!==e&&(n.type=e)),o.push(n)},this):(n=t,void 0!==e&&(n.type=e),void 0===n.type&&(n.type=r),o.push(n)),o},i.Type={ERROR:"error",INFORMATION:"information",SUCCESS:"success",WARNING:"warning"},e.default=i}},[446]);
//# sourceMappingURL=desktopgeolocation.041129bb95ad164f235a.js.map