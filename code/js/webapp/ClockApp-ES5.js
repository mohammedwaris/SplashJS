"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ClockApp =
/*#__PURE__*/
function (_splashjs$display$Spr) {
  _inherits(ClockApp, _splashjs$display$Spr);

  function ClockApp() {
    var _this;

    _classCallCheck(this, ClockApp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ClockApp).call(this));
    _this.englishNumbers = ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "1", "2"];
    _this.numbersText = [];
    _this.romanNumbers = ["III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "I", "II"];
    _this.currentNumber = "english";
    _this.secondHand;
    _this.minuteHand;
    _this.hourHand;
    _this.timer;

    _this.addEventListener(splashjs.events.Event.ADDED_TO_STAGE, function (event) {
      _this.addedToStage(event);
    });

    return _this;
  }

  _createClass(ClockApp, [{
    key: "addedToStage",
    value: function addedToStage(event) {
      this.init();
      this.getStage().setColor(splashjs.utils.Color.RED);
      this.setRegXY(this.getWidth() / 2, this.getHeight() / 2);
      this.setXY(this.getStage().getWidth() / 2, this.getStage().getHeight() / 2);
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      var bigCircle,
          smallCircle,
          length = 150,
          deg = 0,
          centerX = 190,
          centerY = 190;
      var dot,
          handLength = 175,
          x,
          y,
          i,
          numText,
          per,
          base;
      bigCircle = new splashjs.display.Circle(190);
      bigCircle.setFillColor(splashjs.utils.Color.BLACK);
      bigCircle.setXY(0, 0);
      smallCircle = new splashjs.display.Circle(170);
      smallCircle.setFillColor(splashjs.utils.Color.WHITE);
      smallCircle.setXY(20, 20);
      this.addChild(bigCircle);
      this.addChild(smallCircle);

      for (i = 0; i < 12; i++) {
        numText = new splashjs.text.StaticText(this.englishNumbers[i]);
        numText.setColor(splashjs.utils.Color.BLACK);
        per = Math.sin(deg * (Math.PI / 180)) * length;
        base = Math.cos(deg * (Math.PI / 180)) * length;
        x = centerX + base;
        y = centerY + per;
        this.addChild(numText);
        numText.setRegXY(numText.getWidth() / 2, numText.getHeight() / 2);
        numText.setXY(x, y);
        deg += 30;
        this.numbersText[i] = numText;
      }

      this.secondHand = new splashjs.display.Line(handLength);
      this.secondHand.setStrokeColor(splashjs.utils.Color.RED);
      this.secondHand.setStrokeWidth(1);
      this.minuteHand = new splashjs.display.Line(handLength);
      this.minuteHand.setStrokeWidth(4);
      this.hourHand = new splashjs.display.Line(handLength - 50);
      this.hourHand.setStrokeWidth(6);
      dot = new splashjs.display.Circle(10);
      dot.setStrokeWidth(0);
      dot.setFillColor(splashjs.utils.Color.RED);
      this.addChild(this.hourHand);
      this.addChild(this.minuteHand);
      this.addChild(this.secondHand);
      this.addChild(dot);
      dot.setRegXY(dot.getWidth() / 2, dot.getHeight() / 2);
      dot.setXY(centerX, centerY);
      this.minuteHand.setRegX(this.minuteHand.getWidth() * 0.15);
      this.minuteHand.setRegY(this.minuteHand.getHeight() / 2);
      this.minuteHand.setXY(centerX, centerY);
      this.hourHand.setRegX(this.minuteHand.getRegX());
      this.hourHand.setRegY(this.hourHand.getHeight() / 2);
      this.hourHand.setXY(centerX, centerY);
      this.secondHand.setRegX(this.minuteHand.getRegX());
      this.secondHand.setXY(centerX, centerY);
      this.timer = new splashjs.utils.Timer(10);
      this.timer.addEventListener(splashjs.events.TimerEvent.TIMER, function () {
        _this2.start();
      });
      this.timer.start();
    }
  }, {
    key: "start",
    value: function start() {
      var date, hour, min, sec, milliSec, secHandAngle, minHandAngle, hourHandAngle;
      date = new Date();
      milliSec = date.getMilliseconds();
      sec = date.getSeconds();
      sec = sec + milliSec / 1000;
      min = date.getMinutes();
      min = min + sec / 60;
      hour = date.getHours();
      if (hour >= 12) hour -= 12;
      hour = hour + min / 60;
      hourHandAngle = hour * 30 - 90;
      this.hourHand.setRotation(hourHandAngle);
      minHandAngle = min * 6 - 90;
      this.minuteHand.setRotation(minHandAngle);
      secHandAngle = sec * 6 - 90;
      this.secondHand.setRotation(secHandAngle);
    }
  }, {
    key: "toggleNumbers",
    value: function toggleNumbers() {
      if (this.currentNumber == "english") {
        for (var i = 0; i < this.numbersText.length; i++) {
          this.numbersText[i].setText(this.romanNumbers[i]);
        }

        this.currentNumber = "roman";
      } else {
        for (var i = 0; i < this.numbersText.length; i++) {
          this.numbersText[i].setText(this.englishNumbers[i]);
        }

        this.currentNumber = "english";
      }
    }
  }]);

  return ClockApp;
}(splashjs.display.Sprite);