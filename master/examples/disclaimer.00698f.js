!function(e){function t(t){for(var i,r,o=t[0],l=t[1],c=t[2],u=0,g=[];u<o.length;u++)r=o[u],n[r]&&g.push(n[r][0]),n[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);for(p&&p(t);g.length;)g.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],i=!0,o=1;o<s.length;o++){var l=s[o];0!==n[l]&&(i=!1)}i&&(a.splice(t--,1),e=r(r.s=s[0]))}return e}var i={},n={30:0},a=[];function r(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=i,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(s,i,function(t){return e[t]}.bind(null,i));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var p=l;a.push([393,0]),s()}({307:function(e,t,s){"use strict";s(296);var i=s(2),n=s(192),a=s(68),r=s(1),o=(s(511),function(e,t,s){this.sce_=e,this.gettextCatalog_=t,this.createPopup_=s,a.a.call(this);var i=angular.element('<div class="ngeo-disclaimer"></div>');angular.element(document.body).append(i),this.container_=i,this.messages_={}});o.$inject=["$sce","gettextCatalog","ngeoCreatePopup"],o.$inject=["$sce","gettextCatalog","ngeoCreatePopup"],r.d(o,a.a),o.prototype.alert=function(e){this.show(e)},o.prototype.close=function(e){this.getMessageObjects(e).forEach(this.closeMessage_,this)},o.prototype.showMessage=function(e){var t=this,s=this.gettextCatalog_,n=e.type;i.a.assertString(n,"Type should be set.");var r=this.getMessageUid_(e);if(void 0===this.messages_[r])if(!0===e.popup){var o=this.createPopup_(),l=this.sce_.trustAsHtml(e.msg);o.open({autoDestroy:!0,content:l,title:"&nbsp;"}),o.scope.$watch("open",function(s,i){s||t.closeMessage_(e)}),this.messages_[r]=o}else{var c=["alert","fade","alert-dismissible"];switch(n){case a.a.Type.ERROR:c.push("alert-danger");break;case a.a.Type.INFORMATION:c.push("alert-info");break;case a.a.Type.SUCCESS:c.push("alert-success");break;case a.a.Type.WARNING:c.push("alert-warning")}var p=angular.element('<div role="alert" class="'+c.join(" ")+'"></div>'),u=angular.element('<button type="button" class="close" data-dismiss="alert" aria-label="'+s.getString("Close")+'"><span aria-hidden="true" class="fa fa-times"></span></button>'),g=angular.element("<span />").html(e.msg);p.append(u).append(g);(e.target?angular.element(e.target):this.container_).append(p),p.addClass("in"),p.on("closed.bs.alert",function(){t.closeMessage_(e)}),this.messages_[r]=p}},o.prototype.getMessageUid_=function(e){return e.msg+"-"+e.type},o.prototype.closeMessage_=function(e){var t=this.getMessageUid_(e),s=this.messages_[t];void 0!==s&&(s instanceof n.a?s.getOpen()&&s.setOpen(!1):s.hasClass("in")&&s.alert("close"),delete this.messages_[t])},(o.module=angular.module("ngeoDisclaimer",[n.a.module.name])).service("ngeoDisclaimer",o),t.a=o},392:function(e,t,s){"use strict";s.r(t),function(e){s(492),s(289);var i=s(307),n=s(68),a=s(19),r=s(26),o=s(18),l=s(32),c=s(23),p={};p.module=angular.module("app",["gettext",c.a.name,i.a.module.name]),p.MainController=function(t){this.disclaimer=t,this.map=new a.a({layers:[new o.a({source:new l.b})],view:new r.a({center:[0,0],zoom:4})}),this.successMsg_="Disclaimer with success style",this.infoMsg_="Disclaimer with info style",this.warningMsg_="Disclaimer with warning style",this.errorMsg_="Disclaimer with error style",this.inMapMsgs_=["Disclaimer inside the map","An other message ","Map contributors","This is a long message inside a map"],e('[data-toggle="tooltip"]').tooltip({container:"body",trigger:"hover"})},p.MainController.$inject=["ngeoDisclaimer"],p.MainController.prototype.success=function(){this.disclaimer.success(this.successMsg_)},p.MainController.prototype.info=function(){this.disclaimer.info(this.infoMsg_)},p.MainController.prototype.warn=function(){this.disclaimer.warn(this.warningMsg_)},p.MainController.prototype.error=function(){this.disclaimer.error(this.errorMsg_)},p.MainController.prototype.inMap=function(){this.inMapMsgs_.forEach(function(e){this.disclaimer.alert({msg:e,target:angular.element("#disclaimers-in-map"),type:n.a.Type.WARNING})},this)},p.MainController.prototype.closeAll=function(){this.disclaimer.close({msg:this.successMsg_,type:n.a.Type.SUCCESS}),this.disclaimer.close({msg:this.infoMsg_,type:n.a.Type.INFORMATION}),this.disclaimer.close({msg:this.warningMsg_,type:n.a.Type.WARNING}),this.disclaimer.close({msg:this.errorMsg_,type:n.a.Type.ERROR}),this.inMapMsgs_.forEach(function(e){this.disclaimer.close({msg:e,type:n.a.Type.WARNING})},this)},p.module.controller("MainController",p.MainController),t.default=p}.call(this,s(51))},393:function(e,t,s){s(54),s(53),e.exports=s(392)},492:function(e,t){}});
//# sourceMappingURL=disclaimer.00698f.js.map