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
  require("/resource/js/alloy-crop.js");
  var VConsole = require('resource/js/vconsole.min');
  var vConsole = new VConsole();
  vConsole.show();
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
      this.currentIndex = 1; //当前第几个
      this.currentImg; //当前image
      if (Object.prototype.toString.call(config) !== "[object Object]") {
        return;
      }
      //没有传el就默认为所有的img
      config.el = config.el || "img";
      this.option = config;
      document.body.insertAdjacentHTML("afterbegin", "<div>\r\n    <div class=\"_img_magnifier_count_tip\">0/0</div>\r\n    <!--loading-->\r\n    <div class=\"_img_magnifier_spinner\">\r\n        <div class=\"_img_magnifier_bounce1\"></div>\r\n        <div class=\"_img_magnifier_bounce2\"></div>\r\n    </div>\r\n    <!--loading-->\r\n    <div class=\"_img_magnifier_box\">\r\n       <!--  <div class=\"_img_magnifier_item\">\r\n            <img class=\"_img_magnifier_view\" src=\"/resource/img/img2.jpg\" alt=\"\">\r\n        </div>\r\n        <div class=\"_img_magnifier_item\">\r\n                <img class=\"_img_magnifier_view\" src=\"/resource/img/img3.jpg\" alt=\"\">\r\n        </div> -->\r\n    </div>\r\n</div>".replace(/\/resource\/img\/img2.jpg/g, "../resource/img/img2.jpg").replace(/\/resource\/img\/img3.jpg/g, "../resource/img/img3.jpg"));
      this.loadingDom = document.querySelector("._img_magnifier_spinner");
      this.boxDOm = document.querySelector("._img_magnifier_box");
      var style = document.createElement("style");
      style.id = "_img_magnifier_style";
      style.innerHTML = "._no_scroll_,._no_scroll_ body{overflow:hidden}._no_scroll_ body{position:relative}._img_magnifier_wrapper{position:fixed;left:0;right:0;bottom:0;top:0;overflow:hidden;z-index:999;background-color:#000;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}._img_magnifier_count_tip{color:#fff;position:fixed;left:0;right:0;top:5%;text-align:center;z-index:999;width:100vw}._img_magnifier_spinner{width:60px;height:60px;position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:none}._img_magnifier_bounce1,._img_magnifier_bounce2{width:100%;height:100%;border-radius:50%;background-color:#67cf22;opacity:.6;position:absolute;top:0;left:0;-webkit-animation:bounce 2s infinite ease-in-out;animation:bounce 2s infinite ease-in-out}._img_magnifier_bounce2{-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes bounce{0%,100%{-webkit-transform:scale(0)}50%{-webkit-transform:scale(1)}}@keyframes bounce{0%,100%{transform:scale(0);-webkit-transform:scale(0)}50%{transform:scale(1);-webkit-transform:scale(1)}}._img_magnifier_box::after{content:\"\";clear:left}._img_magnifier_item{width:100vw;height:100vh;overflow:scroll;-webkit-overflow-scrolling:touch;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;float:left}._img_magnifier_item img{max-width:100%!important;-webkit-transform:scale(1.5);-ms-transform:scale(1.5);transform:scale(1.5);z-index:998}._img_magnifier_item img::after{content:\"图片404\";background-color:#eee;width:100vw;height:40vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:fixed;color:#000;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}" + "._img_magnifier_item{width:" + window.innerWidth + "px}";
      document.head.appendChild(style);
      (function() {
    var cssContent = '._no_scroll_,._no_scroll_ body{overflow:hidden}._no_scroll_ body{position:relative}._img_magnifier_wrapper{position:fixed;left:0;right:0;bottom:0;top:0;overflow:hidden;z-index:999;background-color:#000;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}._img_magnifier_count_tip{color:#fff;position:fixed;left:0;right:0;top:5%;text-align:center;z-index:999;width:100vw}._img_magnifier_spinner{width:60px;height:60px;position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:none}._img_magnifier_bounce1,._img_magnifier_bounce2{width:100%;height:100%;border-radius:50%;background-color:#67cf22;opacity:.6;position:absolute;top:0;left:0;-webkit-animation:bounce 2s infinite ease-in-out;animation:bounce 2s infinite ease-in-out}._img_magnifier_bounce2{-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes bounce{0%,100%{-webkit-transform:scale(0)}50%{-webkit-transform:scale(1)}}@keyframes bounce{0%,100%{transform:scale(0);-webkit-transform:scale(0)}50%{transform:scale(1);-webkit-transform:scale(1)}}._img_magnifier_box::after{content:"";clear:left}._img_magnifier_item{width:100vw;height:100vh;overflow:scroll;-webkit-overflow-scrolling:touch;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;float:left}._img_magnifier_item img{max-width:100%!important;-webkit-transform:scale(1.5);-ms-transform:scale(1.5);transform:scale(1.5);z-index:998}._img_magnifier_item img::after{content:"图片404";background-color:#eee;width:100vw;height:40vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:fixed;color:#000;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}';
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
          var current = _this;
          function turnLeft() {
            if (NumerDelay <= 0.5) {
              //计算当前页数
              current.currentIndex = parseInt(Math.abs(currentTranslateX) / current.winWidth) + 1;
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
              current.currentIndex = parseInt(Math.abs(currentTranslateX) / current.winWidth) + 1;
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
            if (_this.currentImg && _this.currentImg.scaleX > 1) return;
            //最左侧
            if (currentTranslateX >= 100 || currentTranslateX >= 0 && currentTranslateX < 100) {
              backLeft();
              _this.currentIndex = 1;
            } else {
              var over = Math.abs(currentTranslateX) % _this.winWidth;
              var count = parseInt(Math.abs(currentTranslateX) / _this.winWidth);
              turnItem(count, over);
            }
          },
          pressMove: function pressMove(evt) {
            if (_this.currentImg && _this.currentImg.scaleX > 1) return;
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
      //注册手势事件

      var af = new AlloyFinger(this.boxDOm, function () {
        var initScale = 1,
            currentIndex;
        return {
          multipointStart: function multipointStart() {
            if (_this.currentImg) {
              initScale = _this.currentImg.scaleX;
            }
          },
          pinch: function pinch(evt) {
            //缓存当前DOM                    
            if (_this.currentImg == null || currentIndex !== _this.currentIndex) {
              [].map.call(document.querySelector("._img_magnifier_box").querySelectorAll("._img_magnifier_view"), function (element, index) {
                if (index + 1 == _this.currentIndex) {
                  currentIndex = _this.currentIndex;
                  _this.currentImg = element;
                  Transform(_this.currentImg);
                  initScale = _this.currentImg.scaleX;
                }
              });
            }
            if (_this.currentImg) {
              _this.currentImg.scaleX = _this.currentImg.scaleY = initScale * evt.zoom;
            }
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

  var a = new Magnifier({ attr: "data-src" });
}(window, document);