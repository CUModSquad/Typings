// Type definitions for node-xmpp-client

// Definitions by: Mathias Nachtmann

declare module xmpp  {

  class Client {
    reconnect: boolean;
    prototype: any;
    jid: any;

    constructor (websocket: any, attrs?: any);

    removeAllListeners(remove: string):void;
    end():void;
    on(dd:string, callback?: (error: any) => any):void;
    on(dd:string, callback: () => any, d:any):void;
    send(elem: any): void;
    disconnect(reason: string): void;
  }

  class Element{
    is: any;
    attrs: any;
    from: string;
    
    constructor (t: any, attrs?: any);
    c(t:string):Element;
    c(t:string, d:any):Element;
    t(message:string):Element;
    getChild(t:string):any;
    getText():string;
  }
}

declare module 'node-xmpp-client' {
  export = xmpp;
}