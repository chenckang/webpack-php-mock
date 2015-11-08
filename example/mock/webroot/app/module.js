webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(211)['default'];
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(157);
	
	var _reactRouter2 = _interopRequireDefault(_reactRouter);
	
	var _routes = __webpack_require__(212);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	_reactRouter2['default'].run(_routes2['default'], _reactRouter2['default'].HistoryLocation, function (Root, state) {
	    _react2['default'].render(_react2['default'].createElement(Root, state), document.getElementById('content'));
	});

/***/ },

/***/ 211:
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },

/***/ 212:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(211)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(157);
	
	var _componentsMain = __webpack_require__(213);
	
	var _componentsMain2 = _interopRequireDefault(_componentsMain);
	
	var _componentsExample = __webpack_require__(243);
	
	var _componentsExample2 = _interopRequireDefault(_componentsExample);
	
	var routes = _react2['default'].createElement(
	    _reactRouter.Route,
	    { handler: _componentsMain2['default'] },
	    _react2['default'].createElement(_reactRouter.Route, { name: 'example', handler: _componentsExample2['default'] })
	);
	
	exports['default'] = routes;
	module.exports = exports['default'];

/***/ },

/***/ 213:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(214)['default'];
	
	var _inherits = __webpack_require__(228)['default'];
	
	var _createClass = __webpack_require__(239)['default'];
	
	var _classCallCheck = __webpack_require__(242)['default'];
	
	var _interopRequireDefault = __webpack_require__(211)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(157);
	
	var Main = (function (_React$Component) {
	    _inherits(Main, _React$Component);
	
	    function Main() {
	        _classCallCheck(this, Main);
	
	        _get(Object.getPrototypeOf(Main.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Main, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                null,
	                _react2['default'].createElement(
	                    'h1',
	                    null,
	                    'Example'
	                ),
	                _react2['default'].createElement(
	                    _reactRouter.Link,
	                    { to: 'example' },
	                    'Go to example'
	                ),
	                _react2['default'].createElement(_reactRouter.RouteHandler, null)
	            );
	        }
	    }]);
	
	    return Main;
	})(_react2['default'].Component);
	
	exports['default'] = Main;
	module.exports = exports['default'];

/***/ },

/***/ 214:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$getOwnPropertyDescriptor = __webpack_require__(215)["default"];
	
	exports["default"] = function get(_x, _x2, _x3) {
	  var _again = true;
	
	  _function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	    _again = false;
	    if (object === null) object = Function.prototype;
	
	    var desc = _Object$getOwnPropertyDescriptor(object, property);
	
	    if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);
	
	      if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;
	        _x2 = property;
	        _x3 = receiver;
	        _again = true;
	        desc = parent = undefined;
	        continue _function;
	      }
	    } else if ("value" in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;
	
	      if (getter === undefined) {
	        return undefined;
	      }
	
	      return getter.call(receiver);
	    }
	  }
	};
	
	exports.__esModule = true;

/***/ },

/***/ 215:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(216), __esModule: true };

/***/ },

/***/ 216:
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(217);
	__webpack_require__(218);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },

/***/ 217:
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },

/***/ 218:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(219);
	
	__webpack_require__(223)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },

/***/ 219:
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(220)
	  , defined = __webpack_require__(222);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },

/***/ 220:
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(221);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },

/***/ 221:
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },

/***/ 222:
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },

/***/ 223:
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $def  = __webpack_require__(224)
	  , core  = __webpack_require__(226)
	  , fails = __webpack_require__(227);
	module.exports = function(KEY, exec){
	  var $def = __webpack_require__(224)
	    , fn   = (core.Object || {})[KEY] || Object[KEY]
	    , exp  = {};
	  exp[KEY] = exec(fn);
	  $def($def.S + $def.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },

/***/ 224:
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(225)
	  , core      = __webpack_require__(226)
	  , PROTOTYPE = 'prototype';
	var ctx = function(fn, that){
	  return function(){
	    return fn.apply(that, arguments);
	  };
	};
	var $def = function(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & $def.G
	    , isProto  = type & $def.P
	    , target   = isGlobal ? global : type & $def.S
	        ? global[name] : (global[name] || {})[PROTOTYPE]
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if(isGlobal && typeof target[key] != 'function')exp = source[key];
	    // bind timers to global for call from export context
	    else if(type & $def.B && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & $def.W && target[key] == out)!function(C){
	      exp = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      exp[PROTOTYPE] = C[PROTOTYPE];
	    }(out);
	    else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export
	    exports[key] = exp;
	    if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$def.F = 1;  // forced
	$def.G = 2;  // global
	$def.S = 4;  // static
	$def.P = 8;  // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	module.exports = $def;

/***/ },

/***/ 225:
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },

