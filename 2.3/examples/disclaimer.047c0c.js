!function(e){function t(t){for(var a,r,o=t[0],l=t[1],c=t[2],u=0,g=[];u<o.length;u++)r=o[u],i[r]&&g.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(p&&p(t);g.length;)g.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],a=!0,o=1;o<s.length;o++){var l=s[o];0!==i[l]&&(a=!1)}a&&(n.splice(t--,1),e=r(r.s=s[0]))}return e}var a={},i={30:0},n=[];function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=a,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:s})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var p=l;n.push([392,0]),s()}({293:function(e,t,s){"use strict";s(282);var a=s(1),i=s(164),n=s(62),r=s(2),o=(s(510),function(e,t,s){this.sce_=e,this.gettextCatalog_=t,this.createPopup_=s,n.a.call(this);var a=angular.element('<div class="ngeo-disclaimer"></div>');angular.element(document.body).append(a),this.container_=a,this.messages_={}});o.$inject=["$sce","gettextCatalog","ngeoCreatePopup"],o.$inject=["$sce","gettextCatalog","ngeoCreatePopup"],r.d(o,n.a),o.prototype.alert=function(e){this.show(e)},o.prototype.close=function(e){this.getMessageObjects(e).forEach(this.closeMessage_,this)},o.prototype.showMessage=function(e){var t=this,s=this.gettextCatalog_,i=e.type;a.a.assertString(i,"Type should be set.");var r=this.getMessageUid_(e);if(void 0===this.messages_[r])if(!0===e.popup){var o=this.createPopup_(),l=this.sce_.trustAsHtml(e.msg);o.open({autoDestroy:!0,content:l,title:"&nbsp;"}),o.scope.$watch("open",function(s,a){s||t.closeMessage_(e)}),this.messages_[r]=o}else{var c=["alert","fade","alert-dismissible"];switch(i){case n.a.Type.ERROR:c.push("alert-danger");break;case n.a.Type.INFORMATION:c.push("alert-info");break;case n.a.Type.SUCCESS:c.push("alert-success");break;case n.a.Type.WARNING:c.push("alert-warning")}var p=angular.element('<div role="alert" class="'+c.join(" ")+'"></div>'),u=angular.element('<button type="button" class="close" data-dismiss="alert" aria-label="'+s.getString("Close")+'"><span aria-hidden="true" class="fa fa-times"></span></button>'),g=angular.element("<span />").html(e.msg);p.append(u).append(g);(e.target?angular.element(e.target):this.container_).append(p),p.addClass("in"),p.on("closed.bs.alert",function(){t.closeMessage_(e)}),this.messages_[r]=p}},o.prototype.getMessageUid_=function(e){return e.msg+"-"+e.type},o.prototype.closeMessage_=function(e){var t=this.getMessageUid_(e),s=this.messages_[t];void 0!==s&&(s instanceof i.a?s.getOpen()&&s.setOpen(!1):s.hasClass("in")&&s.alert("close"),delete this.messages_[t])},(o.module=angular.module("ngeoDisclaimer",[i.a.module.name])).service("ngeoDisclaimer",o),t.a=o},391:function(e,t,s){"use strict";s.r(t),function(e){s(491),s(270);var a=s(293),i=s(62),n=s(43),r=s(53),o=s(36),l=s(57),c=s(17),p={};p.module=angular.module("app",["gettext",c.a.name,a.a.module.name]),p.MainController=function(t){this.disclaimer=t,this.map=new n.a({layers:[new o.a({source:new l.b})],view:new r.a({center:[0,0],zoom:4})}),this.successMsg_="Disclaimer with success style",this.infoMsg_="Disclaimer with info style",this.warningMsg_="Disclaimer with warning style",this.errorMsg_="Disclaimer with error style",this.inMapMsgs_=["Disclaimer inside the map","An other message ","Map contributors","This is a long message inside a map"],e('[data-toggle="tooltip"]').tooltip({container:"body",trigger:"hover"})},p.MainController.$inject=["ngeoDisclaimer"],p.MainController.prototype.success=function(){this.disclaimer.success(this.successMsg_)},p.MainController.prototype.info=function(){this.disclaimer.info(this.infoMsg_)},p.MainController.prototype.warn=function(){this.disclaimer.warn(this.warningMsg_)},p.MainController.prototype.error=function(){this.disclaimer.error(this.errorMsg_)},p.MainController.prototype.inMap=function(){this.inMapMsgs_.forEach(function(e){this.disclaimer.alert({msg:e,target:angular.element("#disclaimers-in-map"),type:i.a.Type.WARNING})},this)},p.MainController.prototype.closeAll=function(){this.disclaimer.close({msg:this.successMsg_,type:i.a.Type.SUCCESS}),this.disclaimer.close({msg:this.infoMsg_,type:i.a.Type.INFORMATION}),this.disclaimer.close({msg:this.warningMsg_,type:i.a.Type.WARNING}),this.disclaimer.close({msg:this.errorMsg_,type:i.a.Type.ERROR}),this.inMapMsgs_.forEach(function(e){this.disclaimer.close({msg:e,type:i.a.Type.WARNING})},this)},p.module.controller("MainController",p.MainController),t.default=p}.call(this,s(38))},392:function(e,t,s){s(40),s(39),e.exports=s(391)},491:function(e,t){}});
//# sourceMappingURL=disclaimer.047c0c.js.map