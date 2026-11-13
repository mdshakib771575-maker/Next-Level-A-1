TypeScript Type Hierarchy: any, unknown, and never

Introduction

TypeScript provid special type such as any, unknown, and never. They control how values are assigned and used in a program. Understanding these types helps developer write safer and more reliable code.

Detailed Explanation

The any type disable most type checking. We can assign any value to it and perform operations without TypeScript checking their safety.

let value: any = "Hello";

value = 100;
value.toUpperCase();

This code does not show a TypeScript error, but it causes a runtime error because numbers do not have the toUpperCase() method.

The unknown type can also store any kind of value. However, we must check its type before using it. This makes unknown safer than any.

let data: unknown = "Hello";

if (typeof data === "string") {
  console.log(data.toUpperCase());
}

The never type represent values that never occur. It is commonly used for functions that always throw an error or never finish executing.

function throwError(message: string): never {
  throw new Error(message);
}

The main difference is that any allows unrestricted operations, unknown requires type checking, and never represent impossible values.

Conclusion

We should prefer unknown over any because it provide better type safety. The never type helps identify impossible situations and handle errors correctly. Understanding these three type is important for writing clean and safe TypeScript code.