/***/ 226:
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.5'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },

/***/ 227:
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },

/***/ 228:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$create = __webpack_require__(229)["default"];
	
	var _Object$setPrototypeOf = __webpack_require__(231)["default"];
	
	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	exports.__esModule = true;

/***/ },

/***/ 229:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(230), __esModule: true };

/***/ },

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(217);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },

/***/ 231:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(232), __esModule: true };

/***/ },

/***/ 232:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(233);
	module.exports = __webpack_require__(226).Object.setPrototypeOf;

/***/ },

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $def = __webpack_require__(224);
	$def($def.S, 'Object', {setPrototypeOf: __webpack_require__(234).set});

/***/ },

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(217).getDesc
	  , isObject = __webpack_require__(235)
	  , anObject = __webpack_require__(236);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(237)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },

/***/ 235:
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },

/***/ 236:
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(235);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(238);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },

/***/ 238:
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$defineProperty = __webpack_require__(240)["default"];
	
	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	
	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();
	
	exports.__esModule = true;

/***/ },

/***/ 240:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(241), __esModule: true };

/***/ },

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(217);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },

/***/ 242:
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },

/***/ 243:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(214)['default'];
	
	var _inherits = __webpack_require__(228)['default'];
	
	var _createClass = __webpack_require__(239)['default'];
	
	var _classCallCheck = __webpack_require__(242)['default'];
	
	var _interopRequireDefault = __webpack_require__(211)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _altUtilsConnectToStores = __webpack_require__(244);
	
	var _altUtilsConnectToStores2 = _interopRequireDefault(_altUtilsConnectToStores);
	
	var _storesDummyStore = __webpack_require__(245);
	
	var _storesDummyStore2 = _interopRequireDefault(_storesDummyStore);
	
	var _actionsDummyActions = __webpack_require__(249);
	
	var _actionsDummyActions2 = _interopRequireDefault(_actionsDummyActions);
	
	var Example = (function (_React$Component) {
	    _inherits(Example, _React$Component);
	
	    function Example(props) {
	        var _this = this;
	
	        _classCallCheck(this, _Example);
	
	        _get(Object.getPrototypeOf(_Example.prototype), 'constructor', this).call(this, props);
	
	        this.onChange = function (evt) {
	            _this.setState({ name: evt.target.value });
	            _actionsDummyActions2['default'].updateName(evt.target.value);
	        };
	
	        this.state = {
	            name: props.name
	        };
	    }
	
	    _createClass(Example, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                null,
	                _react2['default'].createElement('input', { type: 'text', value: this.state.name, onChange: this.onChange }),
	                _react2['default'].createElement(
	                    'h1',
	                    null,
	                    'It works: ',
	                    this.props.name
	                )
	            );
	        }
	    }], [{
	        key: 'getStores',
	        value: function getStores(props) {
	            return [_storesDummyStore2['default']];
	        }
	    }, {
	        key: 'getPropsFromStores',
	        value: function getPropsFromStores(props) {
	            return _storesDummyStore2['default'].getState();
	        }
	    }]);
	
	    var _Example = Example;
	    Example = (0, _altUtilsConnectToStores2['default'])(Example) || Example;
	    return Example;
	})(_react2['default'].Component);
	
	exports['default'] = Example;
	module.exports = exports['default'];

