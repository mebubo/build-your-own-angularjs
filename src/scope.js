'use strict';

var _ = require('lodash');

function initWatchVal() {}

function Scope() {
  this.$$watchers = [];
}

Scope.prototype.$watch = function(watchFn, listenerFn) {
  var watcher = {
    watchFn: watchFn,
    listenerFn: listenerFn || function() {},
    last: initWatchVal
  };
  this.$$watchers.push(watcher);
};

Scope.prototype.$digest = function() {
  var self = this;
  _.forEach(this.$$watchers, function(watcher) {
    var newValue = watcher.watchFn(self);
    var oldValue = watcher.last;
    if (newValue !== oldValue) {
      watcher.listenerFn(newValue,
                         oldValue === initWatchVal ? newValue : oldValue,
                         self);
      watcher.last = newValue;
    }
  });
};

module.exports = Scope;
