// Type definitions for aesthetic 0.5.0
// Project: https://github.com/milesj/aesthetic
// Definitions by: JB (codecorsair) <https://github.com/codecorsair>

declare module 'aesthetic' {
  export default class Aesthetic {
    constructor(adapter: any, options?: Partial<AestheticOptions>);
  }

  interface AestheticOptions {
    styleName: string; // The unique style name of the component. This name is primarily used in logging and caching. Defaults to the component or function name.
    extendable: boolean; // Allows the component and its styles to be extended, creating a new component in the process. Defaults to false.
    stylesPropName: string; // Name of the prop in which the compiled class names or styles object is passed to. Defaults to 'className'.
    themePropName: string; // Name of the prop in which the theme name is passed to. Defaults to 'theme'.
  }

  export function createStyler(aesthetic: Aesthetic): (style: any, options: Partial<AestheticOptions>) => (element: any) => any;

  export function classes(...params: (string | any)[]): string;

  export const ThemeProvider: any;
}
