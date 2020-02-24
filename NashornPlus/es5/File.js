"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sb = sb || {};
sb.filesystem = sb.filesystem || {};

sb.filesystem.File =
/*#__PURE__*/
function () {
  function File(args) {
    _classCallCheck(this, File);

    if (_typeof(args) == undefined) this.nativeFile = new java.io.File();else if (typeof args == 'string') this.nativeFile = new java.io.File(args);
  }

  _createClass(File, [{
    key: "getAbsolutePath",
    value: function getAbsolutePath() {
      return this.nativeFile.getAbsolutePath();
    }
  }], [{
    key: "readFileAsString",
    value: function readFileAsString(fileName) {
      return new java.lang.String(java.nio.file.Files.readAllBytes(java.nio.file.Paths.get(fileName)));
    }
  }, {
    key: "writeStringAsFile",
    value: function writeStringAsFile(str, filename) {
      java.nio.file.Files.write(java.nio.file.Paths.get(filename), str.getBytes());
    }
  }]);

  return File;
}();