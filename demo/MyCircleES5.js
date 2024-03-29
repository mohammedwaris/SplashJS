"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

splashjs.Class.define("com.silverbrain", function () {
  var Sprite = splashjs.Class.get("splashjs.display.Sprite");
  var Shape = splashjs.Class.get("splashjs.display.Shape");
  var Color = splashjs.Class.get("splashjs.utils.Color");

  var MyCircle =
  /*#__PURE__*/
  function (_Sprite) {
    _inherits(MyCircle, _Sprite);

    function MyCircle() {
      var _this;

      _classCallCheck(this, MyCircle);

      _this.circle = splashjs.display.Shape.createCircle(20);

      _this.circle.setFillColor(Color.YELLOW);

      _this.circle.setStrokeColor(Color.RED);

      _this.addChild(_this.circle);

      return _possibleConstructorReturn(_this);
    }

    return MyCircle;
  }(Sprite);

  return MyCircle;
});