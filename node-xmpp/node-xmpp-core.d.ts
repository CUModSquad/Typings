// Partial Type definitions for node-xmpp-core

declare module xmpp  {
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

declare module 'node-xmpp-core' {
  export = xmpp;
}