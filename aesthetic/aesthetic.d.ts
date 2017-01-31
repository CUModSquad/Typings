// Type definitions for aesthetic 0.5.0
// Project: https://github.com/milesj/aesthetic
// Definitions by: JB (codecorsair) <https://github.com/codecorsair>

declare module 'aesthetic' {
  export default class Aesthetic {
    constructor(adapter: any);
  }

  export function createStyler(aesthetic: Aesthetic): (style: any, options: any) => (element: any) => any;

  export function classes(...params: (string | any)[]): string;

  export const ThemeProvider: any;
}
