webpackJsonp([7],{109:function(e,t,n){n(110),e.exports="ngSanitize"},110:function(e,t){!function(e,t){"use strict";var n,o,i,r,s,a,u,l,p,c=t.$$minErr("$sanitize");t.module("ngSanitize",[]).provider("$sanitize",function(){var d=!1;this.$get=["$$sanitizeUri",function(e){return d&&o(C,w),function(t){var n=[];return l(t,p(n,function(t,n){return!/^unsafe:/.test(e(t,n))})),n.join("")}}],this.enableSvg=function(e){return r(e)?(d=e,this):d},n=t.bind,o=t.extend,i=t.forEach,r=t.isDefined,s=t.lowercase,a=t.noop,l=function(e,t){null===e||void 0===e?e="":"string"!=typeof e&&(e=""+e);var n=D(e);if(!n)return"";var o=5;do{if(0===o)throw c("uinput","Failed to sanitize html because the input is unstable");o--,e=n.innerHTML,n=D(e)}while(e!==n.innerHTML);for(var i=n.firstChild;i;){switch(i.nodeType){case 1:t.start(i.nodeName.toLowerCase(),$(i.attributes));break;case 3:t.chars(i.textContent)}var r;if(!((r=i.firstChild)||(1===i.nodeType&&t.end(i.nodeName.toLowerCase()),r=S("nextSibling",i))))for(;null==r&&(i=S("parentNode",i))!==n;)r=S("nextSibling",i),1===i.nodeType&&t.end(i.nodeName.toLowerCase());i=r}for(;i=n.firstChild;)n.removeChild(i)},p=function(e,t){var o=!1,r=n(e,e.push);return{start:function(e,n){e=s(e),!o&&k[e]&&(o=e),o||!0!==C[e]||(r("<"),r(e),i(n,function(n,o){var i=s(o),a="img"===e&&"src"===i||"background"===i;!0!==M[i]||!0===_[i]&&!t(n,a)||(r(" "),r(o),r('="'),r(A(n)),r('"'))}),r(">"))},end:function(e){e=s(e),o||!0!==C[e]||!0===f[e]||(r("</"),r(e),r(">")),e==o&&(o=!1)},chars:function(e){o||r(A(e))}}},u=e.Node.prototype.contains||function(e){return!!(16&this.compareDocumentPosition(e))};var h=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,m=/([^#-~ |!])/g,f=T("area,br,col,hr,img,wbr"),g=T("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),v=T("rp,rt"),y=o({},v,g),b=o({},g,T("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),x=o({},v,T("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),w=T("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),k=T("script,style"),C=o({},f,b,x,y),_=T("background,cite,href,longdesc,src,xlink:href,xml:base"),q=T("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),P=T("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",!0),M=o({},_,P,q);function T(e,t){var n,o={},i=e.split(",");for(n=0;n<i.length;n++)o[t?s(i[n]):i[n]]=!0;return o}var D=function(e,t){var n;if(!t||!t.implementation)throw c("noinert","Can't create an inert html document");var o=((n=t.implementation.createHTMLDocument("inert")).documentElement||n.getDocumentElement()).querySelector("body");return o.innerHTML='<svg><g onload="this.parentNode.remove()"></g></svg>',o.querySelector("svg")?(o.innerHTML='<svg><p><style><img src="</style><img src=x onerror=alert(1)//">',o.querySelector("svg img")?function(t){t="<remove></remove>"+t;try{var n=(new e.DOMParser).parseFromString(t,"text/html").body;return n.firstChild.remove(),n}catch(e){return}}:function(e){return o.innerHTML=e,t.documentMode&&H(o),o}):function(t){t="<remove></remove>"+t;try{t=encodeURI(t)}catch(e){return}var n=new e.XMLHttpRequest;n.responseType="document",n.open("GET","data:text/html;charset=utf-8,"+t,!1),n.send(null);var o=n.response.body;return o.firstChild.remove(),o}}(e,e.document);function $(e){for(var t={},n=0,o=e.length;n<o;n++){var i=e[n];t[i.name]=i.value}return t}function A(e){return e.replace(/&/g,"&amp;").replace(h,function(e){return"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";"}).replace(m,function(e){return"&#"+e.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function H(t){for(;t;){if(t.nodeType===e.Node.ELEMENT_NODE)for(var n=t.attributes,o=0,i=n.length;o<i;o++){var r=n[o],s=r.name.toLowerCase();"xmlns:ns1"!==s&&0!==s.lastIndexOf("ns1:",0)||(t.removeAttributeNode(r),o--,i--)}var a=t.firstChild;a&&H(a),t=S("nextSibling",t)}}function S(e,t){var n=t[e];if(n&&u.call(t,n))throw c("elclob","Failed to sanitize html because the element is clobbered: {0}",t.outerHTML||t.outerText);return n}}).info({angularVersion:"1.6.9"}),t.module("ngSanitize").filter("linky",["$sanitize",function(e){var n=/((s?ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,o=/^mailto:/i,i=t.$$minErr("linky"),r=t.isDefined,s=t.isFunction,u=t.isObject,l=t.isString;return function(t,c,d){if(null==t||""===t)return t;if(!l(t))throw i("notstring","Expected string but received: {0}",t);for(var h,m,f,g=s(d)?d:u(d)?function(){return d}:function(){return{}},v=t,y=[];h=v.match(n);)m=h[0],h[2]||h[4]||(m=(h[3]?"http://":"mailto:")+m),f=h.index,b(v.substr(0,f)),x(m,h[0].replace(o,"")),v=v.substring(f+h[0].length);return b(v),e(y.join(""));function b(e){var t,n;e&&y.push((t=e,p(n=[],a).chars(t),n.join("")))}function x(e,t){var n,o=g(e);for(n in y.push("<a "),o)y.push(n+'="'+o[n]+'" ');!r(c)||"target"in o||y.push('target="',c,'" '),y.push('href="',e.replace(/"/g,"&quot;"),'">'),b(t),y.push("</a>")}}}])}(window,window.angular)},149:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s(n(3)),i=s(n(1)),r=s(n(150));function s(e){return e&&e.__esModule?e:{default:e}}var a=function(e,t,n,o){var i=this;this.scope=t.$new(!0),this.scope.$watch(function(){return i.scope.open},function(e){!e&&i.autoDestroy_&&i.timeout_(function(){i.destroy()})}),this.sce_=n,this.timeout_=o,this.element_=angular.element("<div ngeo-popup></div>"),this.autoDestroy_=!1,e(this.element_)(this.scope),angular.element(document.body).append(this.element_)};a.prototype.getOpen=function(){return this.scope.open},a.prototype.setOpen=function(e){this.scope.open=e},a.prototype.destroy=function(){this.scope.$destroy(),this.element_.remove()},a.prototype.setTitle=function(e){var t=this.sce_.trustAsHtml(e);this.scope.title=t},a.prototype.setContent=function(e,t){this.scope.content=t?this.sce_.trustAsHtml(e):e},a.prototype.setUrl=function(e){var t=this.sce_.trustAsHtml('<iframe src="'+e+'" width="100%" height="100%"></iframe>');this.setContent(t)},a.prototype.setWidth=function(e){this.element_.width(e)},a.prototype.setHeight=function(e){this.element_.height(e)},a.prototype.setSize=function(e,t){this.setWidth(e),this.setHeight(t)},a.prototype.setAutoDestroy=function(e){this.autoDestroy_=e},a.prototype.addClass=function(e){this.element_.addClass(e)},a.prototype.open=function(e){e.url?this.setUrl(e.url):e.content?this.setContent(e.content):o.default.fail('ngeo.message.Popup options requirest "url" or "content".'),void 0!==e.autoDestroy&&this.setAutoDestroy(e.autoDestroy),void 0!==e.cls&&this.addClass(e.cls),void 0!==e.height&&this.setHeight(e.height),void 0!==e.title&&this.setTitle(e.title),void 0!==e.width&&this.setWidth(e.width),this.setOpen(!0)},(a.Factory=function(e,t,n,o){return function(){return new a(e,t,n,o)}}).$inject=["$compile","$rootScope","$sce","$timeout"],(a.module=angular.module("ngeoCreatePopup",[r.default.name])).factory("ngeoCreatePopup",a.Factory),i.default.module.requires.push(a.module.name),t.default=a},150:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,i=n(1),r=(o=i)&&o.__esModule?o:{default:o};n(109);var s=angular.module("ngeoPopup",["ngSanitize"]);r.default.module.requires.push(s.name),s.value("ngeoPopupTemplateUrl",function(e,t){var n=t.ngeoPopupTemplateurl;return void 0!==n?n:r.default.baseModuleTemplateUrl+"/message/popupcomponent.html"}),s.directive_=function(e){return{restrict:"A",templateUrl:e,link:function(e,t,n){t.addClass("popover"),e.close=function(e){e&&(e.stopPropagation(),e.preventDefault()),t.addClass("hidden")},e.$watch("open",function(e,n){t.css("display",e?"block":"none")})}}},s.directive_.$inject=["ngeoPopupTemplateUrl"],s.directive("ngeoPopup",s.directive_),t.default=s},529:function(e,t,n){n(9),e.exports=n(530)},530:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),n(531),n(11);var o=r(n(1)),i=r(n(149));function r(e){return e&&e.__esModule?e:{default:e}}var s={};s.module=angular.module("app",[o.default.module.name,i.default.module.name]),s.MainController=function(t,n){this.sce_=t,this.createPopup_=n,e('[data-toggle="tooltip"]').tooltip({container:"body",trigger:"hover"})},s.MainController.$inject=["$sce","ngeoCreatePopup"],s.MainController.prototype.simplePopup=function(){var e=this.createPopup_();e.setAutoDestroy(!0),e.setTitle("Simple popup");var t=this.sce_.trustAsHtml("This is a simple 400x300 px popup.");e.setContent(t),e.setWidth("400px"),e.setHeight("300px"),e.setOpen(!0)},s.MainController.prototype.iframePopup=function(){var e=this.createPopup_();e.setAutoDestroy(!0),e.addClass("popup-with-iframe"),e.setTitle("Iframe popup"),e.setUrl("http://geomapfish.org/"),e.setSize("400px","300px"),e.setOpen(!0)},s.MainController.prototype.heavyPopup=function(){var e=this.createPopup_();e.setAutoDestroy(!0),e.setTitle("This is a popup with lots and lots of content and a very long title");var t=this.sce_.trustAsHtml("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egetquam at ex euismod bibendum et eget enim. Nulla sodales tortor acsagittis aliquet. Ut malesuada quam vitae pulvinar porta. Nunc idmagna id risus malesuada elementum eget id purus. Curabitur vel augueblandit, faucibus nulla quis, consequat tellus. Phasellus commodo,tellus et vulputate ultricies, nulla libero ornare arcu, quisfermentum sem diam quis tellus. Aliquam ut sapien tristique, laciniaante et, lacinia arcu. Quisque sagittis eros at quam blanditgravida. Nulla sit amet enim semper, efficitur eros sit amet,porttitor libero. Fusce quis tellus est. Quisque ornare, ex egetluctus pharetra, nisl leo lobortis purus, sed tristique neque leo egetodio. Maecenas lobortis nisl ac magna mollis, ac pulvinar risusconvallis. Donec ullamcorper sollicitudin maximus. Quisque bibendumelit sit amet ultrices ornare. Donec aliquam felis id urna ultricesscelerisque.");e.setContent(t),e.setOpen(!0)},s.MainController.prototype.openPopupWithContent=function(){var e=this.createPopup_(),t=this.sce_.trustAsHtml("This popup was opened using the <code>open</code> method.");e.open({autoDestroy:!0,content:t,height:"200px",title:'Opened with "open"',width:"300px"})},s.MainController.prototype.openPopupWithUrl=function(){this.createPopup_().open({autoDestroy:!0,cls:"popup-with-iframe",height:"300px",title:'Opened with "open" and "iframe"',url:"http://geomapfish.org/",width:"400px"})},s.module.controller("MainController",s.MainController),t.default=s}).call(t,n(14))},531:function(e,t){}},[529]);
//# sourceMappingURL=popupservice.d37df6c6accdc4d47534.js.map