'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _functions = require('./functions');

function immutable(StoreModel, overrides) {
  StoreModel.config = (0, _functions.assign)({
    setState: function setState(currentState, nextState) {
      this.state = nextState;
      return this.state;
    },

    getState: function getState(currentState) {
      return currentState;
    },

    onSerialize: function onSerialize(state) {
      return state.toJS();
    },

    onDeserialize: function onDeserialize(data) {
      return _immutable2['default'].fromJS(data);
    }
  }, overrides);

  return StoreModel;
}

exports['default'] = immutable;
module.exports = exports['default'];