declare module 'react-emotion' {
  function css(...args): string;
  function injectGlobal(...args): void;
  function keyframes(...args): string;
  function fontFace(...args): void;
  function getRegisteredStyles(registeredStyles: string[], classNames: string): string;
  function merge(className: string, sourceMap: {[key: string]: any}): string;
  function hydrate(ids: any[]): void;
  function flush(): void;
  function cx(...args): string;
  type EmotionStyleProperty = string;
  export default function styled(node: string): any;
}