/***/ },

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * 'Higher Order Component' that controls the props of a wrapped
	 * component via stores.
	 *
	 * Expects the Component to have two static methods:
	 *   - getStores(): Should return an array of stores.
	 *   - getPropsFromStores(props): Should return the props from the stores.
	 *
	 * Example using old React.createClass() style:
	 *
	 *    const MyComponent = React.createClass({
	 *      statics: {
	 *        getStores(props) {
	 *          return [myStore]
	 *        },
	 *        getPropsFromStores(props) {
	 *          return myStore.getState()
	 *        }
	 *      },
	 *      render() {
	 *        // Use this.props like normal ...
	 *      }
	 *    })
	 *    MyComponent = connectToStores(MyComponent)
	 *
	 *
	 * Example using ES6 Class:
	 *
	 *    class MyComponent extends React.Component {
	 *      static getStores(props) {
	 *        return [myStore]
	 *      }
	 *      static getPropsFromStores(props) {
	 *        return myStore.getState()
	 *      }
	 *      render() {
	 *        // Use this.props like normal ...
	 *      }
	 *    }
	 *    MyComponent = connectToStores(MyComponent)
	 *
	 * A great explanation of the merits of higher order components can be found at
	 * http://bit.ly/1abPkrP
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _functions = __webpack_require__(204);
	
	function connectToStores(Spec) {
	  var Component = arguments.length <= 1 || arguments[1] === undefined ? Spec : arguments[1];
	  return (function () {
	    // Check for required static methods.
	    if (!(0, _functions.isFunction)(Spec.getStores)) {
	      throw new Error('connectToStores() expects the wrapped component to have a static getStores() method');
	    }
	    if (!(0, _functions.isFunction)(Spec.getPropsFromStores)) {
	      throw new Error('connectToStores() expects the wrapped component to have a static getPropsFromStores() method');
	    }
	
	    var StoreConnection = _react2['default'].createClass({
	      displayName: 'Stateful' + (Component.displayName || Component.name || 'Container'),
	
	      getInitialState: function getInitialState() {
	        return Spec.getPropsFromStores(this.props, this.context);
	      },
	
	      componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        this.setState(Spec.getPropsFromStores(nextProps, this.context));
	      },
	
	      componentDidMount: function componentDidMount() {
	        var _this = this;
	
	        var stores = Spec.getStores(this.props, this.context);
	        this.storeListeners = stores.map(function (store) {
	          return store.listen(_this.onChange);
	        });
	        if (Spec.componentDidConnect) {
	          Spec.componentDidConnect(this.props, this.context);
	        }
	      },
	
	      componentWillUnmount: function componentWillUnmount() {
	        this.storeListeners.forEach(function (unlisten) {
	          return unlisten();
	        });
	      },
	
	      onChange: function onChange() {
	        this.setState(Spec.getPropsFromStores(this.props, this.context));
	      },
	
	      render: function render() {
	        return _react2['default'].createElement(Component, (0, _functions.assign)({}, this.props, this.state));
	      }
	    });
	    if (Component.contextTypes) {
	      StoreConnection.contextTypes = Component.contextTypes;
	    }
	
	    return StoreConnection;
	  })();
	}
	
	exports['default'] = connectToStores;
	module.exports = exports['default'];

/***/ },

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createDecoratedClass = __webpack_require__(246)['default'];
	
	var _classCallCheck = __webpack_require__(242)['default'];
	
	var _interopRequireDefault = __webpack_require__(211)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _dispatcherControl = __webpack_require__(247);
	
	var _dispatcherControl2 = _interopRequireDefault(_dispatcherControl);
	
	var _altUtilsDecorators = __webpack_require__(248);
	
	var _actionsDummyActions = __webpack_require__(249);
	
	var _actionsDummyActions2 = _interopRequireDefault(_actionsDummyActions);
	
	var DummyStore = (function () {
	    function DummyStore() {
	        _classCallCheck(this, _DummyStore);
	
	        this.name = "awesome";
	    }
	
	    _createDecoratedClass(DummyStore, [{
	        key: 'updateName',
	        decorators: [(0, _altUtilsDecorators.bind)(_actionsDummyActions2['default'].updateName)],
	        value: function updateName(name) {
	            this.name = name;
	        }
	    }]);
	
	    var _DummyStore = DummyStore;
	    DummyStore = (0, _altUtilsDecorators.createStore)(_dispatcherControl2['default'])(DummyStore) || DummyStore;
	    return DummyStore;
	})();
	
	exports['default'] = DummyStore;
	module.exports = exports['default'];

