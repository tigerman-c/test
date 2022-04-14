import _initializerDefineProperty from "@babel/runtime/helpers/initializerDefineProperty";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime/helpers/applyDecoratedDescriptor";
import _initializerWarningHelper from "@babel/runtime/helpers/initializerWarningHelper";

var _class, _descriptor;

function decorator() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  args.forEach(function (arg, index) {
    console.log("\u53C2\u6570".concat(index), arg);
  });
  console.log('****************');
}

var TargetClass = (_class = /*#__PURE__*/function () {
  function TargetClass() {
    _classCallCheck(this, TargetClass);

    _initializerDefineProperty(this, "field", _descriptor, this);
  }

  _createClass(TargetClass, [{
    key: "fn",
    value: function fn() {}
  }, {
    key: "getFn",
    get: function get() {}
  }]);

  return TargetClass;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "field", [decorator], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
}), _applyDecoratedDescriptor(_class.prototype, "fn", [decorator], Object.getOwnPropertyDescriptor(_class.prototype, "fn"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getFn", [decorator], Object.getOwnPropertyDescriptor(_class.prototype, "getFn"), _class.prototype)), _class);
var targetOne = new TargetClass();
console.log(targetOne.field, Object.getOwnPropertyDescriptor(targetOne, 'field'));
