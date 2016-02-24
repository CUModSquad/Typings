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
}

declare module 'node-xmpp-client' {
  export = xmpp;
}