/***/ },

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$defineProperty = __webpack_require__(240)["default"];
	
	exports["default"] = (function () {
	  function defineProperties(target, descriptors, initializers) {
	    for (var i = 0; i < descriptors.length; i++) {
	      var descriptor = descriptors[i];
	      var decorators = descriptor.decorators;
	      var key = descriptor.key;
	      delete descriptor.key;
	      delete descriptor.decorators;
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor || descriptor.initializer) descriptor.writable = true;
	
	      if (decorators) {
	        for (var f = 0; f < decorators.length; f++) {
	          var decorator = decorators[f];
	
	          if (typeof decorator === "function") {
	            descriptor = decorator(target, key, descriptor) || descriptor;
	          } else {
	            throw new TypeError("The decorator for method " + descriptor.key + " is of the invalid type " + typeof decorator);
	          }
	        }
	
	        if (descriptor.initializer !== undefined) {
	          initializers[key] = descriptor;
	          continue;
	        }
	      }
	
	      _Object$defineProperty(target, key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers);
	    if (staticProps) defineProperties(Constructor, staticProps, staticInitializers);
	    return Constructor;
	  };
	})();
	
	exports.__esModule = true;

/***/ },

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(211)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _alt = __webpack_require__(199);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	var flux = new _alt2['default']();
	
	exports['default'] = flux;
	module.exports = exports['default'];

/***/ },

/***/ 248:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.decorate = decorate;
	exports.createActions = createActions;
	exports.createStore = createStore;
	exports.bind = bind;
	exports.bindWithContext = bindWithContext;
	exports.expose = expose;
	exports.datasource = datasource;
	
	var _functions = __webpack_require__(204);
	
	/* istanbul ignore next */
	function NoopClass() {}
	var builtInProto = Object.getOwnPropertyNames(NoopClass.prototype);
	
	function addMeta(description, decoration) {
	  description.value.alt = description.value.alt || {};
	  (0, _functions.assign)(description.value.alt, decoration);
	  return description;
	}
	
	function decorate(context) {
	  return function (Store) {
	    var proto = Store.prototype;
	    var publicMethods = {};
	    var bindListeners = {};
	
	    Object.getOwnPropertyNames(proto).forEach(function (name) {
	      if (builtInProto.indexOf(name) !== -1) return;
	
	      var meta = proto[name].alt;
	      if (!meta) {
	        return;
	      }
	
	      /* istanbul ignore else */
	      if (meta.actions) {
	        bindListeners[name] = meta.actions;
	      } else if (meta.actionsWithContext) {
	        bindListeners[name] = meta.actionsWithContext(context);
	      } else if (meta.publicMethod) {
	        publicMethods[name] = proto[name];
	      }
	    });
	
	    Store.config = (0, _functions.assign)({
	      bindListeners: bindListeners,
	      publicMethods: publicMethods
	    }, Store.config);
	
	    return Store;
	  };
	}
	
	function createActions(alt) {
	  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }
	
	  return function (Actions) {
	    return alt.createActions.apply(alt, [Actions, {}].concat(args));
	  };
	}
	
	function createStore(alt) {
	  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	    args[_key2 - 1] = arguments[_key2];
	  }
	
	  return function (Store) {
	    return alt.createStore.apply(alt, [decorate(alt)(Store), undefined].concat(args));
	  };
	}
	
	function bind() {
	  for (var _len3 = arguments.length, actionIds = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	    actionIds[_key3] = arguments[_key3];
	  }
	
	  return function (obj, name, description) {
	    return addMeta(description, { actions: actionIds });
	  };
	}
	
	function bindWithContext(fn) {
	  return function (obj, name, description) {
	    return addMeta(description, { actionsWithContext: fn });
	  };
	}
	
	function expose(obj, name, description) {
	  return addMeta(description, { publicMethod: true });
	}
	
	function datasource() {
	  var source = _functions.assign.apply(undefined, arguments);
	  return function (Store) {
	    Store.config = (0, _functions.assign)({ datasource: source }, Store.config);
	    return Store;
	  };
	}

/***/ },

/***/ 249:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck = __webpack_require__(242)['default'];
	
	var _interopRequireDefault = __webpack_require__(211)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _dispatcherControl = __webpack_require__(247);
	
	var _dispatcherControl2 = _interopRequireDefault(_dispatcherControl);
	
	var _altUtilsDecorators = __webpack_require__(248);
	
	var DummyActions = (function () {
	    function DummyActions(props) {
	        _classCallCheck(this, _DummyActions);
	
	        this.generateActions('updateName');
	    }
	
	    var _DummyActions = DummyActions;
	    DummyActions = (0, _altUtilsDecorators.createActions)(_dispatcherControl2['default'])(DummyActions) || DummyActions;
	    return DummyActions;
	})();
	
	exports['default'] = DummyActions;
	module.exports = exports['default'];

/***/ }

});
//# sourceMappingURL=module.js.map