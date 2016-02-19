// Type definitions for reflux 0.3.0
// Project: https://github.com/reflux/refluxjs
// Definitions by: saddieeiddas <https://github.com/saddieeiddas>

/// <reference path="reflux-core.d.ts" />

declare module __Reflux {
  var connect: connect;
  var connectFilter: connectFilter;
  var ListenerMixin: ListenerMixin;
  var listenTo: listenTo;
  var listenToMany: listenToMany;

  interface connect {
    (listenable: any, key: any): connectObject
  }

  interface connectFilter {
    (listenable: any, key: any, filterFunc: () => {}): connectObject
  }

  interface connectObject {
    getInitialState(): any;
    componentDidMount(): any;
    componentWillUnmount(): any;
  }

  interface ListenerMixin extends ListenerMethods {
    componentWillUnmount(): void;
  }

  interface listenTo {
    (listenable:any, callback:Function|string, defaultCallback?:Function|string): listenToObject;
  }

  interface listenToMany {
    (listenables: any): listenToObject;
  }

  interface listenToObject {
    componentDidMount(): void;
    componentWillUnmount(): void;
  }
}

declare module "reflux" {
  export = __Reflux;
}
