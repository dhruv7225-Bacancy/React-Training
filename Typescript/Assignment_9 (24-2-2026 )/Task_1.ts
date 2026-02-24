// Assignment 1
// Create a type IsNumber<T> .
// Create a type ExtractEmail<T> that extracts email type if present.

type IsNumber<T>=T extends number ? true : false;


type UserDetails={
    id:number,
    name:string,
    email?:string,
}
type ExtractEmail<T>= T extends {email?:infer U}?U:never;

const email:ExtractEmail<UserDetails>="a@gmail.com"

