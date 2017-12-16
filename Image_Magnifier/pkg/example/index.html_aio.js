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
define("resource/js/alloy_touch",function(){!function(){"use strict";Date.now||(Date.now=function(){return(new Date).getTime()});for(var t=["webkit","moz"],i=0;i<t.length&&!window.requestAnimationFrame;++i){var e=t[i];window.requestAnimationFrame=window[e+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e+"CancelAnimationFrame"]||window[e+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var s=0;window.requestAnimationFrame=function(t){var i=Date.now(),e=Math.max(s+16,i);return setTimeout(function(){t(s=e)},e-i)},window.cancelAnimationFrame=clearTimeout}}(),function(){function t(t,i,e){t.addEventListener(i,e,!1)}function i(t){return Math.sqrt(1-Math.pow(t-1,2))}function e(t){return 1-Math.sqrt(1-t*t)}function s(t,i){for(var e in i)if(i[e].test(t[e]))return!0;return!1}var h=function(i){this.element="string"==typeof i.touch?document.querySelector(i.touch):i.touch,this.target=this._getValue(i.target,this.element),this.vertical=this._getValue(i.vertical,!0),this.property=i.property,this.tickID=0,this.initialValue=this._getValue(i.initialValue,this.target[this.property]),this.target[this.property]=this.initialValue,this.fixed=this._getValue(i.fixed,!1),this.sensitivity=this._getValue(i.sensitivity,1),this.moveFactor=this._getValue(i.moveFactor,1),this.factor=this._getValue(i.factor,1),this.outFactor=this._getValue(i.outFactor,.3),this.min=i.min,this.max=i.max,this.deceleration=6e-4,this.maxRegion=this._getValue(i.maxRegion,600),this.springMaxRegion=this._getValue(i.springMaxRegion,60),this.maxSpeed=i.maxSpeed,this.hasMaxSpeed=!(void 0===this.maxSpeed),this.lockDirection=this._getValue(i.lockDirection,!0);var e=function(){};if(this.change=i.change||e,this.touchEnd=i.touchEnd||e,this.touchStart=i.touchStart||e,this.touchMove=i.touchMove||e,this.touchCancel=i.touchCancel||e,this.reboundEnd=i.reboundEnd||e,this.animationEnd=i.animationEnd||e,this.correctionEnd=i.correctionEnd||e,this.tap=i.tap||e,this.pressMove=i.pressMove||e,this.preventDefault=this._getValue(i.preventDefault,!0),this.preventDefaultException={tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},this.hasMin=!(void 0===this.min),this.hasMax=!(void 0===this.max),this.hasMin&&this.hasMax&&this.min>this.max)throw"the min value can't be greater than the max value.";this.isTouchStart=!1,this.step=i.step,this.inertia=this._getValue(i.inertia,!0),this._calculateIndex(),this.eventTarget=window,i.bindSelf&&(this.eventTarget=this.element),this._moveHandler=this._move.bind(this),t(this.element,"touchstart",this._start.bind(this)),t(this.eventTarget,"touchend",this._end.bind(this)),t(this.eventTarget,"touchcancel",this._cancel.bind(this)),this.eventTarget.addEventListener("touchmove",this._moveHandler,{passive:!1,capture:!1}),this.x1=this.x2=this.y1=this.y2=null};h.prototype={_getValue:function(t,i){return void 0===t?i:t},stop:function(){cancelAnimationFrame(this.tickID),this._calculateIndex()},_start:function(t){this.isTouchStart=!0,this.touchStart.call(this,t,this.target[this.property]),cancelAnimationFrame(this.tickID),this._calculateIndex(),this.startTime=(new Date).getTime(),this.x1=this.preX=t.touches[0].pageX,this.y1=this.preY=t.touches[0].pageY,this.start=this.vertical?this.preY:this.preX,this._firstTouchMove=!0,this._preventMove=!1},_move:function(t){if(this.isTouchStart){var i=t.touches.length,e=t.touches[0].pageX,h=t.touches[0].pageY;if(this._firstTouchMove&&this.lockDirection){var a=Math.abs(e-this.x1)-Math.abs(h-this.y1);a>0&&this.vertical?this._preventMove=!0:0>a&&!this.vertical&&(this._preventMove=!0),this._firstTouchMove=!1}if(!this._preventMove){var n=(this.vertical?h-this.preY:e-this.preX)*this.sensitivity,o=this.moveFactor;this.hasMax&&this.target[this.property]>this.max&&n>0?o=this.outFactor:this.hasMin&&this.target[this.property]<this.min&&0>n&&(o=this.outFactor),n*=o,this.preX=e,this.preY=h,this.fixed||(this.target[this.property]+=n),this.change.call(this,this.target[this.property]);var r=(new Date).getTime();r-this.startTime>300&&(this.startTime=r,this.start=this.vertical?this.preY:this.preX),this.touchMove.call(this,t,this.target[this.property])}this.preventDefault&&!s(t.target,this.preventDefaultException)&&t.preventDefault(),1===i&&(null!==this.x2?(t.deltaX=e-this.x2,t.deltaY=h-this.y2):(t.deltaX=0,t.deltaY=0),this.pressMove.call(this,t,this.target[this.property])),this.x2=e,this.y2=h}},_cancel:function(t){var i=this.target[this.property];this.touchCancel.call(this,t,i),this._end(t)},to:function(t,e,s){this._to(t,this._getValue(e,600),s||i,this.change,function(t){this._calculateIndex(),this.reboundEnd.call(this,t),this.animationEnd.call(this,t)}.bind(this))},_calculateIndex:function(){this.hasMax&&this.hasMin&&(this.currentPage=Math.round((this.max-this.target[this.property])/this.step))},_end:function(t){if(this.isTouchStart){this.isTouchStart=!1;var s=this,h=this.target[this.property],a=Math.abs(t.changedTouches[0].pageX-this.x1)<30&&Math.abs(t.changedTouches[0].pageY-this.y1)<30;if(a&&this.tap.call(this,t,h),this.touchEnd.call(this,t,h,this.currentPage)===!1)return;if(this.hasMax&&h>this.max)this._to(this.max,200,i,this.change,function(t){this.reboundEnd.call(this,t),this.animationEnd.call(this,t)}.bind(this));else if(this.hasMin&&h<this.min)this._to(this.min,200,i,this.change,function(t){this.reboundEnd.call(this,t),this.animationEnd.call(this,t)}.bind(this));else if(!this.inertia||a||this._preventMove)s._correction();else{var n=(new Date).getTime()-this.startTime;if(300>n){var o=((this.vertical?t.changedTouches[0].pageY:t.changedTouches[0].pageX)-this.start)*this.sensitivity,r=Math.abs(o)/n,c=this.factor*r;this.hasMaxSpeed&&c>this.maxSpeed&&(c=this.maxSpeed);var l=h+c*c/(2*this.deceleration)*(0>o?-1:1),u=1;l<this.min?l<this.min-this.maxRegion?(u=e((h-this.min+this.springMaxRegion)/(h-l)),l=this.min-this.springMaxRegion):(u=e((h-this.min+this.springMaxRegion*(this.min-l)/this.maxRegion)/(h-l)),l=this.min-this.springMaxRegion*(this.min-l)/this.maxRegion):l>this.max&&(l>this.max+this.maxRegion?(u=e((this.max+this.springMaxRegion-h)/(l-h)),l=this.max+this.springMaxRegion):(u=e((this.max+this.springMaxRegion*(l-this.max)/this.maxRegion-h)/(l-h)),l=this.max+this.springMaxRegion*(l-this.max)/this.maxRegion));var m=Math.round(r/s.deceleration)*u;s._to(Math.round(l),m,i,s.change,function(t){s.hasMax&&s.target[s.property]>s.max?(cancelAnimationFrame(s.tickID),s._to(s.max,600,i,s.change,s.animationEnd)):s.hasMin&&s.target[s.property]<s.min?(cancelAnimationFrame(s.tickID),s._to(s.min,600,i,s.change,s.animationEnd)):s.step?s._correction():s.animationEnd.call(s,t),s.change.call(this,t)})}else s._correction()}}this.x1=this.x2=this.y1=this.y2=null},_to:function(t,i,e,s,h){if(!this.fixed){var a=this.target,n=this.property,o=a[n],r=t-o,c=new Date,l=this,u=function(){var m=new Date-c;return m>=i?(a[n]=t,s&&s.call(l,t),void(h&&h.call(l,t))):(a[n]=r*e(m/i)+o,l.tickID=requestAnimationFrame(u),void(s&&s.call(l,a[n])))};u()}},_correction:function(){if(void 0!==this.step){var t=this.target,e=this.property,s=t[e],h=Math.floor(Math.abs(s/this.step)),a=s%this.step;Math.abs(a)>this.step/2?this._to((0>s?-1:1)*(h+1)*this.step,400,i,this.change,function(t){this._calculateIndex(),this.correctionEnd.call(this,t),this.animationEnd.call(this,t)}.bind(this)):this._to((0>s?-1:1)*h*this.step,400,i,this.change,function(t){this._calculateIndex(),this.correctionEnd.call(this,t),this.animationEnd.call(this,t)}.bind(this))}}},window.AlloyTouch=h}()});
define("resource/js/transform",function(){!function(){function t(t,s,i){for(var n=0,r=s.length;r>n;n++){var a=s[n];e(t,a,i)}}function e(t,e,s){Object.defineProperty(t,e,{get:function(){return this["_"+e]},set:function(t){this["_"+e]=t,s()}})}function s(t){return"object"==typeof HTMLElement?t instanceof HTMLElement:t&&"object"==typeof t&&null!==t&&1===t.nodeType&&"string"==typeof t.nodeName}function i(e,i){if(!e.___mixCSS3Transform){var n=["translateX","translateY","translateZ","scaleX","scaleY","scaleZ","rotateX","rotateY","rotateZ","skewX","skewY","originX","originY","originZ"],a=s(e);i||n.push("perspective"),e.___mixCSS3Transform=!0,t(e,n,function(){var t=e.matrix3d.identity().appendTransform(e.translateX,e.translateY,e.translateZ,e.scaleX,e.scaleY,e.scaleZ,e.rotateX,e.rotateY,e.rotateZ,e.skewX,e.skewY,e.originX,e.originY,e.originZ),s=(i?"":"perspective("+e.perspective+"px) ")+"matrix3d("+Array.prototype.slice.call(t.elements).join(",")+")";a?e.style.transform=e.style.msTransform=e.style.OTransform=e.style.MozTransform=e.style.webkitTransform=s:e.transform=s}),e.matrix3d=new r,i||(e.perspective=500),e.scaleX=e.scaleY=e.scaleZ=1,e.translateX=e.translateY=e.translateZ=e.rotateX=e.rotateY=e.rotateZ=e.skewX=e.skewY=e.originX=e.originY=e.originZ=0}}var n=.017453292519943295,r=function(t,e,s,i,n,r,a,o,h,l,c,u,d,p,f,m){this.elements=window.Float32Array?new Float32Array(16):[];var y=this.elements;y[0]=void 0!==t?t:1,y[4]=e||0,y[8]=s||0,y[12]=i||0,y[1]=n||0,y[5]=void 0!==r?r:1,y[9]=a||0,y[13]=o||0,y[2]=h||0,y[6]=l||0,y[10]=void 0!==c?c:1,y[14]=u||0,y[3]=d||0,y[7]=p||0,y[11]=f||0,y[15]=void 0!==m?m:1};r.prototype={set:function(t,e,s,i,n,r,a,o,h,l,c,u,d,p,f,m){var y=this.elements;return y[0]=t,y[4]=e,y[8]=s,y[12]=i,y[1]=n,y[5]=r,y[9]=a,y[13]=o,y[2]=h,y[6]=l,y[10]=c,y[14]=u,y[3]=d,y[7]=p,y[11]=f,y[15]=m,this},identity:function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},multiplyMatrices:function(t,e){var s=t.elements,i=this.elements,n=s[0],r=s[4],a=s[8],o=s[12],h=s[1],l=s[5],c=s[9],u=s[13],d=s[2],p=s[6],f=s[10],m=s[14],y=s[3],X=s[7],Y=s[11],w=s[15],M=e[0],g=e[1],v=e[2],_=e[3],Z=e[4],x=e[5],k=e[6],T=e[7],b=e[8],j=e[9],A=e[10],W=e[11],F=e[12],O=e[13],S=e[14],P=e[15];return i[0]=n*M+r*Z+a*b+o*F,i[4]=n*g+r*x+a*j+o*O,i[8]=n*v+r*k+a*A+o*S,i[12]=n*_+r*T+a*W+o*P,i[1]=h*M+l*Z+c*b+u*F,i[5]=h*g+l*x+c*j+u*O,i[9]=h*v+l*k+c*A+u*S,i[13]=h*_+l*T+c*W+u*P,i[2]=d*M+p*Z+f*b+m*F,i[6]=d*g+p*x+f*j+m*O,i[10]=d*v+p*k+f*A+m*S,i[14]=d*_+p*T+f*W+m*P,i[3]=y*M+X*Z+Y*b+w*F,i[7]=y*g+X*x+Y*j+w*O,i[11]=y*v+X*k+Y*A+w*S,i[15]=y*_+X*T+Y*W+w*P,this},_rounded:function(t,e){return e=Math.pow(10,e||15),Math.round(t*e)/e},_arrayWrap:function(t){return window.Float32Array?new Float32Array(t):t},appendTransform:function(t,e,s,i,r,a,o,h,l,c,u,d,p,f){var m=o*n,y=this._rounded(Math.cos(m)),X=this._rounded(Math.sin(m)),Y=h*n,w=this._rounded(Math.cos(Y)),M=this._rounded(Math.sin(Y)),g=l*n,v=this._rounded(Math.cos(-1*g)),_=this._rounded(Math.sin(-1*g));return this.multiplyMatrices(this,this._arrayWrap([1,0,0,t,0,y,X,e,0,-X,y,s,0,0,0,1])),this.multiplyMatrices(this,this._arrayWrap([w,0,M,0,0,1,0,0,-M,0,w,0,0,0,0,1])),this.multiplyMatrices(this,this._arrayWrap([v*i,_*r,0,0,-_*i,v*r,0,0,0,0,1*a,0,0,0,0,1])),(c||u)&&this.multiplyMatrices(this,this._arrayWrap([this._rounded(Math.cos(c*n)),this._rounded(Math.sin(c*n)),0,0,-1*this._rounded(Math.sin(u*n)),this._rounded(Math.cos(u*n)),0,0,0,0,1,0,0,0,0,1])),(d||p||f)&&(this.elements[12]-=d*this.elements[0]+p*this.elements[4]+f*this.elements[8],this.elements[13]-=d*this.elements[1]+p*this.elements[5]+f*this.elements[9],this.elements[14]-=d*this.elements[2]+p*this.elements[6]+f*this.elements[10]),this}};var a=function(t,e,s,i,n,r){return this.a=null==t?1:t,this.b=e||0,this.c=s||0,this.d=null==i?1:i,this.tx=n||0,this.ty=r||0,this};a.prototype={identity:function(){return this.a=this.d=1,this.b=this.c=this.tx=this.ty=0,this},appendTransform:function(t,e,s,i,r,a,o,h,l){if(r%360)var c=r*n,u=Math.cos(c),d=Math.sin(c);else u=1,d=0;return a||o?(a*=n,o*=n,this.append(Math.cos(o),Math.sin(o),-Math.sin(a),Math.cos(a),t,e),this.append(u*s,d*s,-d*i,u*i,0,0)):this.append(u*s,d*s,-d*i,u*i,t,e),(h||l)&&(this.tx-=h*this.a+l*this.c,this.ty-=h*this.b+l*this.d),this},append:function(t,e,s,i,n,r){var a=this.a,o=this.b,h=this.c,l=this.d;return this.a=t*a+e*h,this.b=t*o+e*l,this.c=s*a+i*h,this.d=s*o+i*l,this.tx=n*a+r*h+this.tx,this.ty=n*o+r*l+this.ty,this},initialize:function(t,e,s,i,n,r){return this.a=t,this.b=e,this.c=s,this.d=i,this.tx=n,this.ty=r,this},setValues:function(t,e,s,i,n,r){return this.a=null==t?1:t,this.b=e||0,this.c=s||0,this.d=null==i?1:i,this.tx=n||0,this.ty=r||0,this},copy:function(t){return this.setValues(t.a,t.b,t.c,t.d,t.tx,t.ty)}},i.getMatrix3D=function(t){var e={translateX:0,translateY:0,translateZ:0,rotateX:0,rotateY:0,rotateZ:0,skewX:0,skewY:0,originX:0,originY:0,originZ:0,scaleX:1,scaleY:1,scaleZ:1};for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);return(new r).identity().appendTransform(e.translateX,e.translateY,e.translateZ,e.scaleX,e.scaleY,e.scaleZ,e.rotateX,e.rotateY,e.rotateZ,e.skewX,e.skewY,e.originX,e.originY,e.originZ).elements},i.getMatrix2D=function(t){var e={translateX:0,translateY:0,rotation:0,skewX:0,skewY:0,originX:0,originY:0,scaleX:1,scaleY:1};for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);return(new a).identity().appendTransform(e.translateX,e.translateY,e.scaleX,e.scaleY,e.rotation,e.skewX,e.skewY,e.originX,e.originY)},window.Transform=i}()});
define('resource/js/image_magnifier.es6', function(require, exports, module) {

  "use strict";
  
  var _classCallCheck2 = require("node_modules/babel-runtime/helpers/classCallCheck");
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = require("node_modules/babel-runtime/helpers/createClass");
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  !function (w, d) {
    require("resource/js/sentinel.min");
    require("resource/js/alloy_touch");
    require("resource/js/transform");
    w.requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || function (fun) {
      setTimeout(fun(), 1000 / 60);
    };
    w.cancelAnimationFrame = w.cancelAnimationFrame || w.webkitCancelAnimationFrame || w.clearTimeout;
  
    var Magnifier = function () {
      function Magnifier(config) {
        var _this = this;
  
        (0, _classCallCheck3.default)(this, Magnifier);
  
        this.AutoIdArr = []; //存放随机码
        this.img_box = [];
        this.Auto_model = {}; //存放autoId对应的模型
        this.winWidth = window.innerWidth;
        if (Object.prototype.toString.call(config) !== "[object Object]") {
          return;
        }
        //没有传el就默认为所有的img
        config.el = config.el || "img";
        this.option = config;
        document.body.insertAdjacentHTML("afterbegin", "<div class=\"_img_magnifier_wrapper\">\r\n    <!--loading-->\r\n    <div class=\"_img_magnifier_spinner\">\r\n        <div class=\"_img_magnifier_bounce1\"></div>\r\n        <div class=\"_img_magnifier_bounce2\"></div>\r\n    </div>\r\n    <!--loading-->\r\n    <div class=\"_img_magnifier_box\">\r\n        <div class=\"_img_magnifier_item\">\r\n            <img class=\"_img_magnifier_view\" src=\"/resource/img/img2.jpg\" alt=\"\">\r\n        </div>\r\n        <div class=\"_img_magnifier_item\">\r\n                <img class=\"_img_magnifier_view\" src=\"/resource/img/img3.jpg\" alt=\"\">\r\n        </div>\r\n    </div>\r\n</div>".replace(/\/resource\/img\/img2.jpg/g, "../resource/img/img2.jpg").replace(/\/resource\/img\/img3.jpg/g, "../resource/img/img3.jpg"));
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
        this.touch = new AlloyTouch(function () {
          var box = _this.boxDOm;
          Transform(box);
          var currentTranslateX = 0;
          var leftBack_timer;
          //最左侧回退
          function backLeft() {
            if (currentTranslateX <= 0.5) {
              if (leftBack_timer) {
                cancelAnimationFrame(leftBack_timer);
              }
              return;
            } else {
              box.translateX -= currentTranslateX / 2;
              currentTranslateX = box.translateX;
            }
            leftBack_timer = requestAnimationFrame(backLeft);
          }
          //翻页
          var turnItem = function () {
            var timer,
                timer1,
                NumerDelay = 0;
            function turnLeft() {
              if (NumerDelay <= 0.5) {
                if (timer) {
                  cancelAnimationFrame(timer);
                }
                return;
              } else {
                box.translateX -= NumerDelay / 2;
                currentTranslateX = box.transformX;
                NumerDelay -= NumerDelay / 2;
              }
              timer = requestAnimationFrame(turnLeft);
            };
            function turnRight() {
              if (NumerDelay <= 0.5) {
                if (timer1) {
                  cancelAnimationFrame(timer1);
                }
                return;
              } else {
                box.translateX += NumerDelay / 2;
                currentTranslateX = box.transformX;
                NumerDelay -= NumerDelay / 2;
              }
              timer1 = requestAnimationFrame(turnRight);
            };
            return function (page, over) {
  
              //左翻页
              if (over >= _this.winWidth / 2) {
                NumerDelay = _this.winWidth - over;
                turnLeft();
              } else {
                NumerDelay = over;
                turnRight();
              }
            };
          }();
          return {
            touch: box,
            touchEnd: function touchEnd() {
              //最左侧
              if (currentTranslateX >= 100 || currentTranslateX >= 0 && currentTranslateX < 100) {
                backLeft();
              } else {
                var over = Math.abs(currentTranslateX) % _this.winWidth;
                var count = parseInt(Math.abs(currentTranslateX) / _this.winWidth);
                turnItem(count, over);
              }
            },
            pressMove: function pressMove(evt) {
              if (Math.abs(evt.deltaX) <= Math.abs(evt.deltaY)) return;
              //右滑动
              if (evt.deltaX > 0) {
                //判断是否是最左侧了,最多150
                if (currentTranslateX >= 100) {
                  return;
                }
                //左滑动
              } else if (evt.deltaX < 0) {
  
                //是否是最右侧
                if (Math.abs(currentTranslateX) > _this.winWidth * _this.img_box.length - (_this.winWidth - 100)) {
                  return;
                }
              }
  
              box.translateX += evt.deltaX;
              currentTranslateX = box.translateX;
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

