// Type definitions for reflux 0.3.0
// Project: https://github.com/reflux/refluxjs
// Definitions by: saddieeiddas <https://github.com/saddieeiddas>

/// <reference path="reflux.d.ts" />

import * as Reflux from 'reflux';

console.log(Reflux.version['reflux-core']);
console.log(Reflux.createStore({}));
console.log(Reflux.PublisherMethods.triggerPromise().then());

console.log(Reflux.createActions({
  test1: () => {},
  test2: () => {},
}));

console.log(Reflux.EventEmitter);
console.log(Reflux.utils.EventEmitter);
console.log(Reflux.Promise);

console.log(Reflux.connect('test', 'test').getInitialState());

console.log(Reflux.ListenerMixin.componentWillUnmount());

console.log(Reflux.listenTo('test', () => {}, () => {}).componentWillUnmount());
