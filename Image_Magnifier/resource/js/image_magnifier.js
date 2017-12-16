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
        document.body.insertAdjacentHTML("afterbegin", "<div class=\"_img_magnifier_wrapper\">\r\n    <!--loading-->\r\n    <div class=\"_img_magnifier_spinner\">\r\n        <div class=\"_img_magnifier_bounce1\"></div>\r\n        <div class=\"_img_magnifier_bounce2\"></div>\r\n    </div>\r\n    <!--loading-->\r\n    <div class=\"_img_magnifier_box\">\r\n        <div class=\"_img_magnifier_item\">\r\n            <img class=\"_img_magnifier_view\" src=\"/resource/img/img2.jpg\" alt=\"\">\r\n        </div>\r\n        <div class=\"_img_magnifier_item\">\r\n                <img class=\"_img_magnifier_view\" src=\"/resource/img/img3.jpg\" alt=\"\">\r\n        </div>\r\n    </div>\r\n</div>".replace(/\/resource\/img\/img2.jpg/g, "../img/img2.jpg?=t1513394718858").replace(/\/resource\/img\/img3.jpg/g, "../img/img3.jpg?=t1513394718858"));
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
