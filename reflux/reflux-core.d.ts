// Type definitions for reflux 0.3.0
// Project: https://github.com/reflux/refluxjs
// Definitions by: saddieeiddas <https://github.com/saddieeiddas>

/// <reference path="../eventemitter3/eventemitter3.d.ts" />

declare module __Reflux {
  var version: version;
  var ActionMethods: ActionMethods|any;
  var ListenerMethods: ListenerMethods;
  var PublisherMethods: PublisherMethods;
  var StoreMethods: StoreMethods|any;
  var createAction: createAction;
  var createStore: createStore;
  var all: StaticJoin;
  var joinTrailing: StaticJoin;
  var joinLeading: StaticJoin;
  var joinStrict: StaticJoin;
  var joinConcat: StaticJoin;
  var utils: Utils;
  var EventEmitter: EventEmitter3.EventEmitter;
  var Promise: Promise<any>;
  var createActions: createActions;
  var setEventEmitter: setEventEmitter;
  var setPromise: setPromise;
  var setPromiseFactory: setPromiseFactory;
  var nextTick: nextTick;
  var use: use;
  var __keep: __keep;

  interface version {
    'reflux-core': string;
  }

  interface ActionMethods {
  }

  interface ListenerMethods {
    hasListener(listenable: any): boolean;
    listenToMany(listenables: any): void;
    validateListening(listenable: any): string|void;
    listenTo(listenable: any, callback: Function|string, defaultCallback?: Function|string): ListenerSubscriptionObject;
    stopListeningTo(listenable: any): boolean;
    stopListeningToAll(): void;
    fetchInitialState(listenable: any, defaultCallback?: () => {}|string): () => {};
    joinTrailing(listenable: any, callback: Function|string): ListenerSubscriptionObject;
    joinLeading(listenable: any, callback: Function|string): ListenerSubscriptionObject;
    joinConcat(listenable: any, callback: Function|string): ListenerSubscriptionObject;
    joinStrict(listenable: any, callback: Function|string): ListenerSubscriptionObject;
  }

  interface ListenerSubscriptionObject {
    stop: () => {};
    listenable: any;
  }

  interface PublisherMethods {
    preEmit(...args: any[]): void;
    shouldEmit(...args: any[]): boolean;
    listen(callback: Function, bindContext?: any): (...args: any[]) => {};
    promise(promise: Promise<any>): void;
    listenAndPromise(callback: Function, bindContext?: any): (...args: any[]) => {};
    trigger(...args: any[]): void;
    triggerAsync(...args: any[]): void;
    triggerPromise(...args: any[]): Promise<any>;
  }

  interface StoreMethods {
  }

  interface createAction {
    (definition: any, ...args: any[]): any;
  }

  interface createStore {
    (definition: any, ...args: any[]): Store|any;
  }

  interface Store extends ListenerMethods, PublisherMethods, StoreMethods {
    subscriptions: Array<any>;
    emitter: EventEmitter3.EventEmitter;
    eventLabel: string;
    init(): void;
  }

  interface StaticJoin {
    (...args: any[]): Store;
  }

  interface Utils {
    capitalize(string: string): string;
    callbackName(string: string, prefix: string): string;
    environment: any;
    checkEnv(target: any): void;
    isObject(obj: any): boolean;
    extend(obj: any): {};
    isFunction(value: any): boolean;
    EventEmitter: EventEmitter3.EventEmitter;
    nextTick(callback: () => {}): void;
    object(keys: any, vals: any): {};
    Promise: Promise<any>;
    createPromise(resolver:any): Promise<any>;
    isArguments(value: any): boolean;
    throwIf(val: any, msg: any): void;
  }

  interface createActions {
    (definitions: {}): {};
  }

  interface setEventEmitter {
    (ctx: any): void;
  }

  interface setPromise {
    (promise: any): void;
  }

  interface setPromiseFactory {
    (promiseFactory: () => {}): void;
  }

  interface nextTick {
    (nextTick: () => {}): void;
  }

  interface use {
    (pluginCb: any): void;
  }

  interface __keep {
    createdStores: Array<any>;
    createdActions: Array<any>;
    reset(): void;
  }

}

declare module "reflux-core" {
  export = __Reflux;
}
