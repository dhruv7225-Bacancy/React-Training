// Assignment 2
// Create FirstArgument<T> to extract first parameter type.
// Test it with a function that takes (id: string, active: boolean) .

type FirstArgument<T>= T extends (P: infer U,...rest:any[])=>any?U:never

type Test = (id: string, active: boolean) => void;

type Result = FirstArgument<Test>;

const str:Result="abcd"