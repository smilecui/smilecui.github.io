define("node_modules/babel-runtime/helpers/classCallCheck",function(e,n){"use strict";n.__esModule=!0,n.default=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}});
define("node_modules/core-js/library/modules/_global",function(e,n,d){var o="undefined"!=typeof o?o:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},o=d.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=o)});
define("node_modules/core-js/library/modules/_core",function(e,o,r){var n=r.exports={version:"2.5.3"};"number"==typeof __e&&(__e=n)});
define("node_modules/core-js/library/modules/_a-function",function(n,o,e){e.exports=function(n){if("function"!=typeof n)throw TypeError(n+" is not a function!");return n}});
define("node_modules/core-js/library/modules/_ctx",function(n,r,e){var u=n("node_modules/core-js/library/modules/_a-function");e.exports=function(n,r,e){if(u(n),void 0===r)return n;switch(e){case 1:return function(e){return n.call(r,e)};case 2:return function(e,u){return n.call(r,e,u)};case 3:return function(e,u,t){return n.call(r,e,u,t)}}return function(){return n.apply(r,arguments)}}});
define("node_modules/core-js/library/modules/_is-object",function(e,o,n){n.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}});
define("node_modules/core-js/library/modules/_an-object",function(o,e,r){var n=o("node_modules/core-js/library/modules/_is-object");r.exports=function(o){if(!n(o))throw TypeError(o+" is not an object!");return o}});
define("node_modules/core-js/library/modules/_fails",function(e,r,n){n.exports=function(e){try{return!!e()}catch(r){return!0}}});
define("node_modules/core-js/library/modules/_descriptors",function(e,r,o){o.exports=!e("node_modules/core-js/library/modules/_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})});
define("node_modules/core-js/library/modules/_dom-create",function(e,o,r){var l=e("node_modules/core-js/library/modules/_is-object"),d=e("node_modules/core-js/library/modules/_global").document,n=l(d)&&l(d.createElement);r.exports=function(e){return n?d.createElement(e):{}}});
define("node_modules/core-js/library/modules/_ie8-dom-define",function(e,o,r){r.exports=!e("node_modules/core-js/library/modules/_descriptors")&&!e("node_modules/core-js/library/modules/_fails")(function(){return 7!=Object.defineProperty(e("node_modules/core-js/library/modules/_dom-create")("div"),"a",{get:function(){return 7}}).a})});
define("node_modules/core-js/library/modules/_to-primitive",function(e,o,r){var t=e("node_modules/core-js/library/modules/_is-object");r.exports=function(e,o){if(!t(e))return e;var r,i;if(o&&"function"==typeof(r=e.toString)&&!t(i=r.call(e)))return i;if("function"==typeof(r=e.valueOf)&&!t(i=r.call(e)))return i;if(!o&&"function"==typeof(r=e.toString)&&!t(i=r.call(e)))return i;throw TypeError("Can't convert object to primitive value")}});
define("node_modules/core-js/library/modules/_object-dp",function(e,o){var r=e("node_modules/core-js/library/modules/_an-object"),d=e("node_modules/core-js/library/modules/_ie8-dom-define"),s=e("node_modules/core-js/library/modules/_to-primitive"),i=Object.defineProperty;o.f=e("node_modules/core-js/library/modules/_descriptors")?Object.defineProperty:function(e,o,n){if(r(e),o=s(o,!0),r(n),d)try{return i(e,o,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[o]=n.value),e}});
define("node_modules/core-js/library/modules/_property-desc",function(e,r,n){n.exports=function(e,r){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:r}}});
define("node_modules/core-js/library/modules/_hide",function(e,o,r){var d=e("node_modules/core-js/library/modules/_object-dp"),s=e("node_modules/core-js/library/modules/_property-desc");r.exports=e("node_modules/core-js/library/modules/_descriptors")?function(e,o,r){return d.f(e,o,s(1,r))}:function(e,o,r){return e[o]=r,e}});
define("node_modules/core-js/library/modules/_export",function(e,n,o){var r="undefined"!=typeof r?r:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},r=e("node_modules/core-js/library/modules/_global"),t=e("node_modules/core-js/library/modules/_core"),u=e("node_modules/core-js/library/modules/_ctx"),i=e("node_modules/core-js/library/modules/_hide"),s="prototype",d=function(e,n,o){var l,c,f,a=e&d.F,m=e&d.G,y=e&d.S,p=e&d.P,_=e&d.B,w=e&d.W,b=m?t:t[n]||(t[n]={}),v=b[s],h=m?r:y?r[n]:(r[n]||{})[s];m&&(o=n);for(l in o)c=!a&&h&&void 0!==h[l],c&&l in b||(f=c?h[l]:o[l],b[l]=m&&"function"!=typeof h[l]?o[l]:_&&c?u(f,r):w&&h[l]==f?function(e){var n=function(n,o,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(n);case 2:return new e(n,o)}return new e(n,o,r)}return e.apply(this,arguments)};return n[s]=e[s],n}(f):p&&"function"==typeof f?u(Function.call,f):f,p&&((b.virtual||(b.virtual={}))[l]=f,e&d.R&&v&&!v[l]&&i(v,l,f)))};d.F=1,d.G=2,d.S=4,d.P=8,d.B=16,d.W=32,d.U=64,d.R=128,o.exports=d});
define("node_modules/core-js/library/modules/es6.object.define-property",function(e){var o=e("node_modules/core-js/library/modules/_export");o(o.S+o.F*!e("node_modules/core-js/library/modules/_descriptors"),"Object",{defineProperty:e("node_modules/core-js/library/modules/_object-dp").f})});
define("node_modules/core-js/library/fn/object/define-property",function(e,o,r){e("node_modules/core-js/library/modules/es6.object.define-property");var n=e("node_modules/core-js/library/modules/_core").Object;r.exports=function(e,o,r){return n.defineProperty(e,o,r)}});
define("node_modules/babel-runtime/core-js/object/define-property",function(e,o,r){r.exports={"default":e("node_modules/core-js/library/fn/object/define-property"),__esModule:!0}});
define("node_modules/babel-runtime/helpers/createClass",function(e,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}n.__esModule=!0;var t=e("node_modules/babel-runtime/core-js/object/define-property"),u=r(t);n.default=function(){function e(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),u.default(e,t.key,t)}}return function(n,r,t){return r&&e(n.prototype,r),t&&e(n,t),n}}()});
define("resource/js/sentinel.min",function(){this.sentinel||function(e,n){sentinel=function(){var e,n,t,i=Array.isArray,o={},r={};return{on:function(a,s){if(s){if(!e){var f=document,l=f.head;f.addEventListener("animationstart",function(e,n,t,i){if(n=r[e.animationName])for(e.stopImmediatePropagation(),t=n.length,i=0;t>i;i++)n[i](e.target)},!0),e=f.createElement("style"),l.insertBefore(e,l.firstChild),n=e.sheet,t=n.cssRules}(i(a)?a:[a]).map(function(e,i,a){i=o[e],i||(a="!"==e[0],o[e]=i=a?e.slice(1):"sentinel-"+Math.random().toString(16).slice(2),t[n.insertRule("@keyframes "+i+"{from{transform:none;}to{transform:none;}}",t.length)]._id=e,a||(t[n.insertRule(e+"{animation-duration:0.0001s;animation-name:"+i+";}",t.length)]._id=e),o[e]=i),(r[i]=r[i]||[]).push(s)})}},off:function(e,a){(i(e)?e:[e]).map(function(e,i,s,f){if(i=o[e]){if(s=r[i],a)for(f=s.length;f--;)s[f]===a&&s.splice(f,1);else s=[];if(!s.length){for(f=t.length;f--;)t[f]._id==e&&n.deleteRule(f);delete o[e],delete r[i]}}})},reset:function(){o={},r={},e&&e.parentNode.removeChild(e),e=0}}}(),n=e.createEvent("HTMLEvents"),n.initEvent("sentinel-load",!1,!1),e.dispatchEvent(n)}(document)});
define("resource/js/alloy-finger",function(){!function(){function t(t){return Math.sqrt(t.x*t.x+t.y*t.y)}function i(t,i){return t.x*i.x+t.y*i.y}function e(e,s){var h=t(e)*t(s);if(0===h)return 0;var n=i(e,s)/h;return n>1&&(n=1),Math.acos(n)}function s(t,i){return t.x*i.y-i.x*t.y}function h(t,i){var h=e(t,i);return s(t,i)>0&&(h*=-1),180*h/Math.PI}function n(t,i){var e=new o(t);return e.add(i),e}var o=function(t){this.handlers=[],this.el=t};o.prototype.add=function(t){this.handlers.push(t)},o.prototype.del=function(t){t||(this.handlers=[]);for(var i=this.handlers.length;i>=0;i--)this.handlers[i]===t&&this.handlers.splice(i,1)},o.prototype.dispatch=function(){for(var t=0,i=this.handlers.length;i>t;t++){var e=this.handlers[t];"function"==typeof e&&e.apply(this.el,arguments)}};var a=function(t,i){this.element="string"==typeof t?document.querySelector(t):t,this.start=this.start.bind(this),this.move=this.move.bind(this),this.end=this.end.bind(this),this.cancel=this.cancel.bind(this),this.element.addEventListener("touchstart",this.start,!1),this.element.addEventListener("touchmove",this.move,!1),this.element.addEventListener("touchend",this.end,!1),this.element.addEventListener("touchcancel",this.cancel,!1),this.preV={x:null,y:null},this.pinchStartLen=null,this.zoom=1,this.isDoubleTap=!1;var e=function(){};this.rotate=n(this.element,i.rotate||e),this.touchStart=n(this.element,i.touchStart||e),this.multipointStart=n(this.element,i.multipointStart||e),this.multipointEnd=n(this.element,i.multipointEnd||e),this.pinch=n(this.element,i.pinch||e),this.swipe=n(this.element,i.swipe||e),this.tap=n(this.element,i.tap||e),this.doubleTap=n(this.element,i.doubleTap||e),this.longTap=n(this.element,i.longTap||e),this.singleTap=n(this.element,i.singleTap||e),this.pressMove=n(this.element,i.pressMove||e),this.touchMove=n(this.element,i.touchMove||e),this.touchEnd=n(this.element,i.touchEnd||e),this.touchCancel=n(this.element,i.touchCancel||e),this.delta=null,this.last=null,this.now=null,this.tapTimeout=null,this.singleTapTimeout=null,this.longTapTimeout=null,this.swipeTimeout=null,this.x1=this.x2=this.y1=this.y2=null,this.preTapPosition={x:null,y:null}};a.prototype={start:function(i){if(i.touches){this.now=Date.now(),this.x1=i.touches[0].pageX,this.y1=i.touches[0].pageY,this.delta=this.now-(this.last||this.now),this.touchStart.dispatch(i),null!==this.preTapPosition.x&&(this.isDoubleTap=this.delta>0&&this.delta<=250&&Math.abs(this.preTapPosition.x-this.x1)<30&&Math.abs(this.preTapPosition.y-this.y1)<30),this.preTapPosition.x=this.x1,this.preTapPosition.y=this.y1,this.last=this.now;var e=this.preV,s=i.touches.length;if(s>1){this._cancelLongTap(),this._cancelSingleTap();var h={x:i.touches[1].pageX-this.x1,y:i.touches[1].pageY-this.y1};e.x=h.x,e.y=h.y,this.pinchStartLen=t(e),this.multipointStart.dispatch(i)}this.longTapTimeout=setTimeout(function(){this.longTap.dispatch(i)}.bind(this),750)}},move:function(i){if(i.touches){var e=this.preV,s=i.touches.length,n=i.touches[0].pageX,o=i.touches[0].pageY;if(this.isDoubleTap=!1,s>1){var a={x:i.touches[1].pageX-n,y:i.touches[1].pageY-o};null!==e.x&&(this.pinchStartLen>0&&(i.zoom=t(a)/this.pinchStartLen,this.pinch.dispatch(i)),i.angle=h(a,e),this.rotate.dispatch(i)),e.x=a.x,e.y=a.y}else null!==this.x2?(i.deltaX=n-this.x2,i.deltaY=o-this.y2):(i.deltaX=0,i.deltaY=0),this.pressMove.dispatch(i);this.touchMove.dispatch(i),this._cancelLongTap(),this.x2=n,this.y2=o,s>1&&i.preventDefault()}},end:function(t){if(t.changedTouches){this._cancelLongTap();var i=this;t.touches.length<2&&this.multipointEnd.dispatch(t),this.x2&&Math.abs(this.x1-this.x2)>30||this.y2&&Math.abs(this.y1-this.y2)>30?(t.direction=this._swipeDirection(this.x1,this.x2,this.y1,this.y2),this.swipeTimeout=setTimeout(function(){i.swipe.dispatch(t)},0)):(this.tapTimeout=setTimeout(function(){i.tap.dispatch(t),i.isDoubleTap&&(i.doubleTap.dispatch(t),clearTimeout(i.singleTapTimeout),i.isDoubleTap=!1)},0),i.isDoubleTap||(i.singleTapTimeout=setTimeout(function(){i.singleTap.dispatch(t)},250))),this.touchEnd.dispatch(t),this.preV.x=0,this.preV.y=0,this.zoom=1,this.pinchStartLen=null,this.x1=this.x2=this.y1=this.y2=null}},cancel:function(t){clearTimeout(this.singleTapTimeout),clearTimeout(this.tapTimeout),clearTimeout(this.longTapTimeout),clearTimeout(this.swipeTimeout),this.touchCancel.dispatch(t)},_cancelLongTap:function(){clearTimeout(this.longTapTimeout)},_cancelSingleTap:function(){clearTimeout(this.singleTapTimeout)},_swipeDirection:function(t,i,e,s){return Math.abs(t-i)>=Math.abs(e-s)?t-i>0?"Left":"Right":e-s>0?"Up":"Down"},on:function(t,i){this[t]&&this[t].add(i)},off:function(t,i){this[t]&&this[t].del(i)},destroy:function(){return this.singleTapTimeout&&clearTimeout(this.singleTapTimeout),this.tapTimeout&&clearTimeout(this.tapTimeout),this.longTapTimeout&&clearTimeout(this.longTapTimeout),this.swipeTimeout&&clearTimeout(this.swipeTimeout),this.element.removeEventListener("touchstart",this.start),this.element.removeEventListener("touchmove",this.move),this.element.removeEventListener("touchend",this.end),this.element.removeEventListener("touchcancel",this.cancel),this.rotate.del(),this.touchStart.del(),this.multipointStart.del(),this.multipointEnd.del(),this.pinch.del(),this.swipe.del(),this.tap.del(),this.doubleTap.del(),this.longTap.del(),this.singleTap.del(),this.pressMove.del(),this.touchMove.del(),this.touchEnd.del(),this.touchCancel.del(),this.preV=this.pinchStartLen=this.zoom=this.isDoubleTap=this.delta=this.last=this.now=this.tapTimeout=this.singleTapTimeout=this.longTapTimeout=this.swipeTimeout=this.x1=this.x2=this.y1=this.y2=this.preTapPosition=this.rotate=this.touchStart=this.multipointStart=this.multipointEnd=this.pinch=this.swipe=this.tap=this.doubleTap=this.longTap=this.singleTap=this.pressMove=this.touchMove=this.touchEnd=this.touchCancel=null,null}},window.AlloyFinger=a}()});
define('resource/js/image_magnifier.es6', function(require, exports, module) {

  "use strict";
  
  var _classCallCheck2 = require("node_modules/babel-runtime/helpers/classCallCheck");
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = require("node_modules/babel-runtime/helpers/createClass");
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  !function (w, d) {
    require("resource/js/sentinel.min");
    require("resource/js/alloy-finger");
  
    var Magnifier = function () {
      function Magnifier(config) {
        var _this = this;
  
        (0, _classCallCheck3.default)(this, Magnifier);
  
        this.AutoIdArr = []; //存放随机码
        this.img_box = [];
        this.Auto_model = {}; //存放autoId对应的模型
  
        if (Object.prototype.toString.call(config) !== "[object Object]") {
          return;
        }
        //没有传el就默认为所有的img
        config.el = config.el || "img";
        this.option = config;
        document.body.insertAdjacentHTML("afterbegin", "<div class=\"_img_magnifier_wrapper\">\r\n    <!--loading-->\r\n    <div class=\"_img_magnifier_spinner\">\r\n        <div class=\"_img_magnifier_bounce1\"></div>\r\n        <div class=\"_img_magnifier_bounce2\"></div>\r\n    </div>\r\n    <!--loading-->\r\n    <div class=\"_img_magnifier_box\">\r\n        <div class=\"_img_magnifier_item\">\r\n            <img class=\"_img_magnifier_view\" src=\"/resource/img/img2.jpg\" alt=\"\">\r\n        </div>\r\n        <div class=\"_img_magnifier_item\">\r\n                <img class=\"_img_magnifier_view\" src=\"/resource/img/img3.jpg\" alt=\"\">\r\n        </div>\r\n    </div>\r\n</div>".replace(/\/resource\/img\/img2.jpg/g, "/static/resource/img/img2.jpg").replace(/\/resource\/img\/img3.jpg/g, "/static/resource/img/img3.jpg"));
        this.loadingDom = document.querySelector("._img_magnifier_spinner");
        this.boxDOm = document.querySelector("._img_magnifier_box");
        var style = document.createElement("style");
        style.id = "_img_magnifier_style";
        style.innerHTML = "._img_magnifier_wrapper{position:fixed;left:0;right:0;bottom:0;top:0;overflow:hidden;z-index:999999;background-color:#000}._img_magnifier_spinner{width:60px;height:60px;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:none}._img_magnifier_bounce1,._img_magnifier_bounce2{width:100%;height:100%;border-radius:50%;background-color:#67CF22;opacity:.6;position:absolute;top:0;left:0;-webkit-animation:bounce 2s infinite ease-in-out;animation:bounce 2s infinite ease-in-out}._img_magnifier_bounce2{-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes bounce{0%,100%{-webkit-transform:scale(0)}50%{-webkit-transform:scale(1)}}@keyframes bounce{0%,100%{transform:scale(0);-webkit-transform:scale(0)}50%{transform:scale(1);-webkit-transform:scale(1)}}._img_magnifier_box{font-size:0}._img_magnifier_box::after{content:\"\";clear:left}._img_magnifier_item{width:100vw;height:100vh;overflow:auto;-webkit-overflow-scrolling:touch;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;float:left}._img_magnifier_item img{max-width:100%!important}" + "._img_magnifier_item{width:" + window.innerWidth + "px}";
        document.head.appendChild(style);
        (function() {
      var cssContent = '._img_magnifier_wrapper{position:fixed;left:0;right:0;bottom:0;top:0;overflow:hidden;z-index:999999;background-color:#000}._img_magnifier_spinner{width:60px;height:60px;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:none}._img_magnifier_bounce1,._img_magnifier_bounce2{width:100%;height:100%;border-radius:50%;background-color:#67CF22;opacity:.6;position:absolute;top:0;left:0;-webkit-animation:bounce 2s infinite ease-in-out;animation:bounce 2s infinite ease-in-out}._img_magnifier_bounce2{-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes bounce{0%,100%{-webkit-transform:scale(0)}50%{-webkit-transform:scale(1)}}@keyframes bounce{0%,100%{transform:scale(0);-webkit-transform:scale(0)}50%{transform:scale(1);-webkit-transform:scale(1)}}._img_magnifier_box{font-size:0}._img_magnifier_box::after{content:"";clear:left}._img_magnifier_item{width:100vw;height:100vh;overflow:auto;-webkit-overflow-scrolling:touch;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;float:left}._img_magnifier_item img{max-width:100%!important}';
      var injectCssFn = (function (css) {
      var headEl = document.getElementsByTagName('head')[0];
      var styleEl = document.createElement('style');
      headEl.appendChild(styleEl);
      
      if (styleEl.styleSheet) {
          if (!styleEl.styleSheet.disabled) {
              styleEl.styleSheet.cssText = css;
          }
      } else {
          try {
              styleEl.innerHTML = css
          } catch(e) {
              styleEl.innerText = css;
          }
      }
  });
  
      injectCssFn(cssContent);
  })();;
        [].map.call(document.querySelectorAll(config.el), function () {
          var isConfigAttr = config.attr && config.attr != "";
          return function (Element, index) {
            if (Element.classList.contains("_img_magnifier_view")) return;
            var autoId = "magnifier_" + Math.random().toString(16).slice(2);
            var currentEleModel = {};
            var image_url = Element.getAttribute(isConfigAttr ? config.attr : "src");
            //判断是否是有效链接
            if (!/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(image_url)) {
              return;
            }
            Element.dataset.magnifier_index = autoId;
  
            currentEleModel.url = image_url;
            currentEleModel.sign = autoId;
            currentEleModel.loaded = false;
            _this.img_box.push(currentEleModel);
            _this.AutoIdArr.push(autoId);
          };
        }());
        //刷新样式
        this.refreshStyle();
        //监听动态拼接的DOM
        sentinel.on(config.el, function (Element) {
          var autoId = Element.dataset.magnifier_index;
          if (_this.AutoIdArr.indexOf(autoId) > -1) return;
          //重新遍历DOM(避免拼接的DOM处于中间的位置导致顺序错乱)
          _this.img_box = [];
          var template_Img_box = _this.img_box; //存放临时数据，用来复用
          [].map.call(document.querySelectorAll(config.el), function (item) {
            if (item.classList.contains("_img_magnifier_view")) return;
            var autoId = item.dataset.magnifier_index;
            if (autoId != null && autoId !== "" && _this.AutoIdArr.indexOf(autoId) > -1 && _this.Auto_model[autoId]) {
              //复用数据
              _this.img_box.push(_this.Auto_model[autoId]);
            } else {
              //重新组织数据
              var autoId = "magnifier_" + Math.random().toString(16).slice(2);
              var currentEleModel = {};
              var image_url = item.getAttribute(config.attr && config.attr != "" ? config.attr : "src");
              //判断是否是有效链接
              if (!/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(image_url)) {
                return;
              }
              item.dataset.magnifier_index = autoId;
  
              currentEleModel.url = image_url;
              currentEleModel.sign = autoId;
              currentEleModel.loaded = false;
              _this.img_box.push(currentEleModel);
              _this.AutoIdArr.push(autoId);
            }
          });
          var timer = setTimeout(function () {
            _this.refreshStyle();
          }, 100);
        });
        //绑定滑动事件
        new AlloyFinger(document.querySelector("._img_magnifier_wrapper"), function () {
          var deltaX = 0;
          return {
            multipointEnd: function multipointEnd() {},
            pressMove: function pressMove(evt) {
              //evt.deltaX和evt.deltaY代表在屏幕上移动的距离
              deltaX = evt.deltaX;
              _this.imgWraperSwip(deltaX);
            }
          };
        }());
      }
      //显示Loading
  
  
      (0, _createClass3.default)(Magnifier, [{
        key: "showLoading",
        value: function showLoading() {
          this.loadingDom.style.display = "block";
        }
        //隐藏Loading
  
      }, {
        key: "closeLoading",
        value: function closeLoading() {
          this.loadingDom.style.display = "none";
        }
        //刷新DOM的样式
  
      }, {
        key: "refreshStyle",
        value: function refreshStyle() {
          console.log(this.img_box);
          if (this.boxDOm == null || this.img_box.length < 1) return;
          this.boxDOm.style.width = window.innerWidth * this.img_box.length + "px";
        }
        //图片容器滚动
  
      }, {
        key: "imgWraperSwip",
        value: function imgWraperSwip(deltaX) {
          this.boxDOm.style.transform = "translate3d(" + deltaX + "px,0,0)";
          this.boxDOm.style.webkitTransform = "translate3d(" + deltaX + "px,0,0)";
          this.transformX = deltaX;
        }
      }]);
      return Magnifier;
    }();
  
    var a = new Magnifier({});
  }(window, document);

});

