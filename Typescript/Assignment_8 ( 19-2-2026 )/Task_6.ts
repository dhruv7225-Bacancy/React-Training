// Assignment 6
// Create a type UserPublicProfile without email and isActive .
// Create a Record that maps user IDs (string) to User objects.


type User = {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
};

type UserPublicProfile=Omit<User, "email"| "isActive">

type UsersRecord = Record<string, User>;

const users: UsersRecord = {
  "u1": {
    id: "u1",
    name: "Dhruv",
    email: "a@b.com",
    isActive: true
  },
  "u2": {
    id: "u2",
    name: "Amit",
    email: "amit@example.com",
    isActive: false
  }
};