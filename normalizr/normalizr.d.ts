// Type definitions for normalizr 2.0.0
// Project: https://github.com/gaearon/normalizr
// Definitions by: JB (codecorsair) <https://github.com/codecorsair>

declare module 'normalizr' {
  
  export interface SchemaOptions {
    idAttribute?: string | ((entity: any) => string);
  }
  
  // Schema lets you define a type of entity returned by your API.
  // This should correspond to a model in your server code.
  //
  // The key parameter lets you specify the name of the dictionary for this kind of entity.
  export class Schema {
    constructor(key: string, options: SchemaOptions);
    
    // Lets you specify relationships between different entities
    public define(nestedSchema: any): void;
    
    // Returns the key of the schema
    public getKey(): string;
    
    // Returns the idAttribute of the schema
    public getIdAttribute(): string | ((entity: any) => string);
  }
  
  export interface SchemaAttributeOptions {
    schemaAttribute?: string | ((entity: any) => string);
  }
  
  // Describes an array of the schema passed as argument
  export function arrayOf<T>(schema: Schema, options?: SchemaAttributeOptions): [T];
  
  // Describes a map whose values follow the schema passed as argument
  export function valuesOf<T>(schema: Schema, options?: SchemaAttributeOptions): [T];
  
  
  // Describe a schema which is a union of multiple schemas.
  // This is useful if you need the polymorphic behavior provided by arrayOf or valueOf
  // but for non-collection fields.
  //
  // Use the required schemaAttribute options to specify which schema to use for each entity
  export function unionOf(schemaMap: any, options: SchemaAttributeOptions): any;
  
  // Normalized object according to schema.
  // Passed schema should be a nested object reflecting the structure of API response.
  //
  // You may optionally specify any of the following options:
  //
  // * assignEntity (function): This is useful if your backend emits additional fields,
  //    such as seperate ID fields, you'd like to delete in the normalized entity.
  //
  // * mergeIntoEntity (function): You can use this to resolve conflicts when merging entities
  //    with the same key.
  export function normalize(obj: any, schema: any, options: any): any;
}