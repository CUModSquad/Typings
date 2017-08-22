// Type definitions for fuzzysearch v1.0.3
// Project: https://github.com/bevacqua/fuzzysearch
// Definitions by: Andrew L. Jackson <https://github.com/Ajackster>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'fuzzysearch' {
  function fuzzySearch(searchValue: string, name: string): boolean;
  namespace fuzzySearch {}
  export = fuzzySearch;
}