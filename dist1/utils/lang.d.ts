import type { TemplateActionProxy } from '../types';
declare const assign: {
    <T extends {}, U>(target: T, source: U): T & U;
    <T_1 extends {}, U_1, V>(target: T_1, source1: U_1, source2: V): T_1 & U_1 & V;
    <T_2 extends {}, U_2, V_1, W>(target: T_2, source1: U_2, source2: V_1, source3: W): T_2 & U_2 & V_1 & W;
    (target: object, ...sources: any[]): any;
};
declare const castArray: <T>(value: T | T[]) => T[];
declare const castError: (exception: unknown) => Error;
declare const flatten: <T>(arr: T[]) => FlatArray<T, 0 | 1 | 2 | 3 | 4 | 5 | -1 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20>[];
declare const indexOf: <T>(arr: ArrayLike<unknown>, value: T) => number;
declare const isArray: (arg: any) => arg is any[];
declare const isBoolean: (value: unknown) => value is boolean;
declare const isError: (value: unknown) => value is Error;
declare const isFalsy: <T>(value: T) => value is Extract<T, false | void | "" | 0 | 0n>;
declare const isFunction: (value: unknown) => value is (...args: any[]) => any;
declare const isNil: (value: unknown) => value is null;
declare const isNode: (value: unknown) => value is Node;
declare const isObject: (value: unknown) => value is object;
declare const isPrimitive: (value: unknown) => value is string | number | bigint | boolean | symbol;
declare const isPromise: (value: unknown) => value is Promise<unknown>;
declare const isProxy: (proxy: any) => proxy is ProxyConstructor;
declare const isString: (value: unknown) => value is string;
declare const isSVG: (value: Element) => value is SVGElement;
declare const isSVGElement: (element: string) => boolean;
declare const isTemplateAccessor: (value: unknown) => value is TemplateActionProxy;
declare const isTruthy: <T>(value: T) => value is Exclude<T, false | void | "" | 0 | 0n>;
declare const isVoidChild: (value: unknown) => value is boolean | symbol;
declare const noop: () => void;
declare const once: <T>(fn: () => T) => () => T;
export declare const fixBigInt: (v: any | bigint) => any;
export declare const toArray: <T>(v: T | T[]) => T[];
export { assign, castArray, castError, flatten, indexOf, isArray, isBoolean, isError, isFalsy, isFunction, isNil, isNode, isObject, isPrimitive, isPromise, isProxy, isString, isSVG, isSVGElement, isTemplateAccessor, isTruthy, isVoidChild, noop, once };
