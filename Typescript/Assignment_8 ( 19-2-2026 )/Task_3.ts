// Assignment 3
// Create a function updateField that takes:
// object
// key
// value
// Ensure the value type matches the key type.
// Try assigning wrong type and observe the error.

function updateField<T, K extends keyof T>(
  obj: T,
  key: K,
  value: T[K]
): T {
  return {
    ...obj,
    [key]: value,
  };
}

interface User {
  id: number;
  name: string;
  isActive: boolean;
}

const user: User = {
  id: 1,
  name: "Dhruv",
  isActive: true,
};

const updatedUser1 = updateField(user, "name", "Rahul");
const updatedUser2 = updateField(user, "id", 2);
const updatedUser3 = updateField(user, "isActive", false);

updateField(user, "name", 123);        // error
updateField(user, "id", "hello");      // error
updateField(user, "isActive", "yes");  // error
