// Assignment 7
// Create a custom utility ReadonlyByKeys<T, K> that makes selected keys readonly.
// Create a utility NonNullableFields<T> that removes null and undefined from all properties.
// Apply both to User and test different scenarios.


type User = {
  id: string;
  name: string;
  email: string | null;
  isActive?: boolean | null;
};

type ReadonlyByKeys<T, K extends keyof T> =
  Omit<T, K> & {
    readonly [P in K]: T[P];
  };
type NonNullableFields<T> = {
  [K in keyof T]: NonNullable<T[K]>;
};
type SecureUser = ReadonlyByKeys<User, "id" | "email">;

type CleanUser = NonNullableFields<User>;

type FinalUser = ReadonlyByKeys<NonNullableFields<User>, "id">;

const user1: SecureUser = {
  id: "u1",
  name: "Rahul",
  email: "rahul@example.com",
  isActive: true
};

user1.name = "Amit"; 
// user1.id = "u2"; err
// user1.email = "new@mail.com"; err

const user2: CleanUser = {
  id: "u2",
  name: "Amit",
  email: "amit@example.com",
  isActive: false
};

// user2.email = null; err
// user2.isActive = null; err


const user3: FinalUser = {
  id: "u3",
  name: "John",
  email: "john@example.com",
  isActive: true
};

// user3.id = "new"; err