 Type vs Interface in TypeScript

 Introduction

TypeScript provides two ways to define data structure: type aliases and interface. Both help developer define the shape of data and improve code readability. However, they have some important differences.

Detailed Explanation

interface is mainly used to define the structure of object. It supports inheritance using the extends keyword. Interface also support declaretion merging, which means multiple interfaces with the same name can be combined.

interface User {
  name: string;
  age: number;
}

interface Admin extends User {
  role: string;
}

const admin: Admin = {
  name: "Shakib",
  age: 22,
  role: "Admin"
};


On the other hand, a type alias can define object, union, intersection, primitive types, and tuple.

type Status = "success" | "error";

type Product = {
  name: string;
  price: number;
};

const product: Product = {
  name: "Laptop",
  price: 50000
};


Unlike interfaces, type aliases do not support declaration merging. However, they can combine multiple types using the intersection & operator.

Conclusion

Both type and interface are useful in TypeScript. We should use interface mainly for object structures and inheritance. We should use type when working with unions, intersections, tuples, or primitive types. The choice depends on the requirements of the project.